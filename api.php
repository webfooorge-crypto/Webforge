
<?php
// api.php - API للتعامل مع GitHub

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// إعدادات GitHub
$github_token = 'YOUR_GITHUB_TOKEN'; // ضع token هنا
$github_username = 'YOUR_GITHUB_USERNAME';
$repo_name = 'YOUR_REPO_NAME';

// دالة للاتصال بـ GitHub API
function githubRequest($url, $method = 'GET', $data = null) {
    global $github_token;
    
    $headers = [
        'Authorization: token ' . $github_token,
        'User-Agent: WebForge-Admin',
        'Content-Type: application/json'
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data ? json_encode($data) : '');
    }
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}

// الحصول على محتويات ملف
if (isset($_GET['action']) && $_GET['action'] === 'getFile') {
    $file_path = $_GET['file'] ?? 'index.html';
    $url = "https://api.github.com/repos/{$github_username}/{$repo_name}/contents/{$file_path}";
    
    $result = githubRequest($url);
    
    if (isset($result['content'])) {
        echo json_encode([
            'success' => true,
            'content' => base64_decode($result['content']),
            'sha' => $result['sha']
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'error' => $result['message'] ?? 'خطأ غير معروف'
        ]);
    }
}

// تحديث ملف
elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'updateFile') {
    $file_path = $_POST['file'] ?? 'index.html';
    $content = $_POST['content'] ?? '';
    $commit_message = $_POST['message'] ?? 'تحديث من لوحة التحكم';
    $sha = $_POST['sha'] ?? null;
    
    $url = "https://api.github.com/repos/{$github_username}/{$repo_name}/contents/{$file_path}";
    
    $data = [
        'message' => $commit_message,
        'content' => base64_encode($content),
        'branch' => 'main'
    ];
    
    if ($sha) {
        $data['sha'] = $sha;
    }
    
    $result = githubRequest($url, 'PUT', $data);
    
    if (isset($result['content'])) {
        echo json_encode([
            'success' => true,
            'message' => 'تم تحديث الملف بنجاح',
            'sha' => $result['content']['sha']
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'error' => $result['message'] ?? 'خطأ في التحديث'
        ]);
    }
}

// الحصول على آخر التحديثات
elseif (isset($_GET['action']) && $_GET['action'] === 'getCommits') {
    $url = "https://api.github.com/repos/{$github_username}/{$repo_name}/commits";
    
    $result = githubRequest($url);
    
    if (is_array($result)) {
        echo json_encode([
            'success' => true,
            'commits' => array_slice($result, 0, 5)
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'error' => $result['message'] ?? 'خطأ في جلب التحديثات'
        ]);
    }
}

// اختبار الاتصال
elseif (isset($_GET['action']) && $_GET['action'] === 'testConnection') {
    $url = "https://api.github.com/repos/{$github_username}/{$repo_name}";
    
    $result = githubRequest($url);
    
    if (isset($result['id'])) {
        echo json_encode([
            'success' => true,
            'message' => 'تم الاتصال بنجاح',
            'repo' => $result['name'],
            'owner' => $result['owner']['login']
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'error' => $result['message'] ?? 'فشل الاتصال'
        ]);
    }
}

// جلب قائمة الملفات
elseif (isset($_GET['action']) && $_GET['action'] === 'listFiles') {
    $url = "https://api.github.com/repos/{$github_username}/{$repo_name}/contents/";
    
    $result = githubRequest($url);
    
    if (is_array($result)) {
        $files = [];
        foreach ($result as $item) {
            $files[] = [
                'name' => $item['name'],
                'type' => $item['type'],
                'size' => $item['size'],
                'path' => $item['path']
            ];
        }
        
        echo json_encode([
            'success' => true,
            'files' => $files
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'error' => $result['message'] ?? 'خطأ في جلب الملفات'
        ]);
    }
}

else {
    echo json_encode([
        'success' => false,
        'error' => 'إجراء غير معروف'
    ]);
}
?>
