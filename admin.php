<?php
// ========== حماية حقيقية بالـ PHP ==========
session_start();

// كلمة المرور الرئيسية (غيرها الآن!)
$admin_password = 'WebForge@2026!';

// إذا لم يكن مسجل دخول، عرض صفحة الدخول
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    if (isset($_POST['password'])) {
        if ($_POST['password'] === $admin_password) {
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['login_time'] = time();
            header('Location: admin.php');
            exit;
        } else {
            $error = 'كلمة المرور غير صحيحة';
        }
    }
    ?>
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🔒 دخول المالك - Web Forge</title>
        <style>
            body {
                font-family: 'Tajawal', sans-serif;
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: #f8fafc;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                margin: 0;
                padding: 20px;
                direction: rtl;
            }
            .login-box {
                background: rgba(30, 41, 59, 0.95);
                padding: 40px;
                border-radius: 15px;
                width: 100%;
                max-width: 400px;
                border: 1px solid rgba(56, 189, 248, 0.3);
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                text-align: center;
                backdrop-filter: blur(10px);
            }
            .logo {
                margin-bottom: 30px;
            }
            .logo h1 {
                color: #38bdf8;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
                font-size: 1.8rem;
            }
            .password-input {
                width: 100%;
                padding: 15px;
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 8px;
                color: #fff;
                font-size: 1rem;
                text-align: center;
                letter-spacing: 2px;
                font-family: 'Tajawal', sans-serif;
                margin-bottom: 20px;
            }
            .login-btn {
                width: 100%;
                padding: 15px;
                background: linear-gradient(90deg, #38bdf8, #0ea5e9);
                color: #000;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                font-family: inherit;
                transition: 0.3s;
            }
            .login-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(56, 189, 248, 0.4);
            }
            .error {
                background: rgba(239, 68, 68, 0.1);
                border: 1px solid #ef4444;
                color: #ef4444;
                padding: 12px;
                border-radius: 8px;
                margin-bottom: 20px;
                animation: shake 0.5s;
            }
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            .security-note {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid rgba(255,255,255,0.1);
                color: #94a3b8;
                font-size: 0.9rem;
            }
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    </head>
    <body>
        <div class="login-box">
            <div class="logo">
                <h1><i class="fas fa-lock"></i> دخول المالك</h1>
                <p style="color: #94a3b8;">لوحة تحكم Web Forge</p>
            </div>
            
            <?php if (isset($error)): ?>
                <div class="error">
                    <i class="fas fa-exclamation-circle"></i> <?php echo $error; ?>
                </div>
            <?php endif; ?>
            
            <form method="POST">
                <input type="password" 
                       name="password" 
                       class="password-input" 
                       placeholder="أدخل كلمة مرور المالك"
                       required
                       autofocus>
                <button type="submit" class="login-btn">
                    <i class="fas fa-sign-in-alt"></i> دخول إلى لوحة التحكم
                </button>
            </form>
            
            <div class="security-note">
                <i class="fas fa-shield-alt"></i>
                <p>هذه الواجهة للاستخدام الداخلي فقط</p>
            </div>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// تحقق من انتهاء الجلسة (30 دقيقة)
if (time() - $_SESSION['login_time'] > 1800) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

