// ========== نظام المصادقة المعدل ==========
class AuthSystem {
    static login(password) {
        // جلب كلمة المرور المحفوظة أو استخدام الافتراضية
        const savedPassword = StorageManager.load('admin_password') || ADMIN_CONFIG.defaultPassword;
        
        console.log('كلمة المرور المدخلة:', password);
        console.log('كلمة المرور المتوقعة:', savedPassword);
        
        if (password === savedPassword) {
            currentState.isLoggedIn = true;
            // إنشاء رمز جلسة فريد
            const sessionToken = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('admin_session', sessionToken);
            sessionStorage.setItem('session_start', Date.now().toString());
            sessionStorage.setItem('session_user', 'admin');
            
            console.log('تم تسجيل الدخول بنجاح!');
            return true;
        } else {
            console.log('كلمة المرور غير صحيحة');
            return false;
        }
    }
    
    static logout() {
        currentState.isLoggedIn = false;
        sessionStorage.removeItem('admin_session');
        sessionStorage.removeItem('session_start');
        sessionStorage.removeItem('session_user');
        window.location.reload();
    }
    
    static checkSession() {
        const sessionToken = sessionStorage.getItem('admin_session');
        const startTime = sessionStorage.getItem('session_start');
        
        console.log('التحقق من الجلسة:', { sessionToken, startTime });
        
        if (!sessionToken || !startTime) {
            console.log('لا توجد جلسة نشطة');
            return false;
        }
        
        const currentTime = Date.now();
        const sessionDuration = (currentTime - parseInt(startTime)) / 60000; // تحويل إلى دقائق
        
        console.log('مدة الجلسة (دقائق):', sessionDuration);
        
        // التحقق من انتهاء الجلسة
        if (sessionDuration > ADMIN_CONFIG.sessionTimeout) {
            console.log('انتهت مدة الجلسة');
            this.logout();
            return false;
        }
        
        // تجديد وقت الجلسة
        sessionStorage.setItem('session_start', Date.now().toString());
        currentState.isLoggedIn = true;
        
        console.log('الجلسة نشطة وصالحة');
        return true;
    }
    
