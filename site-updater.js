<!-- ضع هذا الملف في المجلد الرئيسي باسم owner-access.html -->
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>وصول المالك - Web Forge</title>
    <style>
        body {
            font-family: 'Tajawal', sans-serif;
            background: #0f172a;
            color: #f8fafc;
            text-align: center;
            padding: 50px 20px;
            direction: rtl;
        }
        
        .container {
            max-width: 500px;
            margin: 0 auto;
            background: #1e293b;
            padding: 40px;
            border-radius: 15px;
            border: 2px solid #38bdf8;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        h1 {
            color: #38bdf8;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }
        
        .btn {
            display: inline-block;
            background: linear-gradient(90deg, #38bdf8, #0ea5e9);
            color: #000;
            padding: 15px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            margin: 10px;
            transition: 0.3s;
            border: none;
            cursor: pointer;
            font-family: inherit;
            font-size: 1rem;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(56, 189, 248, 0.4);
        }
        
        .btn-danger {
            background: linear-gradient(90deg, #ef4444, #dc2626);
            color: white;
        }
        
        .btn-success {
            background: linear-gradient(90deg, #10b981, #059669);
            color: white;
        }
        
        .notice {
            background: rgba(245, 158, 11, 0.1);
            border: 1px solid #f59e0b;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: right;
        }
        
        .links {
            margin-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 20px;
        }
        
        .link-item {
            display: block;
            color: #94a3b8;
            text-decoration: none;
            padding: 10px;
            margin: 5px 0;
            border-radius: 6px;
            transition: 0.3s;
        }
        
        .link-item:hover {
            background: rgba(255,255,255,0.05);
            color: #f8fafc;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1><i class="fas fa-crown"></i> وصول المالك</h1>
        
        <div class="notice">
            <p><i class="fas fa-shield-alt"></i> <strong>تنبيه أمني:</strong> هذه الصفحة للاستخدام الداخلي فقط</p>
        </div>
        
        <p>اختر الإجراء الذي تريد تنفيذه:</p>
        
        <div>
            <button onclick="openAdmin()" class="btn">
                <i class="fas fa-code"></i> فتح لوحة التحكم
            </button>
            
            <button onclick="refreshSite()" class="btn btn-success">
                <i class="fas fa-sync-alt"></i> تحديث الموقع
            </button>
            
            <button onclick="clearCache()" class="btn btn-danger">
                <i class="fas fa-trash"></i> مسح الذاكرة
            </button>
        </div>
        
        <div class="links">
            <h3><i class="fas fa-link"></i> روابط سريعة:</h3>
            <a href="admin.html" target="_blank" class="link-item">
                <i class="fas fa-tachometer-alt"></i> لوحة التحكم الرئيسية
            </a>
            <a href="index.html#owner" target="_blank" class="link-item">
                <i class="fas fa-eye"></i> عرض الموقع (وضع المالك)
            </a>
            <a href="index.html" target="_blank" class="link-item">
                <i class="fas fa-globe"></i> الموقع الرئيسي
            </a>
            <a href="mailto:webfooorge@gmail.com" class="link-item">
                <i class="fas fa-envelope"></i> البريد الإلكتروني
            </a>
        </div>
    </div>
    
    <script>
        function openAdmin() {
            window.open('admin.html', '_blank');
        }
        
        function refreshSite() {
            localStorage.setItem('force_refresh', Date.now());
            window.open('index.html', '_blank');
            alert('سيتم تحديث الموقع في نافذة جديدة');
        }
        
        function clearCache() {
            if (confirm('هل تريد مسح جميع بيانات التخزين المؤقت؟')) {
                localStorage.clear();
                alert('تم مسح الذاكرة بنجاح');
                location.reload();
            }
        }
        
        // التحقق من هوية المالك
        const password = prompt('أدخل كلمة مرور المالك:');
        if (password !== 'WebForge2026!') {
            alert('غير مصرح بالدخول');
            window.location.href = 'index.html';
        }
    </script>
</body>
</html>
