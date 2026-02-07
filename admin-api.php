<?php
// ==============================================
// ملف admin-api.php
// لوحة تحكم Web Forge - النظام الآمن
// ==============================================

// ========== إعدادات النظام ==========
$config = [
    // كلمة المرور الرئيسية (غيّرها!)
    'admin_password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password123 (مثال)
    
    // ملفات الموقع القابلة للتعديل
    'allowed_files' => [
        '../index.html',
        '../about.html',
        '../css/style.css',
        // يمكنك إضافة المزيد من الملفات هنا
    ],
    
    // الصلاحيات
    'max_file_size' => 5 * 1024 * 1024, // 5MB
    'backup_folder' => 'backups/',
    'session_timeout' => 3600 // ساعة واحدة
];

// ========== إعدادات الجلسة ==========
session_start();
header('Content-Type: text/plain; charset=utf-8');

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// ========== وظائف الأمن ==========
function sanitizeInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

function verifyPassword($inputPassword, $storedHash) {
    return password_verify($inputPassword, $storedHash);
}

function isAuthenticated() {
    global $config;
    
    if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
        return false;
    }
    
    // التحقق من انتهاء الجلسة
    if (isset($_SESSION['login_time']) && (time() - $_SESSION['login_time'] > $config['session_timeout'])) {
        session_destroy();
        return false;
    }
    
    // تجديد وقت الجلسة
    $_SESSION['login_time'] = time();
    return true;
}

function requireAuth() {
    if (!isAuthenticated()) {
        http_response_code(401);
        die('غير مصرح بالدخول. يرجى تسجيل الدخول أولاً.');
    }
}

function createBackup($filePath) {
    global $config;
    
    if (!file_exists($config['backup_folder'])) {
        mkdir($config['backup_folder'], 0755, true);
    }
    
    $backupFile = $config['backup_folder'] . basename($filePath) . '_' . date('Y-m-d_H-i-s') . '.bak';
    copy($filePath, $backupFile);
    
    // حذف النسخ القديمة (تحتفظ بـ 10 نسخ فقط)
    $backups = glob($config['backup_folder'] . basename($filePath) . '_*.bak');
    if (count($backups) > 10) {
        usort($backups, function($a, $b) {
            return filemtime($a) - filemtime($b);
        });
        for ($i = 0; $i < count($backups) - 10; $i++) {
            unlink($backups[$i]);
        }
    }
    
    return $backupFile;
}

// ========== معالجة الطلبات ==========
$action = $_POST['action'] ?? $_GET['action'] ?? '';

