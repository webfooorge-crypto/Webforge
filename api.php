<?php
// ملف API لربط نظام التحكم بالموقع
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// بيانات الاعتماد
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD', 'webforge2026');

// مسار ملف البيانات
define('DATA_FILE', 'site-data.json');

// وظيفة للرد بخطأ
function jsonError($message, $code = 400) {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

// وظيفة للرد بنجاح
function jsonSuccess($data = [], $message = '') {
    echo json_encode([
        'success' => true,
        'message' => $message,
        'data' => $data
    ]);
    exit;
}

// المصادقة
function authenticate() {
    $headers = getallheaders();
    
    if (!isset($headers['Authorization'])) {
        jsonError('مصادقة مطلوبة', 401);
    }
    
    $auth = $headers['Authorization'];
    if ($auth !== 'Bearer ' . ADMIN_PASSWORD) {
        jsonError('رمز المصادقة غير صالح', 401);
    }
}

// قراءة البيانات
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!file_exists(DATA_FILE)) {
        // إنشاء بيانات أولية
        $initialData = [
            'siteTitle' => 'Web Forge | مجموعة محمد أيت صالح',
            'siteDescription' => 'مجموعة Web Forge تقدم حلولاً تقنية متكاملة في تصميم وتطوير المواقع والمتاجر الإلكترونية',
            'heroText' => 'نحول أفكارك إلى واقع رقمي احترافي',
            'promoText' => '🚀 عرض لفترة محدودة: احصل على خصم 20% عند طلب أول متجر YouCan أو Shopify هذا الأسبوع!',
            'stats' => [
                'visits' => 0,
                'orders' => 0,
                'referrals' => 0
            ]
        ];
        
        file_put_contents(DATA_FILE, json_encode($initialData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }
    
    $data = json_decode(file_get_contents(DATA_FILE), true);
    jsonSuccess($data);
}

// تحديث البيانات
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    authenticate();
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        jsonError('بيانات غير صالحة');
    }
    
    // قراءة البيانات الحالية
    $currentData = [];
    if (file_exists(DATA_FILE)) {
        $currentData = json_decode(file_get_contents(DATA_FILE), true);
    }
    
    // تحديث البيانات
    foreach ($input as $key => $value) {
        $currentData[$key] = $value;
    }
    
    // حفظ البيانات
    if (file_put_contents(DATA_FILE, json_encode($currentData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        jsonSuccess($currentData, 'تم تحديث البيانات بنجاح');
    } else {
        jsonError('فشل حفظ البيانات');
    }
}

// تحديث الإحصائيات
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['type'])) {
        jsonError('نوع العملية مطلوب');
    }
    
    if (!file_exists(DATA_FILE)) {
        jsonError('لم يتم العثور على ملف البيانات');
    }
    
    $data = json_decode(file_get_contents(DATA_FILE), true);
    
    if (!isset($data['stats'])) {
        $data['stats'] = [
            'visits' => 0,
            'orders' => 0,
            'referrals' => 0,
            'gifts' => 0,
            'lastVisit' => null
        ];
    }
    
    $type = $input['type'];
    
    switch ($type) {
        case 'visit':
            $data['stats']['visits']++;
            $data['stats']['lastVisit'] = date('Y-m-d H:i:s');
            break;
            
        case 'order':
            $data['stats']['orders']++;
            break;
            
        case 'referral':
            $data['stats']['referrals']++;
            break;
            
        case 'gift':
            $data['stats']['gifts']++;
            break;
            
        default:
            jsonError('نوع غير معروف');
    }
    
    if (file_put_contents(DATA_FILE, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        jsonSuccess(['stats' => $data['stats']], 'تم تحديث الإحصائيات');
    } else {
        jsonError('فشل تحديث الإحصائيات');
    }
}
?>
