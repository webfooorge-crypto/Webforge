<?php
// ملف الربط والتعديل - Web Forge

session_start();

// 1. كلمة المرور المشفرة (غيرها!)
$correct_password_hash = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password123

// 2. الملفات المسموح بتعديلها
$allowed_files = [
    '../index.html',
    '../about.html',
    '../css/style.css'
    // أضف هنا الملفات الأخرى التي تريد التعديل عليها
];

// 3. فحص الدخول
function check_login() {
    if(!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
        http_response_code(401);
        die('يجب تسجيل الدخول أولاً');
    }
}

// 4. تنفيذ الطلبات
$action = $_GET['action'] ?? $_POST['action'] ?? '';

if($action == 'login') {
    // تسجيل الدخول
    $password = $_POST['password'] ?? '';
    
    if(password_verify($password, $correct_password_hash)) {
        $_SESSION['admin_logged_in'] = true;
        echo 'success';
    } else {
        echo 'كلمة مرور خاطئة';
    }
    
} elseif($action == 'list') {
    // قائمة الملفات
    check_login();
    
    $files = [];
    foreach($allowed_files as $file) {
        if(file_exists($file)) {
            $files[] = [
                'name' => basename($file),
                'path' => $file,
                'modified' => date('Y-m-d H:i:s', filemtime($file))
            ];
        }
    }
    
    header('Content-Type: application/json');
    echo json_encode($files);
    
} elseif($action == 'read') {
    // قراءة ملف
    check_login();
    
    $file = $_GET['file'] ?? '';
    
    if(in_array($file, $allowed_files) && file_exists($file)) {
        echo file_get_contents($file);
    } else {
        http_response_code(404);
        echo 'الملف غير موجود أو غير مسموح';
    }
    
} elseif($action == 'write') {
    // كتابة ملف
    check_login();
    
    $file = $_POST['file'] ?? '';
    $content = $_POST['content'] ?? '';
    
    if(in_array($file, $allowed_files)) {
        // إنشاء نسخة احتياطية قبل التعديل
        if(file_exists($file)) {
            $backup = $file . '.backup_' . date('Ymd_His');
            copy($file, $backup);
        }
        
        // كتابة المحتوى الجديد
        file_put_contents($file, $content);
        echo 'تم الحفظ بنجاح';
    } else {
        http_response_code(403);
        echo 'غير مسموح بتعديل هذا الملف';
    }
    
} else {
    echo 'لوحة تحكم Web Forge - جاهزة للعمل';
}
?>
