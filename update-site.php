<?php
// update-site.php - يحدث الموقع تلقائياً

// بيانات المدخل
$content = $_POST['content'] ?? '';
$section = $_POST['section'] ?? '';
$action = $_POST['action'] ?? '';

// قراءة البيانات الحالية
$data_file = 'data/site-content.json';
$current_data = json_decode(file_get_contents($data_file), true);

if ($action === 'update') {
    // تحديث القسم المحدد
    parse_str($content, $parsed_content);
    
    foreach ($parsed_content as $key => $value) {
        $keys = explode('.', $key);
        $temp = &$current_data['site'];
        
        foreach ($keys as $k) {
            if (!isset($temp[$k])) {
                $temp[$k] = [];
            }
            $temp = &$temp[$k];
        }
        
        $temp = $value;
    }
    
    // حفظ البيانات
    file_put_contents($data_file, json_encode($current_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    // تحديث الموقع الحقيقي
    updateLiveSite($current_data['site']);
    
    echo json_encode(['success' => true]);
} elseif ($action === 'get') {
    echo json_encode($current_data);
}

function updateLiveSite($site_data) {
    $html_file = 'index.html';
    $html_content = file_get_contents($html_file);
    
    // استبدال المحتوى الديناميكي
    $replacements = [
        // العنوان الرئيسي
        '/<h1[^>]*>[\s\S]*?نحول أفكارك إلى[\s\S]*?<\/h1>/' => 
        '<h1>' . htmlspecialchars($site_data['hero']['title']) . '</h1>',
        
        // الوصف
        '/<p[^>]*class="[^"]*hero-text[^"]*"[^>]*>[\s\S]*?<\/p>/' =>
        '<p class="hero-text">' . htmlspecialchars($site_data['hero']['description']) . '</p>',
        
        // البريد الإلكتروني
        '/mailto:[^"\']+/' => 'mailto:' . $site_data['contact']['email'],
        
        // رقم الهاتف
        '/tel:\+?[\d\s\-]+/' => 'tel:' . $site_data['contact']['phone'],
        
        // واتساب
        '/https:\/\/wa\.me\/\d+/' => 'https://wa.me/' . $site_data['contact']['whatsapp'],
        
        // إنستغرام
        '/https:\/\/www\.instagram\.com\/[^"\']+/' => $site_data['social']['instagram'],
        
        // تيك توك
        '/https:\/\/www\.tiktok\.com\/@[^"\']+/' => $site_data['social']['tiktok']
    ];
    
    foreach ($replacements as $pattern => $replacement) {
        $html_content = preg_replace($pattern, $replacement, $html_content);
    }
    
    // حفظ الملف المحدث
    file_put_contents($html_file, $html_content);
    
    // إنشاء نسخة احتياطية
    $backup_dir = 'backups/';
    if (!is_dir($backup_dir)) mkdir($backup_dir);
    copy($html_file, $backup_dir . 'index_' . date('Y-m-d_H-i-s') . '.html');
}
?>