    static changePassword(newPassword, confirmPassword) {
        if (newPassword !== confirmPassword) {
            throw new Error('كلمات المرور غير متطابقة');
        }
        
        if (newPassword.length < 6) {
            throw new Error('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        }
        
        // الحفاظ على التاريخ القديم إذا كان موجوداً
        const oldPassword = StorageManager.load('admin_password');
        const passwordHistory = StorageManager.load('password_history') || [];
        
        // إضافة كلمة المرور القديمة للتاريخ
        if (oldPassword) {
            passwordHistory.push({
                password: oldPassword,
                changedAt: new Date().toISOString()
            });
            
            // الاحتفاظ بآخر 5 كلمات مرور فقط
            if (passwordHistory.length > 5) {
                passwordHistory.shift();
            }
            
            StorageManager.save('password_history', passwordHistory);
        }
        
        // حفظ كلمة المرور الجديدة
        StorageManager.save('admin_password', newPassword);
        
        // تسجيل الخروج من جميع الجلسات
        sessionStorage.clear();
        
        NotificationSystem.show('تم تغيير كلمة المرور بنجاح. الرجاء تسجيل الدخول مرة أخرى.', 'success');
        
        // إعادة التوجيه بعد ثانيتين
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        
        return true;
    }
    
    static validatePasswordStrength(password) {
        const requirements = {
            minLength: password.length >= 6,
            hasNumber: /\d/.test(password),
            hasLetter: /[a-zA-Z]/.test(password),
            hasSpecial: /[!@#$%^&*]/.test(password)
        };
        
        const passed = Object.values(requirements).filter(Boolean).length;
        const total = Object.keys(requirements).length;
        
        return {
            strength: Math.round((passed / total) * 100),
            requirements: requirements
        };
    }
    
    static getPasswordHistory() {
        return StorageManager.load('password_history') || [];
    }
    
    static resetToDefault() {
        // حذف كلمة المرور المحفوظة للعودة للافتراضية
        StorageManager.remove('admin_password');
        sessionStorage.clear();
        
        NotificationSystem.show('تم إعادة تعيين كلمة المرور إلى الافتراضية', 'warning');
        
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}

// ========== دالة تسجيل الدخول المعدلة ==========
function login() {
    const passwordInput = document.getElementById('adminPassword');
    const password = passwordInput.value;
    
    if (!password) {
        NotificationSystem.show('يرجى إدخال كلمة المرور', 'warning');
        passwordInput.focus();
        return;
    }
    
    // إظهار حالة التحميل
    const loginBtn = document.querySelector('.btn-login');
    const originalText = loginBtn.innerHTML;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحقق...';
    loginBtn.disabled = true;
    
    // محاكاة تأخير للواقعية
    setTimeout(() => {
        if (AuthSystem.login(password)) {
            NotificationSystem.show('مرحباً في لوحة تحكم Web Forge!', 'success');
            
            // إخفاء شاشة الدخول وإظهار اللوحة
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('dashboard').style.display = 'flex';
            
            // تحميل جميع البيانات
            ContentLoader.loadAllContent();
            BackupSystem.updateBackupList();
            
            // تحديث الإحصائيات
            updateDashboardStats();
            
            // تسجيل وقت الدخول
            localStorage.setItem('last_login', new Date().toISOString());
            
        } else {
            NotificationSystem.show('كلمة المرور غير صحيحة', 'error');
            passwordInput.value = '';
            passwordInput.focus();
            
            // اهتزاز حقل الإدخال
            passwordInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                passwordInput.style.animation = '';
            }, 500);
        }
        
        // استعادة الزر
        loginBtn.innerHTML = originalText;
        loginBtn.disabled = false;
        
    }, 1000);
}

// ========== تحسين شاشة الدخول ==========
function setupLoginScreen() {
    const loginScreen = document.getElementById('loginScreen');
    if (!loginScreen) return;
    
    // إضافة تأثيرات للشاشة
    loginScreen.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    
    // إضافة تأثيرات لحقل الإدخال
    const passwordInput = document.getElementById('adminPassword');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                login();
            }
        });
        
        // إظهار/إخفاء كلمة المرور
        const showPasswordBtn = document.createElement('button');
        showPasswordBtn.type = 'button';
        showPasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
        showPasswordBtn.className = 'show-password-btn';
        showPasswordBtn.onclick = function() {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        };
        
        passwordInput.parentNode.appendChild(showPasswordBtn);
    }
    
    // إضافة رابط استعادة كلمة المرور
    const recoveryLink = document.createElement('a');
    recoveryLink.href = 'javascript:void(0)';
    recoveryLink.textContent = 'نسيت كلمة المرور؟';
    recoveryLink.className = 'recovery-link';
    recoveryLink.onclick = function() {
        if (confirm('هل تريد إعادة تعيين كلمة المرور إلى الافتراضية؟\n\nكلمة المرور الافتراضية: WebForge2026')) {
            AuthSystem.resetToDefault();
        }
    };
    
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.appendChild(recoveryLink);
    }
    
    // التحقق التلقائي من الجلسة
    checkAutoLogin();
}

// ========== التحقق التلقائي من الجلسة ==========
function checkAutoLogin() {
    if (AuthSystem.checkSession()) {
        console.log('جلسة سابقة موجودة، جاري الدخول تلقائياً...');
        
        // إخفاء شاشة الدخول
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
        
        // تحميل البيانات
        ContentLoader.loadAllContent();
        BackupSystem.updateBackupList();
        updateDashboardStats();
        
        NotificationSystem.show('مرحباً بعودتك!', 'info');
    }
}

// ========== تحديث إحصائيات اللوحة ==========
function updateDashboardStats() {
    // تحديث وقت آخر تسجيل دخول
    const lastLogin = localStorage.getItem('last_login');
    if (lastLogin) {
        const loginDate = new Date(lastLogin);
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        document.getElementById('lastLoginTime').textContent = 
            loginDate.toLocaleDateString('ar-MA', options);
    }
    
    // تحديث عدد الزيارات اليوم
    const today = new Date().toDateString();
    let dailyViews = localStorage.getItem('daily_views') || '{}';
    try {
        dailyViews = JSON.parse(dailyViews);
    } catch {
        dailyViews = {};
    }
    
    if (!dailyViews[today]) {
        dailyViews[today] = 0;
    }
    
    // زيادة العداد
    dailyViews[today]++;
    localStorage.setItem('daily_views', JSON.stringify(dailyViews));
    
    // عرض الإحصائيات
    document.getElementById('todayViews').textContent = dailyViews[today];
    
    // تحديث عدد الطلبات
    updateOrdersCount();
}