switch ($action) {
    
    // ========== تسجيل الدخول ==========
    case 'login':
        $password = sanitizeInput($_POST['password'] ?? '');
        
        if (empty($password)) {
            die('كلمة المرور مطلوبة');
        }
        
        if (verifyPassword($password, $config['admin_password'])) {
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['login_time'] = time();
            $_SESSION['ip_address'] = $_SERVER['REMOTE_ADDR'];
            $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
            
            // تسجيل محاولة الدخول الناجحة
            file_put_contents('login_log.txt', date('Y-m-d H:i:s') . " - تسجيل دخول ناجح من IP: " . $_SERVER['REMOTE_ADDR'] . "\n", FILE_APPEND);
            
            echo 'success';
        } else {
            // تسجيل محاولة الدخول الفاشلة
            file_put_contents('login_log.txt', date('Y-m-d H:i:s') . " - محاولة دخول فاشلة من IP: " . $_SERVER['REMOTE_ADDR'] . "\n", FILE_APPEND);
            
            http_response_code(401);
            echo 'كلمة المرور غير صحيحة';
        }
        break;
    
    // ========== تسجيل الخروج ==========
    case 'logout':
        session_destroy();
        echo 'تم تسجيل الخروج بنجاح';
        break;
    
    // ========== قراءة الملفات ==========
    case 'read':
        requireAuth();
        
        $file = sanitizeInput($_GET['file'] ?? '');
        
        if (empty($file)) {
            http_response_code(400);
            die('اسم الملف مطلوب');
        }
        
        // التحقق من أن الملف مسموح به
        if (!in_array($file, $config['allowed_files'])) {
            http_response_code(403);
            die('غير مسموح بالوصول إلى هذا الملف');
        }
        
        if (!file_exists($file)) {
            http_response_code(404);
            die('الملف غير موجود');
        }
        
        $content = file_get_contents($file);
        if ($content === false) {
            http_response_code(500);
            die('خطأ في قراءة الملف');
        }
        
        header('Content-Type: text/plain; charset=utf-8');
        echo $content;
        break;
    
    // ========== كتابة الملفات ==========
    case 'write':
        requireAuth();
        
        $file = sanitizeInput($_POST['file'] ?? '');
        $content = $_POST['content'] ?? '';
        
        if (empty($file)) {
            http_response_code(400);
            die('اسم الملف مطلوب');
        }
        
        // التحقق من أن الملف مسموح به
        if (!in_array($file, $config['allowed_files'])) {
            http_response_code(403);
            die('غير مسموح بالوصول إلى هذا الملف');
        }
        
        // إنشاء نسخة احتياطية قبل التعديل
        $backupFile = createBackup($file);
        
        // محاولة الكتابة
        $result = file_put_contents($file, $content);
        
        if ($result === false) {
            http_response_code(500);
            die('خطأ في حفظ الملف');
        }
        
        // تسجيل التعديل
        file_put_contents('edit_log.txt', 
            date('Y-m-d H:i:s') . " - تم تعديل: " . $file . 
            " - النسخة الاحتياطية: " . basename($backupFile) . 
            " - IP: " . $_SERVER['REMOTE_ADDR'] . "\n", 
            FILE_APPEND
        );
        
        echo 'تم حفظ التعديلات بنجاح';
        break;
    
    // ========== قائمة الملفات ==========
    case 'list':
        requireAuth();
        
        $files = [];
        foreach ($config['allowed_files'] as $file) {
            if (file_exists($file)) {
                $files[] = [
                    'name' => basename($file),
                    'path' => $file,
                    'size' => filesize($file),
                    'modified' => date('Y-m-d H:i:s', filemtime($file))
                ];
            }
        }
        
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($files, JSON_UNESCAPED_UNICODE);
        break;
    
    // ========== رفع الصور ==========
    case 'upload':
        requireAuth();
        
        if (!isset($_FILES['image'])) {
            http_response_code(400);
            die('لم يتم رفع أي ملف');
        }
        
        $file = $_FILES['image'];
        
        // التحقق من الأخطاء
        if ($file['error'] !== UPLOAD_ERR_OK) {
            http_response_code(400);
            die('خطأ في رفع الملف: ' . $file['error']);
        }
        
        // التحقق من الحجم
        if ($file['size'] > $config['max_file_size']) {
            http_response_code(400);
            die('حجم الملف كبير جداً (الحد الأقصى 5MB)');
        }
        
        // التحقق من نوع الملف
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!in_array($file['type'], $allowedTypes)) {
            http_response_code(400);
            die('نوع الملف غير مسموح به. المسموح: JPG, PNG, GIF, WebP');
        }
        
        // إنشاء اسم فريد للملف
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $filename = 'img_' . time() . '_' . uniqid() . '.' . $extension;
        $uploadPath = '../images/' . $filename;
        
        // التأكد من وجود مجلد الصور
        if (!file_exists('../images/')) {
            mkdir('../images/', 0755, true);
        }
        
        // نقل الملف
        if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
            // تسجيل العملية
            file_put_contents('upload_log.txt', 
                date('Y-m-d H:i:s') . " - تم رفع: " . $filename . 
                " - IP: " . $_SERVER['REMOTE_ADDR'] . "\n", 
                FILE_APPEND
            );
            
            echo json_encode([
                'success' => true,
                'filename' => $filename,
                'url' => 'images/' . $filename,
                'message' => 'تم رفع الصورة بنجاح'
            ], JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(500);
            die('خطأ في حفظ الملف على الخادم');
        }
        break;
    
    // ========== حالة النظام ==========
    case 'status':
        requireAuth();
        
        $status = [
            'authenticated' => true,
            'session_time' => $_SESSION['login_time'] ?? null,
            'server_time' => date('Y-m-d H:i:s'),
            'allowed_files' => count($config['allowed_files']),
            'php_version' => PHP_VERSION,
            'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'غير معروف'
        ];
        
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($status, JSON_UNESCAPED_UNICODE);
        break;
    
    // ========== افتراضي ==========
    default:
        http_response_code(400);
        die('إجراء غير معروف');
}

// ========== تحقق من الهجمات ==========
function checkSecurity() {
    // التحقق من تزوير الطلبات عبر المواقع (CSRF)
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $referer = $_SERVER['HTTP_REFERER'] ?? '';
        $server = $_SERVER['HTTP_HOST'] ?? '';
        
        if (!empty($referer) && !strpos($referer, $server)) {
            http_response_code(403);
            die('طلب غير مصرح به');
        }
    }
}

// تنفيذ التحقق الأمني
checkSecurity();
?>
