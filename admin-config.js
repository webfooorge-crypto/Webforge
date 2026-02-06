// admin-config.js
const ADMIN_PASSWORD = "WebForge2026"; // كلمة المرور الافتراضية

// التحقق من تسجيل الدخول
function login() {
    const password = document.getElementById('adminPassword').value;
    
    if (password === ADMIN_PASSWORD) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        loadDashboardData();
        showNotification('تم تسجيل الدخول بنجاح!', 'success');
    } else {
        showNotification('كلمة المرور غير صحيحة!', 'error');
        document.getElementById('adminPassword').value = '';
        document.getElementById('adminPassword').focus();
    }
}

// إظهار/إخفاء الشريط الجانبي
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// إظهار الأقسام
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // إظهار القسم المطلوب
    document.getElementById(`${sectionId}-section`).style.display = 'block';
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// تحميل بيانات لوحة التحكم
function loadDashboardData() {
    // تحديث آخر تحديث
    const now = new Date();
    document.getElementById('lastUpdate').textContent = 
        `${now.getHours()}:${now.getMinutes()} - ${now.toLocaleDateString('ar')}`;
    
    // تحميل التغييرات الأخيرة
    loadChangeLog();
}

// تسجيل الخروج
function logout() {
    if (confirm('هل تريد تسجيل الخروج؟')) {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('loginScreen').style.display = 'block';
        document.getElementById('adminPassword').value = '';
        showNotification('تم تسجيل الخروج', 'info');
    }
}

// نظام الإشعارات
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = 'live-notification';
    
    // تحديد الأيقونة حسب النوع
    let icon = 'info-circle';
    let bgColor = '#3b82f6';
    
    if (type === 'success') {
        icon = 'check-circle';
        bgColor = '#10b981';
    } else if (type === 'error') {
        icon = 'exclamation-circle';
        bgColor = '#ef4444';
    } else if (type === 'warning') {
        icon = 'exclamation-triangle';
        bgColor = '#f59e0b';
    }
    
    notification.innerHTML = `
        <div class="notification-content" style="
            background: linear-gradient(135deg, ${bgColor}, ${bgColor}dd);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 10px;
        ">
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // إضافة إلى الجسم
    document.body.appendChild(notification);
    
    // إزالة بعد 3 ثوانٍ
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// تحميل سجل التغييرات
function loadChangeLog() {
    const changeLog = document.getElementById('changeLog');
    const changes = [
        { time: 'قبل 5 دقائق', action: 'تم تعديل قسم الخدمات' },
        { time: 'قبل ساعتين', action: 'تم تحديث SEO' },
        { time: 'أمس', action: 'تم تغيير الألوان' },
        { time: 'قبل 3 أيام', action: 'تم إضافة أعمال جديدة' }
    ];
    
    changeLog.innerHTML = changes.map(change => `
        <div class="change-item">
            <span class="change-time">${change.time}</span>
            <span class="change-action">${change.action}</span>
        </div>
    `).join('');
}

// دالة الحفظ الأساسية
function saveContentChanges() {
    // هنا سيتم حفظ البيانات لاحقاً
    showNotification('تم حفظ التغييرات بنجاح!', 'success');
    loadDashboardData();
}

// تفعيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تعيين كلمة المرور الافتراضية للحقل
    const passwordField = document.getElementById('adminPassword');
    if (passwordField) {
        passwordField.value = ADMIN_PASSWORD;
        // تفعيل إدخال بالإدخال
        passwordField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                login();
            }
        });
    }
    
    // تعيين تاريخ اليوم في بعض الحقول
    const today = new Date().toISOString().split('T')[0];
    const workDate = document.getElementById('workDate');
    if (workDate) workDate.value = today;
});

// جعل الدوال متاحة عالمياً
window.login = login;
window.toggleSidebar = toggleSidebar;
window.showSection = showSection;
window.logout = logout;
window.saveContentChanges = saveContentChanges;
window.loadDashboardData = loadDashboardData;