// ========== تحديث عداد الطلبات ==========
function updateOrdersCount() {
    const orders = StorageManager.load('orders_data') || [];
    const today = new Date().toDateString();
    
    const todayOrders = orders.filter(order => {
        const orderDate = new Date(order.timestamp).toDateString();
        return orderDate === today;
    });
    
    document.getElementById('newOrders').textContent = todayOrders.length;
}

// ========== تحسين تهيئة النظام ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 نظام لوحة التحكم يبدأ التهيئة...');
    
    // إعداد شاشة الدخول
    setupLoginScreen();
    
    // إضافة CSS للاهتزاز
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .show-password-btn {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            padding: 5px;
        }
        
        .recovery-link {
            display: block;
            margin-top: 15px;
            color: #667eea;
            text-decoration: none;
            font-size: 0.9rem;
            text-align: center;
        }
        
        .recovery-link:hover {
            text-decoration: underline;
        }
        
        .login-form {
            position: relative;
        }
        
        .login-form input {
            padding-right: 15px;
            padding-left: 40px;
        }
        
        .session-warning {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 10px;
            border-radius: 5px;
            margin-top: 15px;
            font-size: 0.9rem;
        }
    `;
    document.head.appendChild(style);
    
    // التحقق من وقت الجلسة كل دقيقة
    setInterval(() => {
        if (currentState.isLoggedIn) {
            const startTime = sessionStorage.getItem('session_start');
            if (startTime) {
                const currentTime = Date.now();
                const sessionDuration = (currentTime - parseInt(startTime)) / 60000;
                const remainingTime = ADMIN_CONFIG.sessionTimeout - sessionDuration;
                
                if (remainingTime <= 5 && remainingTime > 0) {
                    // تحذير قبل انتهاء الجلسة بـ 5 دقائق
                    if (!document.querySelector('.session-warning')) {
                        const warning = document.createElement('div');
                        warning.className = 'session-warning';
                        warning.innerHTML = `
                            <i class="fas fa-clock"></i>
                            جلستك ستنتهي خلال ${Math.ceil(remainingTime)} دقائق
                            <button onclick="extendSession()" style="margin-right: 10px;">
                                <i class="fas fa-sync"></i> تمديد
                            </button>
                        `;
                        
                        const header = document.querySelector('.admin-header');
                        if (header) {
                            header.appendChild(warning);
                            
                            // إزالة التحذير بعد 10 ثواني
                            setTimeout(() => {
                                if (warning.parentNode) {
                                    warning.remove();
                                }
                            }, 10000);
                        }
                    }
                }
            }
        }
    }, 60000); // كل دقيقة
    
    console.log('✅ نظام لوحة التحكم جاهز للاستخدام!');
});

// ========== تمديد الجلسة ==========
function extendSession() {
    sessionStorage.setItem('session_start', Date.now().toString());
    NotificationSystem.show('تم تمديد الجلسة', 'success');
    
    // إزالة التحذير
    const warning = document.querySelector('.session-warning');
    if (warning) {
        warning.remove();
    }
}

// ========== إضافة إلى ملف admin-styles.css ==========
// أضف هذه الأنماط لتحسين واجهة الدخول:
/*
.login-form {
    position: relative;
    margin-bottom: 20px;
}

.login-form input {
    width: 100%;
    padding: 12px 15px 12px 40px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s;
}

.login-form input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.login-info {
    background: #f8fafc;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    border-left: 4px solid #3b82f6;
}

.login-info p {
    margin: 5px 0;
    font-size: 0.9rem;
}

.login-info i {
    color: #3b82f6;
    margin-left: 5px;
}
*/