// تجديد وقت الجلسة
$_SESSION['login_time'] = time();
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>👑 لوحة تحكم المالك - Web Forge</title>
    <style>
        /* ========== متغيرات التصميم ========== */
        :root {
            --primary: #38bdf8;
            --primary-dark: #0ea5e9;
            --forge-orange: #f59e0b;
            --bg-dark: #0f172a;
            --bg-card: #1e293b;
            --text-main: #f8fafc;
            --text-secondary: #94a3b8;
            --success: #10b981;
            --error: #ef4444;
            --radius: 10px;
            --shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
        
        /* ========== الأساسيات ========== */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Tajawal', 'Cairo', sans-serif;
            background: var(--bg-dark);
            color: var(--text-main);
            min-height: 100vh;
            direction: rtl;
        }
        
        /* ========== شريط التنقل ========== */
        .admin-header {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            height: 70px;
            background: var(--bg-card);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 25px;
            z-index: 1000;
            backdrop-filter: blur(10px);
        }
        
        .header-brand {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 1.3rem;
            font-weight: 700;
        }
        
        .header-brand i { color: var(--primary); }
        
        .header-actions {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        /* ========== الأزرار ========== */
        .btn {
            padding: 10px 20px;
            border-radius: var(--radius);
            border: none;
            cursor: pointer;
            font-family: inherit;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: 0.3s;
            font-size: 0.9rem;
        }
        
        .btn-primary {
            background: var(--primary);
            color: #000;
        }
        
        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
        }
        
        .btn-secondary {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: var(--text-main);
        }
        
        .btn-secondary:hover {
            background: rgba(255,255,255,0.15);
            border-color: var(--primary);
        }
        
        .btn-danger {
            background: rgba(239,68,68,0.1);
            border: 1px solid rgba(239,68,68,0.2);
            color: var(--error);
        }
        
        .btn-danger:hover {
            background: rgba(239,68,68,0.2);
        }
        
        /* ========== المحتوى ========== */
        .admin-content {
            margin-top: 70px;
            padding: 30px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin-bottom: 30px;
        }
        
        .card {
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 25px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: var(--shadow);
        }
        
        .card h3 {
            color: var(--primary);
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        /* ========== النماذج ========== */
        .form-group { margin-bottom: 20px; }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: var(--text-main);
            font-weight: 500;
        }
        
        .form-control {
            width: 100%;
            padding: 12px 15px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 8px;
            color: var(--text-main);
            font-family: inherit;
            font-size: 1rem;
            transition: 0.3s;
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
        }
        
        textarea.form-control {
            min-height: 100px;
            resize: vertical;
        }
        
        /* ========== الإشعارات ========== */
        .notification {
            position: fixed;
            top: 80px;
            right: 25px;
            padding: 15px 25px;
            border-radius: var(--radius);
            z-index: 2000;
            animation: slideIn 0.3s;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: var(--shadow);
            max-width: 400px;
        }
        
        .notification.success {
            background: var(--success);
            color: #000;
            border-right: 4px solid #059669;
        }
        
        .notification.error {
            background: var(--error);
            color: #fff;
            border-right: 4px solid #dc2626;
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        /* ========== الإحصائيات ========== */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .stat-item {
            background: rgba(255,255,255,0.05);
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        .stat-item .number {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary);
            margin-bottom: 5px;
        }
        
        /* ========== تجاوب الجوال ========== */
        @media (max-width: 768px) {
            .admin-content { padding: 20px; }
            .dashboard-grid { grid-template-columns: 1fr; }
            .admin-header { padding: 0 15px; }
            .btn span { display: none; }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- شريط التنقل -->
    <header class="admin-header">
        <div class="header-brand">
            <i class="fas fa-crown"></i>
            <span>لوحة تحكم المالك</span>
        </div>
        <div class="header-actions">
            <button onclick="window.open('../index.html', '_blank')" class="btn btn-secondary">
                <i class="fas fa-eye"></i> <span>عرض الموقع</span>
            </button>
            <button onclick="updateLiveSite()" class="btn btn-primary">
                <i class="fas fa-bolt"></i> <span>تحديث الموقع</span>
            </button>
            <button onclick="adminLogout()" class="btn btn-danger">
                <i class="fas fa-sign-out-alt"></i> <span>تسجيل الخروج</span>
            </button>
        </div>
    </header>
    
    <!-- المحتوى الرئيسي -->
    <main class="admin-content">
        <!-- معلومات النظام -->
        <div class="card" style="grid-column: 1 / -1; margin-bottom: 25px;">
            <h3><i class="fas fa-tachometer-alt"></i> نظرة عامة</h3>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="number" id="visitsCount">0</div>
                    <div>زوار اليوم</div>
                </div>
                <div class="stat-item">
                    <div class="number" id="projectsCount">0</div>
                    <div>المشاريع</div>
                </div>
                <div class="stat-item">
                    <div class="number" id="lastUpdate">الآن</div>
                    <div>آخر تحديث</div>
                </div>
                <div class="stat-item">
                    <div class="number"><i class="fas fa-circle" style="color: var(--success);"></i></div>
                    <div>حالة الموقع</div>
                </div>
            </div>
        </div>
        
        <!-- القسم الرئيسي -->
        <div class="dashboard-grid">
            <div class="card">
                <h3><i class="fas fa-home"></i> القسم الرئيسي</h3>
                <div class="form-group">
                    <label>العنوان الرئيسي:</label>
                    <input type="text" id="heroTitle" class="form-control" placeholder="نحول أفكارك إلى...">
                </div>
                <div class="form-group">
                    <label>الوصف:</label>
                    <textarea id="heroDescription" class="form-control" rows="4" placeholder="وصف موقعك..."></textarea>
                </div>
                <button onclick="saveHero()" class="btn btn-primary" style="width: 100%;">
                    <i class="fas fa-save"></i> حفظ القسم الرئيسي
                </button>
            </div>
            
            <!-- الإحصائيات -->
            <div class="card">
                <h3><i class="fas fa-chart-line"></i> الإحصائيات</h3>
                <div class="form-group">
                    <label>عدد المشاريع:</label>
                    <input type="number" id="statsProjects" class="form-control" min="0" max="999">
                </div>
                <div class="form-group">
                    <label>نسبة الرضا %:</label>
                    <input type="number" id="statsSatisfaction" class="form-control" min="0" max="100">
                </div>
                <button onclick="saveStats()" class="btn btn-primary" style="width: 100%;">
                    <i class="fas fa-save"></i> حفظ الإحصائيات
                </button>
            </div>
            
            <!-- الخدمات -->
            <div class="card">
                <h3><i class="fas fa-concierge-bell"></i> الخدمات</h3>
                <div id="servicesContainer">
                    <!-- سيتم ملؤها بـ JavaScript -->
                </div>
                <button onclick="addService()" class="btn btn-secondary" style="width: 100%; margin-top: 15px;">
                    <i class="fas fa-plus"></i> إضافة خدمة جديدة
                </button>
            </div>
            
            <!-- العرض الترويجي -->
            <div class="card">
                <h3><i class="fas fa-bullhorn"></i> العرض الترويجي</h3>
                <div class="form-group">
                    <label>نص العرض:</label>
                    <textarea id="promoText" class="form-control" rows="3" placeholder="اكتب العرض الترويجي هنا..."></textarea>
                </div>
                <button onclick="savePromo()" class="btn btn-primary" style="width: 100%;">
                    <i class="fas fa-save"></i> حفظ العرض
                </button>
            </div>
        </div>
        
        <!-- إدارة النظام -->
        <div class="card" style="grid-column: 1 / -1; margin-top: 25px;">
            <h3><i class="fas fa-cogs"></i> إدارة النظام</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                <div>
                    <button onclick="changePassword()" class="btn btn-secondary" style="width: 100%; margin-bottom: 10px;">
                        <i class="fas fa-key"></i> تغيير كلمة المرور
                    </button>
                    <button onclick="backupData()" class="btn btn-secondary" style="width: 100%;">
                        <i class="fas fa-download"></i> نسخ احتياطي
                    </button>
                </div>
                <div>
                    <button onclick="clearCache()" class="btn btn-secondary" style="width: 100%; margin-bottom: 10px;">
                        <i class="fas fa-trash"></i> مسح الذاكرة المؤقتة
                    </button>
                    <button onclick="viewLogs()" class="btn btn-secondary" style="width: 100%;">
                        <i class="fas fa-history"></i> سجل الأنشطة
                    </button>
                </div>
            </div>
        </div>
    </main>
    
    <script>
        // ========== البيانات ==========
        let siteData = {
            hero: {
                title: 'نحول أفكارك إلى',
                description: 'مجموعة web forge تقدم لك حلولاً تقنية متكاملة. متخصصون في صناعة الهوية الرقمية، تطوير متاجر YouCan و Shopify، وتصميم المواقع العصرية.'
            },
            stats: {
                projects: 50,
                satisfaction: 100
            },
            services: [
                { id: 1, title: 'متاجر YouCan', description: 'تصميم وتجهيز متاجر YouCan احترافية بالكامل.' },
                { id: 2, title: 'متاجر Shopify', description: 'تطوير متاجر دروبشيبينغ أو براند خاص عالمي.' },
                { id: 3, title: 'مواقع Web Forge', description: 'مواقع خاصة: مدونة، طبيب، محامي، Portfolio، كتب.' }
            ],
            promo: {
                text: '🚀 عرض لفترة محدودة: احصل على خصم 20% عند طلب أول متجر YouCan أو Shopify هذا الأسبوع!'
            }
        };
        
        // ========== تحميل البيانات ==========
        function loadData() {
            const saved = localStorage.getItem('webforge_site_data');
            if (saved) {
                try {
                    siteData = JSON.parse(saved);
                    updateForms();
                    showNotification('تم تحميل البيانات بنجاح', 'success');
                } catch (e) {
                    console.error('خطأ في تحميل البيانات:', e);
                }
            }
        }
        
        function updateForms() {
            // القسم الرئيسي
            document.getElementById('heroTitle').value = siteData.hero?.title || '';
            document.getElementById('heroDescription').value = siteData.hero?.description || '';
            
            // الإحصائيات
            document.getElementById('statsProjects').value = siteData.stats?.projects || 0;
            document.getElementById('statsSatisfaction').value = siteData.stats?.satisfaction || 0;
            
            // العرض الترويجي
            document.getElementById('promoText').value = siteData.promo?.text || '';
            
            // الخدمات
            updateServicesList();
            
            // تحديث الإحصائيات
            document.getElementById('projectsCount').textContent = siteData.stats?.projects || 0;
        }
        
        function updateServicesList() {
            const container = document.getElementById('servicesContainer');
            container.innerHTML = '';
            
            if (siteData.services && siteData.services.length > 0) {
                siteData.services.forEach((service, index) => {
                    const div = document.createElement('div');
                    div.className = 'service-item';
                    div.style.cssText = `
                        background: rgba(255,255,255,0.03);
                        border: 1px solid rgba(255,255,255,0.1);
                        border-radius: 8px;
                        padding: 15px;
                        margin-bottom: 10px;
                    `;
                    
                    div.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                            <input type="text" 
                                   value="${service.title}" 
                                   oninput="updateService(${index}, 'title', this.value)"
                                   style="flex: 1; background: transparent; border: none; color: var(--text-main); font-size: 1rem; padding: 5px;"
                                   placeholder="عنوان الخدمة">
                            <button onclick="removeService(${index})" style="background: none; border: none; color: var(--error); cursor: pointer;">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <textarea oninput="updateService(${index}, 'description', this.value)"
                                  style="width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 10px; color: var(--text-main); resize: vertical; min-height: 60px;"
                                  placeholder="وصف الخدمة...">${service.description}</textarea>
                    `;
                    
                    container.appendChild(div);
                });
            }
        }
        
        // ========== حفظ البيانات ==========
        function saveHero() {
            siteData.hero = {
                title: document.getElementById('heroTitle').value,
                description: document.getElementById('heroDescription').value
            };
            
            saveData();
            showNotification('تم حفظ القسم الرئيسي بنجاح', 'success');
        }
        
        function saveStats() {
            siteData.stats = {
                projects: parseInt(document.getElementById('statsProjects').value) || 0,
                satisfaction: parseInt(document.getElementById('statsSatisfaction').value) || 0
            };
            
            saveData();
            document.getElementById('projectsCount').textContent = siteData.stats.projects;
            showNotification('تم حفظ الإحصائيات بنجاح', 'success');
        }
        
        function savePromo() {
            siteData.promo = {
                text: document.getElementById('promoText').value
            };
            
            saveData();
            showNotification('تم حفظ العرض الترويجي بنجاح', 'success');
        }
        
        function saveData() {
            siteData.lastUpdate = new Date().toISOString();
            localStorage.setItem('webforge_site_data', JSON.stringify(siteData));
            
            // تحديث وقت التحديث
            const now = new Date();
            document.getElementById('lastUpdate').textContent = `${now.getHours()}:${now.getMinutes()}`;
            
            // تحديث الموقع مباشرة
            updateLiveSite();
        }
        
        // ========== إدارة الخدمات ==========
        function addService() {
            if (!siteData.services) siteData.services = [];
            
            siteData.services.push({
                id: Date.now(),
                title: 'خدمة جديدة',
                description: 'وصف الخدمة الجديدة...'
            });
            
            saveData();
            updateServicesList();
            showNotification('تمت إضافة خدمة جديدة', 'success');
        }
        
        function updateService(index, field, value) {
            if (siteData.services && siteData.services[index]) {
                siteData.services[index][field] = value;
                saveData();
            }
        }
        
        function removeService(index) {
            if (confirm('هل تريد حذف هذه الخدمة؟')) {
                siteData.services.splice(index, 1);
                saveData();
                updateServicesList();
                showNotification('تم حذف الخدمة', 'error');
            }
        }
        
        // ========== التحديث المباشر للموقع ==========
        function updateLiveSite() {
            // 1. حفظ في localStorage للموقع الرئيسي
            localStorage.setItem('webforge_live_update', JSON.stringify({
                data: siteData,
                timestamp: Date.now()
            }));
            
            // 2. إرسال رسالة للصفحة الرئيسية
            try {
                window.postMessage({
                    type: 'WEBFORGE_LIVE_UPDATE',
                    data: siteData
                }, '*');
                
                // 3. تحديث الـ title
                document.title = `👑 لوحة التحكم - ${new Date().toLocaleTimeString('ar-EG')}`;
                
                showNotification('تم تحديث الموقع بنجاح', 'success');
            } catch (e) {
                console.error('خطأ في التحديث المباشر:', e);
            }
        }
        
        // ========== إدارة النظام ==========
        function changePassword() {
            const newPass = prompt('أدخل كلمة المرور الجديدة (8 أحرف على الأقل):');
            if (newPass && newPass.length >= 8) {
                // هنا في بيئة حقيقية، سيتم حفظها في قاعدة بيانات
                alert('في النسخة النهائية، سيتم حفظ كلمة المرور في قاعدة بيانات آمنة');
                showNotification('تم تغيير كلمة المرور', 'success');
            }
        }
        
        function backupData() {
            const dataStr = JSON.stringify(siteData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `webforge-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showNotification('تم إنشاء نسخة احتياطية', 'success');
        }
        
        function clearCache() {
            if (confirm('هل تريد مسح جميع البيانات المؤقتة؟')) {
                localStorage.removeItem('webforge_site_data');
                localStorage.removeItem('webforge_live_update');
                location.reload();
            }
        }
        
        function viewLogs() {
            alert('سجل الأنشطة:\n\n' + 
                  `آخر تحديث: ${siteData.lastUpdate || 'غير معروف'}\n` +
                  `عدد الخدمات: ${siteData.services?.length || 0}\n` +
                  `عدد المشاريع: ${siteData.stats?.projects || 0}`);
        }
        
        function adminLogout() {
            if (confirm('هل تريد تسجيل الخروج؟')) {
                // في بيئة PHP، سنقوم بتدمير الجلسة
                window.location.href = 'admin.php?logout=1';
            }
        }
        
        // ========== دوال المساعدة ==========
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.opacity = '0';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 3000);
        }
        
        // ========== بدء التشغيل ==========
        document.addEventListener('DOMContentLoaded', function() {
            loadData();
            
            // تحديث عدد الزوار (محاكاة)
            const visits = Math.floor(Math.random() * 100) + 50;
            document.getElementById('visitsCount').textContent = visits;
            
            // تحديث تلقائي كل دقيقة
            setInterval(() => {
                const now = new Date();
                document.getElementById('lastUpdate').textContent = `${now.getHours()}:${now.getMinutes()}`;
            }, 60000);
        });
        
        // جعل الدوال متاحة عالمياً
        window.updateLiveSite = updateLiveSite;
        window.saveHero = saveHero;
        window.saveStats = saveStats;
        window.savePromo = savePromo;
        window.addService = addService;
        window.updateService = updateService;
        window.removeService = removeService;
        window.changePassword = changePassword;
        window.backupData = backupData;
        window.clearCache = clearCache;
        window.viewLogs = viewLogs;
        window.adminLogout = adminLogout;
    </script>
</body>
</html>
<?php
// معالجة تسجيل الخروج
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}
?>
