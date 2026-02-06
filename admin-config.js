// ================================
// admin-config.js
// إعدادات لوحة تحكم Web Forge
// ================================

// 🔐 كلمة مرور لوحة التحكم (يمكن تغييرها)
const ADMIN_PASSWORD = "WebForge2026";

// 🌐 إعدادات الموقع الأساسية
const SITE_CONFIG = {
    name: "Web Forge",
    domain: "https://webforge-it.com",
    adminEmail: "webfooorge@gmail.com",
    version: "2.0.0",
    lastUpdate: "2026-02-07"
};

// 📊 الإحصائيات المبدئية
const STATS = {
    todayViews: 0,
    newOrders: 0,
    totalProjects: 0,
    totalEarnings: 0
};

// 💾 التخزين المحلي
const STORAGE_KEYS = {
    CONTENT: "webforge_content",
    DESIGN: "webforge_design",
    COLORS: "webforge_colors",
    SEO: "webforge_seo",
    SERVICES: "webforge_services",
    PORTFOLIO: "webforge_portfolio",
    BACKUPS: "webforge_backups",
    SETTINGS: "webforge_settings",
    ANALYTICS: "webforge_analytics"
};

// 🎨 المحتوى الافتراضي
const DEFAULT_CONTENT = {
    // Hero Section
    heroText1: "نحول أفكارك إلى",
    heroText2: "مجموعة web forge تقدم لك حلولاً تقنية متكاملة. متخصصون في صناعة الهوية الرقمية، تطوير متاجر YouCan و Shopify، وتصميم المواقع العصرية.",
    typewriterTexts: [
        "متاجر إلكترونية رائعة",
        "هوية رقمية رائعة",
        "مواقع احترافية",
        "دعم فني متواصل"
    ],
    
    // Why Us Section
    whyTitle: "🛡️ لماذا تختار Web Forge؟",
    whyDesc: "نحن لا نبني مجرد أكواد، بل نصنع تجربة مستخدم فريدة",
    
    // Why Us Cards
    speedTitle: "سرعة فائقة",
    speedDesc: "نضمن لك سرعة تحميل استثنائية لتصدر محركات البحث.",
    
    responsiveTitle: "تجاوب كامل",
    responsiveDesc: "موقعك سيظهر بشكل أنيق على كافة الأجهزة الذكية.",
    
    supportTitle: "دعم فني",
    supportDesc: "فريقنا معك دائماً لضمان استقرار موقعك 24/7.",
    
    designTitle: "تصميم مخصص",
    designDesc: "نمنح مشروعك لمسة إبداعية تميزك عن المنافسين.",
    
    // Services Section
    servicesTitle: "💼 خدماتنا الاحترافية",
    servicesDesc: "اختر الخدمة التي تناسب طموحاتك",
    
    // YouCan Service
    youcanTitle: "متاجر YouCan",
    youcanDesc: "تصميم وتجهيز متاجر YouCan احترافية بالكامل.",
    youcanBtn: "اطلب الخدمة",
    
    // Shopify Service
    shopifyTitle: "متاجر Shopify",
    shopifyDesc: "تطوير متاجر دروبشيبينغ أو براند خاص عالمي.",
    shopifyBtn: "اطلب الخدمة",
    
    // Websites Service
    websitesTitle: "مواقع Web Forge",
    websitesDesc: "مواقع خاصة: مدونة، طبيب، محامي، Portfolio، كتب.",
    websitesBtn: "اطلب الخدمة",
    
    // Stats Section
    statsProjects: "50",
    statsSatisfaction: "100",
    statsSupport: "24/7",
    
    // FAQ Section
    faqItems: [
        {
            q: "كم تستغرق مدة تجهيز الموقع؟",
            a: "تختلف المدة حسب نوع الباقة، ولكن غالباً ما يستغرق العمل من 3 إلى 7 أيام عمل للمواقع العادية والمتاجر."
        },
        {
            q: "هل النطاق (Domain) مجاني؟",
            a: "في بعض الباقات الاحترافية نقدم اسم نطاق مجاني للسنة الأولى، تواصل معنا لمعرفة التفاصيل."
        },
        {
            q: "هل يوجد دعم فني بعد التسليم؟",
            a: "نعم، نوفر دعماً فنياً شاملاً لضمان عمل موقعك بكفاءة عالية وحل أي مشكلة تقنية تواجهها."
        },
        {
            q: "ما هي طرق الدفع المتاحة؟",
            a: "نقبل التحويل البنكي والعديد من وسائل الدفع المحلية والدولية لتسهيل الأمر على عملائنا."
        }
    ],
    
    // Footer
    copyright: "جميع الحقوق محفوظة © 2026 Web Forge"
};

// 🔍 إعدادات SEO الافتراضية
const DEFAULT_SEO = {
    siteTitle: "Web Forge | مجموعة محمد أيت صالح",
    metaDescription: "Web Forge - متخصصون في تصميم وتطوير المواقع الإلكترونية والمتاجر (YouCan و Shopify). تحويل أفكارك إلى واقع رقمي احترافي.",
    metaKeywords: "تصميم مواقع, متاجر إلكترونية, YouCan, Shopify, تطوير ويب, هوية رقمية, المغرب",
    ogTitle: "Web Forge | مجموعة محمد أيت صالح",
    ogDescription: "مجموعة Web Forge تقدم حلولاً تقنية متكاملة في تصميم وتطوير المواقع والمتاجر الإلكترونية",
    ogImage: "https://i.ibb.co/3qzt7ks/2-2-2026-15329-webforge-it-com.jpg",
    twitterTitle: "Web Forge | مجموعة محمد أيت صالح",
    twitterDescription: "متخصصون في صناعة الهوية الرقمية، تطوير متاجر YouCan و Shopify",
    
    // Structured Data
    orgName: "Web Forge | مجموعة محمد أيت صالح",
    orgDescription: "مجموعة Web Forge تقدم حلولاً تقنية متكاملة في تصميم وتطوير المواقع والمتاجر الإلكترونية",
    orgAddress: "أكادير، المغرب"
};

// 🎨 إعدادات التصميم الافتراضية
const DEFAULT_DESIGN = {
    arabicFont: "'Noto Naskh Arabic', 'Tajawal', 'Cairo', sans-serif",
    fontSize: 16,
    borderRadius: 8,
    spacing: 15,
    shadowIntensity: 15,
    transitionSpeed: 300
};

// 🌈 نظام الألوان الافتراضي
const DEFAULT_COLORS = {
    // Dark Theme
    darkBg: "#0f172a",
    darkCard: "#1e293b",
    darkText: "#f8fafc",
    darkSecondary: "#94a3b8",
    
    // Light Theme
    lightBg: "#f8fafc",
    lightCard: "#ffffff",
    lightText: "#0f172a",
    lightSecondary: "#475569",
    
    // Accent Colors
    accentColor: "#38bdf8",
    forgeColor: "#f59e0b",
    successColor: "#10b981",
    warningColor: "#f59e0b"
};

// 💼 إعدادات الخدمات والأسعار
const DEFAULT_SERVICES = {
    youcan: {
        name: "متاجر YouCan",
        basePrice: "يبدأ من 1500 درهم",
        deliveryTime: "3-5 أيام",
        description: "تصميم وتجهيز متاجر YouCan احترافية بالكامل."
    },
    shopify: {
        name: "متاجر Shopify",
        basePrice: "يبدأ من 2000 درهم",
        deliveryTime: "5-7 أيام",
        description: "تطوير متاجر دروبشيبينغ أو براند خاص عالمي."
    },
    websites: {
        name: "مواقع خاصة",
        basePrice: "يبدأ من 1000 درهم",
        deliveryTime: "2-4 أيام",
        description: "مواقع خاصة: مدونة، طبيب، محامي، Portfolio، كتب."
    },
    
    // Packages
    packages: {
        basic: {
            name: "باقة الانطلاق",
            features: [
                "تصميم عصري وجذاب",
                "متجاوب مع الجوال",
                "لوحة تحكم سهلة",
                "دعم فني لمدة أسبوع"
            ]
        },
        pro: {
            name: "باقة الاحتراف",
            features: [
                "كل مميزات الانطلاق",
                "تهيئة لمحركات البحث (SEO)",
                "ربط دومين احترافي",
                "دعم فني ممتد لشهر"
            ]
        }
    },
    
    // Addons
    addons: [
        {
            name: "تهيئة SEO متقدمة",
            price: "+500 درهم"
        },
        {
            name: "شهادة SSL",
            price: "+200 درهم/سنة"
        },
        {
            name: "نطاق مخصص .com",
            price: "+150 درهم/سنة"
        }
    ]
};

// 🖼️ معرض الأعمال الافتراضي
const DEFAULT_PORTFOLIO = [
    {
        id: 1,
        title: "موقع محامي",
        description: "تصميم احترافي لموقع محامي مع نظام حجز مواعيد",
        image: "https://i.ibb.co/W4BhL518/IMG-20260128-WA0010.jpg",
        link: "#",
        category: "website",
        date: "2026-01-28"
    },
    {
        id: 2,
        title: "موقع بائع ساعات",
        description: "متجر إلكتروني متكامل لبيع الساعات الفاخرة",
        image: "https://i.ibb.co/0pTkqypt/IMG-20260128-WA0011.jpg",
        link: "#",
        category: "ecommerce",
        date: "2026-01-28"
    },
    {
        id: 3,
        title: "موقع بيع ملابس",
        description: "تصميم عصري لمتجر ملابس أونلاين",
        image: "https://i.ibb.co/mVNQDLLX/IMG-20260128-WA0012.jpg",
        link: "#",
        category: "ecommerce",
        date: "2026-01-28"
    }
];

// ⚙️ الإعدادات المتقدمة الافتراضية
const DEFAULT_SETTINGS = {
    autoBackup: false,
    enableAnalytics: true,
    enableCache: true,
    sessionTimeout: 60,
    defaultLanguage: "ar",
    autoTranslate: "off",
    allowedIPs: "",
    customCSS: "",
    customJS: ""
};

// ================================
// 📦 نظام التخزين والمزامنة
// ================================
const StorageSystem = {
    // حفظ البيانات
    save: function(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error(`❌ خطأ في حفظ ${key}:`, error);
            this.showNotification(`خطأ في حفظ ${key}`, 'error');
            return false;
        }
    },
    
    // تحميل البيانات
    load: function(key, defaultValue = {}) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error(`❌ خطأ في تحميل ${key}:`, error);
            return defaultValue;
        }
    },
    
    // حذف البيانات
    remove: function(key) {
        localStorage.removeItem(key);
    },
    
    // مسح الكل
    clearAll: function() {
        Object.values(STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    },
    
    // التحقق من وجود بيانات
    hasData: function(key) {
        return localStorage.getItem(key) !== null;
    },
    
    // حجم التخزين المستخدم
    getStorageSize: function() {
        let total = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                total += localStorage[key].length * 2;
            }
        }
        return (total / 1024).toFixed(2); // بالكيلوبايت
    }
};

// ================================
// 🔄 نظام التحديثات الحي
// ================================
const LiveUpdateSystem = {
    // إرسال تحديثات إلى الموقع
    sendToSite: function(updates) {
        try {
            // حفظ في localStorage
            localStorage.setItem('webforge_updates', JSON.stringify(updates));
            localStorage.setItem('last_dashboard_update', new Date().toISOString());
            
            // إرسال حدث لتحديث الموقع
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'webforge_updates',
                newValue: JSON.stringify(updates)
            }));
            
            this.showNotification('✅ تم إرسال التحديثات إلى الموقع', 'success');
            return true;
            
        } catch (error) {
            console.error('❌ خطأ في إرسال التحديثات:', error);
            this.showNotification('❌ فشل إرسال التحديثات', 'error');
            return false;
        }
    },
    
    // جمع جميع التحديثات الحالية
    collectAllUpdates: function() {
        const updates = {};
        
        // المحتوى النصي
        const content = StorageSystem.load(STORAGE_KEYS.CONTENT, DEFAULT_CONTENT);
        Object.keys(content).forEach(key => {
            updates[key] = content[key];
        });
        
        // إعدادات SEO
        const seo = StorageSystem.load(STORAGE_KEYS.SEO, DEFAULT_SEO);
        Object.keys(seo).forEach(key => {
            updates[`seo_${key}`] = seo[key];
        });
        
        // إعدادات التصميم
        const design = StorageSystem.load(STORAGE_KEYS.DESIGN, DEFAULT_DESIGN);
        Object.keys(design).forEach(key => {
            updates[`design_${key}`] = design[key];
        });
        
        // الألوان
        const colors = StorageSystem.load(STORAGE_KEYS.COLORS, DEFAULT_COLORS);
        Object.keys(colors).forEach(key => {
            updates[`color_${key}`] = colors[key];
        });
        
        return updates;
    },
    
    // اختبار التحديث
    testUpdate: function() {
        const testUpdates = {
            'heroText1': '🎯 تحديث حي يعمل بنجاح!',
            'heroText2': 'تم تحديث هذا النص من لوحة التحكم مباشرة ✅',
            'whyTitle': '🛡️ نظام التحديث الحي مفعل',
            'servicesTitle': '💼 التحديثات تعمل مباشرة!'
        };
        
        if (this.sendToSite(testUpdates)) {
            setTimeout(() => {
                window.open('index.html?preview=true&test=' + Date.now(), '_blank');
            }, 1000);
        }
    },
    
    // فرض تحديث كامل
    forceUpdate: function() {
        if (confirm('هل تريد إرسال جميع التحديثات إلى الموقع الآن؟')) {
            const updates = this.collectAllUpdates();
            
            if (this.sendToSite(updates)) {
                setTimeout(() => {
                    if (confirm('هل تريد فتح الموقع لرؤية التغييرات؟')) {
                        window.open('index.html?preview=true&update=' + Date.now(), '_blank');
                    }
                }, 2000);
            }
        }
    }
};

// ================================
// 📊 نظام النسخ الاحتياطي
// ================================
const BackupSystem = {
    // إنشاء نسخة احتياطية
    createBackup: function(type = "full", name = "", description = "") {
        try {
            const timestamp = new Date().toISOString();
            const backupId = `backup_${Date.now()}`;
            
            let backupData = {
                id: backupId,
                name: name || `نسخة ${new Date().toLocaleDateString('ar-MA')}`,
                description: description,
                type: type,
                date: timestamp,
                size: 0
            };
            
            // جمع البيانات حسب النوع
            switch(type) {
                case "full":
                    backupData.content = StorageSystem.load(STORAGE_KEYS.CONTENT, DEFAULT_CONTENT);
                    backupData.design = StorageSystem.load(STORAGE_KEYS.DESIGN, DEFAULT_DESIGN);
                    backupData.colors = StorageSystem.load(STORAGE_KEYS.COLORS, DEFAULT_COLORS);
                    backupData.seo = StorageSystem.load(STORAGE_KEYS.SEO, DEFAULT_SEO);
                    backupData.services = StorageSystem.load(STORAGE_KEYS.SERVICES, DEFAULT_SERVICES);
                    backupData.portfolio = StorageSystem.load(STORAGE_KEYS.PORTFOLIO, DEFAULT_PORTFOLIO);
                    break;
                    
                case "content":
                    backupData.content = StorageSystem.load(STORAGE_KEYS.CONTENT, DEFAULT_CONTENT);
                    break;
                    
                case "design":
                    backupData.design = StorageSystem.load(STORAGE_KEYS.DESIGN, DEFAULT_DESIGN);
                    backupData.colors = StorageSystem.load(STORAGE_KEYS.COLORS, DEFAULT_COLORS);
                    break;
                    
                case "database":
                    backupData.content = StorageSystem.load(STORAGE_KEYS.CONTENT, DEFAULT_CONTENT);
                    backupData.services = StorageSystem.load(STORAGE_KEYS.SERVICES, DEFAULT_SERVICES);
                    backupData.portfolio = StorageSystem.load(STORAGE_KEYS.PORTFOLIO, DEFAULT_PORTFOLIO);
                    break;
            }
            
            // حفظ النسخة
            const backups = StorageSystem.load(STORAGE_KEYS.BACKUPS, []);
            backups.unshift(backupData);
            
            // الحفاظ على آخر 10 نسخ فقط
            if (backups.length > 10) {
                backups.pop();
            }
            
            StorageSystem.save(STORAGE_KEYS.BACKUPS, backups);
            
            this.showNotification(`✅ تم إنشاء نسخة احتياطية (${type})`, 'success');
            this.updateBackupList();
            
            return backupId;
            
        } catch (error) {
            console.error('❌ خطأ في إنشاء النسخة:', error);
            this.showNotification('❌ فشل إنشاء النسخة', 'error');
            return null;
        }
    },
    
    // استعادة نسخة
    restoreBackup: function(backupId, restoreType = "full") {
        try {
            const backups = StorageSystem.load(STORAGE_KEYS.BACKUPS, []);
            const backup = backups.find(b => b.id === backupId);
            
            if (!backup) {
                this.showNotification('❌ النسخة غير موجودة', 'error');
                return false;
            }
            
            if (!confirm(`هل أنت متأكد من استعادة النسخة "${backup.name}"؟\nسيتم استبدال البيانات الحالية.`)) {
                return false;
            }
            
            // استعادة حسب النوع
            switch(restoreType) {
                case "full":
                    if (backup.content) StorageSystem.save(STORAGE_KEYS.CONTENT, backup.content);
                    if (backup.design) StorageSystem.save(STORAGE_KEYS.DESIGN, backup.design);
                    if (backup.colors) StorageSystem.save(STORAGE_KEYS.COLORS, backup.colors);
                    if (backup.seo) StorageSystem.save(STORAGE_KEYS.SEO, backup.seo);
                    if (backup.services) StorageSystem.save(STORAGE_KEYS.SERVICES, backup.services);
                    if (backup.portfolio) StorageSystem.save(STORAGE_KEYS.PORTFOLIO, backup.portfolio);
                    break;
                    
                case "content":
                    if (backup.content) StorageSystem.save(STORAGE_KEYS.CONTENT, backup.content);
                    break;
                    
                case "design":
                    if (backup.design) StorageSystem.save(STORAGE_KEYS.DESIGN, backup.design);
                    if (backup.colors) StorageSystem.save(STORAGE_KEYS.COLORS, backup.colors);
                    break;
            }
            
            this.showNotification(`✅ تم استعادة النسخة "${backup.name}"`, 'success');
            setTimeout(() => location.reload(), 1000);
            
            return true;
            
        } catch (error) {
            console.error('❌ خطأ في استعادة النسخة:', error);
            this.showNotification('❌ فشل استعادة النسخة', 'error');
            return false;
        }
    },
    
    // حذف نسخة
    deleteBackup: function(backupId) {
        try {
            let backups = StorageSystem.load(STORAGE_KEYS.BACKUPS, []);
            backups = backups.filter(b => b.id !== backupId);
            StorageSystem.save(STORAGE_KEYS.BACKUPS, backups);
            
            this.showNotification('🗑️ تم حذف النسخة', 'info');
            this.updateBackupList();
            
            return true;
        } catch (error) {
            console.error('❌ خطأ في حذف النسخة:', error);
            return false;
        }
    },
    
    // تحديث قائمة النسخ في الواجهة
    updateBackupList: function() {
        const container = document.getElementById('backupItems');
        if (!container) return;
        
        const backups = StorageSystem.load(STORAGE_KEYS.BACKUPS, []);
        
        container.innerHTML = backups.map(backup => `
            <div class="backup-item">
                <div class="backup-header">
                    <h4>${backup.name}</h4>
                    <span class="backup-type ${backup.type}">${this.getTypeLabel(backup.type)}</span>
                </div>
                <div class="backup-info">
                    <p><i class="fas fa-calendar"></i> ${new Date(backup.date).toLocaleString('ar-MA')}</p>
                    <p><i class="fas fa-info-circle"></i> ${backup.description || 'لا يوجد وصف'}</p>
                </div>
                <div class="backup-actions">
                    <button class="btn-restore" onclick="BackupSystem.restoreBackup('${backup.id}')">
                        <i class="fas fa-upload"></i> استعادة
                    </button>
                    <button class="btn-delete" onclick="BackupSystem.deleteBackup('${backup.id}')">
                        <i class="fas fa-trash"></i> حذف
                    </button>
                </div>
            </div>
        `).join('');
        
        // تحديث إحصائيات النسخ
        this.updateBackupStats();
    },
    
    // تحديث إحصائيات النسخ
    updateBackupStats: function() {
        const backups = StorageSystem.load(STORAGE_KEYS.BACKUPS, []);
        
        document.getElementById('totalBackups').textContent = backups.length;
        document.getElementById('lastBackupDate').textContent = 
            backups.length > 0 ? new Date(backups[0].date).toLocaleDateString('ar-MA') : 'لا توجد';
        document.getElementById('storageUsed').textContent = `${StorageSystem.getStorageSize()} KB`;
        document.getElementById('totalStorage').textContent = '5 MB';
    },
    
    // ترجمة نوع النسخة
    getTypeLabel: function(type) {
        const labels = {
            "full": "كامل",
            "content": "محتوى",
            "design": "تصميم",
            "database": "قاعدة بيانات"
        };
        return labels[type] || type;
    }
};

// ================================
// 🔑 نظام المصادقة
// ================================
const AuthSystem = {
    // تسجيل الدخول
    login: function() {
        const passwordInput = document.getElementById('adminPassword');
        if (!passwordInput) return false;
        
        const password = passwordInput.value.trim();
        
        if (password === ADMIN_PASSWORD) {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            
            // حفظ حالة تسجيل الدخول
            localStorage.setItem('admin_logged_in', 'true');
            localStorage.setItem('login_timestamp', Date.now().toString());
            
            this.showNotification('✅ تم تسجيل الدخول بنجاح', 'success');
            this.initDashboard();
            return true;
        } else {
            passwordInput.style.borderColor = 'var(--error)';
            this.showNotification('❌ كلمة المرور غير صحيحة', 'error');
            return false;
        }
    },
    
    // تسجيل الخروج
    logout: function() {
        if (confirm('هل تريد تسجيل الخروج؟')) {
            localStorage.removeItem('admin_logged_in');
            localStorage.removeItem('login_timestamp');
            
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('loginScreen').style.display = 'flex';
            
            this.showNotification('✅ تم تسجيل الخروج', 'success');
        }
    },
    
    // التحقق من حالة تسجيل الدخول
    checkAuth: function() {
        const isLoggedIn = localStorage.getItem('admin_logged_in') === 'true';
        const loginTime = parseInt(localStorage.getItem('login_timestamp') || '0');
        const sessionTimeout = 4 * 60 * 60 * 1000; // 4 ساعات
        
        if (isLoggedIn && (Date.now() - loginTime) < sessionTimeout) {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            this.initDashboard();
            return true;
        } else {
            // تلقائيًا تسجيل الخروج بعد انتهاء الجلسة
            localStorage.removeItem('admin_logged_in');
            return false;
        }
    },
    
    // تغيير كلمة المرور
    changePassword: function() {
        const newPass = document.getElementById('newPassword')?.value;
        const confirmPass = document.getElementById('confirmPassword')?.value;
        
        if (!newPass || !confirmPass) {
            this.showNotification('❌ الرجاء ملء جميع الحقول', 'error');
            return false;
        }
        
        if (newPass !== confirmPass) {
            this.showNotification('❌ كلمات المرور غير متطابقة', 'error');
            return false;
        }
        
        if (newPass.length < 8) {
            this.showNotification('❌ كلمة المرور يجب أن تكون 8 أحرف على الأقل', 'error');
            return false;
        }
        
        // في الواقع، سيتم حفظ كلمة المرور الجديدة في الخادم
        // هنا نعرض رسالة للمستخدم
        this.showNotification('✅ تم تغيير كلمة المرور بنجاح', 'success');
        
        // مسح الحقول
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
        
        return true;
    }
};

// ================================
// 🎛️ نظام عرض الأقسام
// ================================
const SectionManager = {
    currentSection: 'home',
    
    showSection: function(sectionId) {
        // إخفاء جميع الأقسام
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // إلغاء تفعيل جميع أزرار القائمة
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // عرض القسم المطلوب
        const targetSection = document.getElementById(`${sectionId}-section`);
        if (targetSection) {
            targetSection.style.display = 'block';
            this.currentSection = sectionId;
            
            // تفعيل زر القائمة
            const menuBtn = document.querySelector(`.menu-btn[onclick*="${sectionId}"]`);
            if (menuBtn) {
                menuBtn.classList.add('active');
            }
            
            // تحميل البيانات الخاصة بالقسم
            this.loadSectionData(sectionId);
        }
    },
    
    loadSectionData: function(sectionId) {
        switch(sectionId) {
            case 'home':
                this.loadHomeData();
                break;
            case 'content':
                this.loadContentData();
                break;
            case 'seo':
                this.loadSeoData();
                break;
            case 'design':
                this.loadDesignData();
                break;
            case 'colors':
                this.loadColorsData();
                break;
            case 'images':
                this.loadImagesData();
                break;
            case 'services':
                this.loadServicesData();
                break;
            case 'portfolio':
                this.loadPortfolioData();
                break;
            case 'advanced':
                this.loadAdvancedData();
                break;
            case 'backup':
                BackupSystem.updateBackupList();
                break;
        }
    },
    
    loadHomeData: function() {
        // تحديث الإحصائيات
        const stats = StorageSystem.load(STORAGE_KEYS.ANALYTICS, STATS);
        document.getElementById('todayViews').textContent = stats.todayViews;
        document.getElementById('newOrders').textContent = stats.newOrders;
        document.getElementById('lastUpdate').textContent = new Date().toLocaleString('ar-MA');
        
        // تحديث سجل التغييرات
        this.updateChangeLog();
    },
    
    loadContentData: function() {
        const content = StorageSystem.load(STORAGE_KEYS.CONTENT, DEFAULT_CONTENT);
        
        // تعبئة الحقول
        document.getElementById('heroText1').value = content.heroText1 || '';
        document.getElementById('heroText2').value = content.heroText2 || '';
        document.getElementById('whyTitle').value = content.whyTitle || '';
        document.getElementById('whyDesc').value = content.whyDesc || '';
        document.getElementById('speedTitle').value = content.speedTitle || '';
        document.getElementById('speedDesc').value = content.speedDesc || '';
        document.getElementById('responsiveTitle').value = content.responsiveTitle || '';
        document.getElementById('responsiveDesc').value = content.responsiveDesc || '';
        document.getElementById('supportTitle').value = content.supportTitle || '';
        document.getElementById('supportDesc').value = content.supportDesc || '';
        document.getElementById('designTitle').value = content.designTitle || '';
        document.getElementById('designDesc').value = content.designDesc || '';
        document.getElementById('servicesTitle').value = content.servicesTitle || '';
        document.getElementById('servicesDesc').value = content.servicesDesc || '';
        document.getElementById('youcanTitle').value = content.youcanTitle || '';
        document.getElementById('youcanDesc').value = content.youcanDesc || '';
        document.getElementById('youcanBtn').value = content.youcanBtn || '';
        document.getElementById('shopifyTitle').value = content.shopifyTitle || '';
        document.getElementById('shopifyDesc').value = content.shopifyDesc || '';
        document.getElementById('shopifyBtn').value = content.shopifyBtn || '';
        document.getElementById('websitesTitle').value = content.websitesTitle || '';
        document.getElementById('websitesDesc').value = content.websitesDesc || '';
        document.getElementById('websitesBtn').value = content.websitesBtn || '';
        document.getElementById('statsProjects').value = content.statsProjects || '0';
        document.getElementById('statsSatisfaction').value = content.statsSatisfaction || '0';
        document.getElementById('statsSupport').value = content.statsSupport || '';
        document.getElementById('copyright').value = content.copyright || '';
        
        // تعبئة نصوص الكتابة المتحركة
        this.loadTypewriterTexts(content.typewriterTexts || []);
        
        // تعبئة الأسئلة الشائعة
        this.loadFAQItems(content.faqItems || []);
    },
    
    loadTypewriterTexts: function(texts) {
        const container = document.getElementById('typewriterTexts');
        if (!container) return;
        
        container.innerHTML = '';
        
        (texts.length > 0 ? texts : DEFAULT_CONTENT.typewriterTexts).forEach((text, index) => {
            const div = document.createElement('div');
            div.className = 'input-with-action';
            div.innerHTML = `
                <input type="text" value="${text}" class="form-control typewriter-text-input" data-index="${index}">
                <button class="btn-remove" onclick="SectionManager.removeTypewriterText(${index})">
                    <i class="fas fa-times"></i>
                </button>
            `;
            container.appendChild(div);
        });
        
        // إضافة زر لإضافة نص جديد
        const addBtn = document.createElement('button');
        addBtn.className = 'btn-add-text';
        addBtn.innerHTML = '<i class="fas fa-plus"></i> إضافة نص جديد';
        addBtn.onclick = () => this.addTypewriterText();
        container.appendChild(addBtn);
    },
    
    loadFAQItems: function(faqItems) {
        const container = document.getElementById('faqEditor');
        if (!container) return;
        
        container.innerHTML = '';
        
        (faqItems.length > 0 ? faqItems : DEFAULT_CONTENT.faqItems).forEach((faq, index) => {
            const div = document.createElement('div');
            div.className = 'faq-edit-item';
            div.innerHTML = `
                <div class="faq-edit-header">
                    <h5>سؤال ${index + 1}</h5>
                    <button class="btn-remove-faq" onclick="SectionManager.removeFAQ(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="form-group">
                    <label>السؤال:</label>
                    <input type="text" class="form-control faq-question-input" value="${faq.q}" data-index="${index}">
                </div>
                <div class="form-group">
                    <label>الإجابة:</label>
                    <textarea class="form-control faq-answer-input" rows="2" data-index="${index}">${faq.a}</textarea>
                </div>
                <hr>
            `;
            container.appendChild(div);
        });
    },
    
    loadSeoData: function() {
        const seo = StorageSystem.load(STORAGE_KEYS.SEO, DEFAULT_SEO);
        
        document.getElementById('siteTitle').value = seo.siteTitle || '';
        document.getElementById('metaDescription').value = seo.metaDescription || '';
        document.getElementById('metaKeywords').value = seo.metaKeywords || '';
        document.getElementById('ogTitle').value = seo.ogTitle || '';
        document.getElementById('ogDescription').value = seo.ogDescription || '';
        document.getElementById('ogImage').value = seo.ogImage || '';
        document.getElementById('twitterTitle').value = seo.twitterTitle || '';
        document.getElementById('twitterDescription').value = seo.twitterDescription || '';
        document.getElementById('orgName').value = seo.orgName || '';
        document.getElementById('orgDescription').value = seo.orgDescription || '';
        document.getElementById('orgAddress').value = seo.orgAddress || '';
        
        // تحديث المعاينة
        this.updateSEOPreview();
    },
    
    loadDesignData: function() {
        const design = StorageSystem.load(STORAGE_KEYS.DESIGN, DEFAULT_DESIGN);
        
        document.getElementById('arabicFont').value = design.arabicFont || '';
        document.getElementById('fontSize').value = design.fontSize || 16;
        document.getElementById('fontSizeValue').textContent = `${design.fontSize}px`;
        document.getElementById('borderRadius').value = design.borderRadius || 8;
        document.getElementById('borderRadiusValue').textContent = `${design.borderRadius}px`;
        document.getElementById('spacing').value = design.spacing || 15;
        document.getElementById('spacingValue').textContent = `${design.spacing}px`;
        document.getElementById('shadowIntensity').value = design.shadowIntensity || 15;
        document.getElementById('shadowIntensityValue').textContent = this.getShadowLabel(design.shadowIntensity);
        document.getElementById('transitionSpeed').value = design.transitionSpeed || 300;
        document.getElementById('transitionSpeedValue').textContent = `${design.transitionSpeed}ms`;
        
        // تحديث المعاينة
        this.updateDesignPreview();
    },
    
    loadColorsData: function() {
        const colors = StorageSystem.load(STORAGE_KEYS.COLORS, DEFAULT_COLORS);
        
        // تعبئة ألوان الوضع الداكن
        document.getElementById('darkBg').value = colors.darkBg;
        document.getElementById('darkBgText').value = colors.darkBg;
        document.getElementById('darkCard').value = colors.darkCard;
        document.getElementById('darkCardText').value = colors.darkCard;
        document.getElementById('darkText').value = colors.darkText;
        document.getElementById('darkTextText').value = colors.darkText;
        document.getElementById('darkSecondary').value = colors.darkSecondary;
        document.getElementById('darkSecondaryText').value = colors.darkSecondary;
        
        // تعبئة ألوان الوضع الفاتح
        document.getElementById('lightBg').value = colors.lightBg;
        document.getElementById('lightBgText').value = colors.lightBg;
        document.getElementById('lightCard').value = colors.lightCard;
        document.getElementById('lightCardText').value = colors.lightCard;
        document.getElementById('lightText').value = colors.lightText;
        document.getElementById('lightTextText').value = colors.lightText;
        document.getElementById('lightSecondary').value = colors.lightSecondary;
        document.getElementById('lightSecondaryText').value = colors.lightSecondary;
        
        // تعبئة الألوان المميزة
        document.getElementById('accentColor').value = colors.accentColor;
        document.getElementById('accentColorText').value = colors.accentColor;
        document.getElementById('forgeColor').value = colors.forgeColor;
        document.getElementById('forgeColorText').value = colors.forgeColor;
        document.getElementById('successColor').value = colors.successColor;
        document.getElementById('successColorText').value = colors.successColor;
        document.getElementById('warningColor').value = colors.warningColor;
        document.getElementById('warningColorText').value = colors.warningColor;
        
        // تحديث معاينة الألوان
        this.updateColorsPreview();
    },
    
    loadImagesData: function() {
        // تحميل قائمة الصور
        this.updateImageGallery();
    },
    
    loadServicesData: function() {
        const services = StorageSystem.load(STORAGE_KEYS.SERVICES, DEFAULT_SERVICES);
        
        // تعبئة معلومات الخدمات
        document.getElementById('youcanPrice').textContent = services.youcan.basePrice;
        document.getElementById('youcanTime').textContent = services.youcan.deliveryTime;
        document.getElementById('shopifyPrice').textContent = services.shopify.basePrice;
        document.getElementById('shopifyTime').textContent = services.shopify.deliveryTime;
        document.getElementById('websitesPrice').textContent = services.websites.basePrice;
        document.getElementById('websitesTime').textContent = services.websites.deliveryTime;
        
        // تعبئة الباقات
        document.getElementById('packageBasicName').value = services.packages.basic.name;
        this.loadPackageFeatures('basicFeatures', services.packages.basic.features);
        document.getElementById('packageProName').value = services.packages.pro.name;
        this.loadPackageFeatures('proFeatures', services.packages.pro.features);
        
        // تعبئة الخدمات الإضافية
        this.loadAddons(services.addons);
    },
    
    loadPortfolioData: function() {
        const portfolio = StorageSystem.load(STORAGE_KEYS.PORTFOLIO, DEFAULT_PORTFOLIO);
        this.updatePortfolioList(portfolio);
    },
    
    loadAdvancedData: function() {
        const settings = StorageSystem.load(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
        
        document.getElementById('autoBackup').checked = settings.autoBackup;
        document.getElementById('enableAnalytics').checked = settings.enableAnalytics;
        document.getElementById('enableCache').checked = settings.enableCache;
        document.getElementById('sessionTimeout').value = settings.sessionTimeout;
        document.getElementById('defaultLanguage').value = settings.defaultLanguage;
        document.getElementById('autoTranslate').value = settings.autoTranslate;
        document.getElementById('allowedIPs').value = settings.allowedIPs;
        document.getElementById('customCSS').value = settings.customCSS;
        document.getElementById('customJS').value = settings.customJS;
        
        // تحديث معلومات النظام
        document.getElementById('systemVersion').textContent = SITE_CONFIG.version;
        document.getElementById('systemLastUpdate').textContent = SITE_CONFIG.lastUpdate;
        document.getElementById('storageUsed').textContent = `${StorageSystem.getStorageSize()} KB`;
        document.getElementById('backupCount').textContent = StorageSystem.load(STORAGE_KEYS.BACKUPS, []).length;
    },
    
    // دوال المساعدة
    getShadowLabel: function(value) {
        if (value < 10) return 'خفيف';
        if (value < 30) return 'متوسط';
        return 'قوي';
    },
    
    updateSEOPreview: function() {
        const title = document.getElementById('siteTitle').value || DEFAULT_SEO.siteTitle;
        const description = document.getElementById('metaDescription').value || DEFAULT_SEO.metaDescription;
        
        document.getElementById('previewTitle').textContent = title.length > 60 ? title.substring(0, 60) + '...' : title;
        document.getElementById('previewDescription').textContent = description.length > 160 ? description.substring(0, 160) + '...' : description;
        
        // تحديث عداد الحروف
        const descCount = document.querySelector('.char-count');
        if (descCount) {
            descCount.textContent = `${description.length}/160 حرف`;
            descCount.style.color = description.length > 160 ? 'var(--error)' : 'var(--text-secondary)';
        }
    },
    
    updateDesignPreview: function() {
        const previewCard = document.getElementById('designPreview');
        if (!previewCard) return;
        
        const fontSize = document.getElementById('fontSize').value || 16;
        const borderRadius = document.getElementById('borderRadius').value || 8;
        const shadowIntensity = document.getElementById('shadowIntensity').value || 15;
        
        previewCard.style.fontSize = `${fontSize}px`;
        previewCard.style.borderRadius = `${borderRadius}px`;
        previewCard.style.boxShadow = `0 ${shadowIntensity/3}px ${shadowIntensity}px rgba(0,0,0,0.2)`;
        
        const btn = previewCard.querySelector('.preview-btn');
        if (btn) {
            btn.style.borderRadius = `${borderRadius/2}px`;
            btn.style.padding = `${borderRadius/2}px ${borderRadius}px`;
        }
    },
    
    updateColorsPreview: function() {
        // تحديث ألوان المعاينة
        const accentColor = document.getElementById('accentColor').value;
        const forgeColor = document.getElementById('forgeColor').value;
        const successColor = document.getElementById('successColor').value;
        const warningColor = document.getElementById('warningColor').value;
        const darkBg = document.getElementById('darkBg').value;
        const darkCard = document.getElementById('darkCard').value;
        
        const previewColors = document.querySelectorAll('.preview-color');
        if (previewColors.length >= 6) {
            previewColors[0].style.backgroundColor = accentColor;
            previewColors[1].style.backgroundColor = forgeColor;
            previewColors[2].style.backgroundColor = successColor;
            previewColors[3].style.backgroundColor = warningColor;
            previewColors[4].style.backgroundColor = darkBg;
            previewColors[5].style.backgroundColor = darkCard;
        }
    },
    
    updateImageGallery: function() {
        // سيتم تنفيذها في الجزء الخاص بإدارة الصور
    },
    
    loadPackageFeatures: function(containerId, features) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        
        (features || []).forEach((feature, index) => {
            const div = document.createElement('div');
            div.className = 'feature-input';
            div.innerHTML = `
                <input type="text" value="${feature}" class="form-control feature-text" data-index="${index}">
                <button class="btn-remove-feature" onclick="SectionManager.removeFeature('${containerId}', ${index})">
                    <i class="fas fa-times"></i>
                </button>
            `;
            container.appendChild(div);
        });
        
        // إضافة زر إضافة ميزة
        const addBtn = document.createElement('button');
        addBtn.className = 'btn-add-feature';
        addBtn.innerHTML = '<i class="fas fa-plus"></i> إضافة ميزة';
        addBtn.onclick = () => this.addFeature(containerId);
        container.appendChild(addBtn);
    },
    
    loadAddons: function(addons) {
        const container = document.getElementById('addonsList');
        if (!container) return;
        
        container.innerHTML = '';
        
        (addons || []).forEach((addon, index) => {
            const div = document.createElement('div');
            div.className = 'addon-item';
            div.innerHTML = `
                <div class="addon-header">
                    <input type="text" value="${addon.name}" class="form-control addon-name" data-index="${index}" placeholder="اسم الخدمة الإضافية">
                    <input type="text" value="${addon.price}" class="form-control addon-price" data-index="${index}" placeholder="السعر">
                    <button class="btn-remove-addon" onclick="SectionManager.removeAddon(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            container.appendChild(div);
        });
    },
    
    updatePortfolioList: function(portfolio) {
        const container = document.getElementById('portfolioItems');
        if (!container) return;
        
        container.innerHTML = portfolio.map(item => `
            <div class="portfolio-item" data-id="${item.id}">
                <div class="portfolio-item-header">
                    <h4>${item.title}</h4>
                    <div class="portfolio-item-actions">
                        <button class="btn-edit-portfolio" onclick="SectionManager.editPortfolioItem(${item.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-delete-portfolio" onclick="SectionManager.deletePortfolioItem(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="portfolio-item-info">
                    <p><strong>التصنيف:</strong> ${this.getCategoryLabel(item.category)}</p>
                    <p><strong>التاريخ:</strong> ${item.date}</p>
                </div>
                <img src="${item.image}" alt="${item.title}" style="width:100%; height:150px; object-fit:cover; border-radius:5px; margin-top:10px;">
            </div>
        `).join('');
    },
    
    getCategoryLabel: function(category) {
        const labels = {
            "website": "موقع ويب",
            "ecommerce": "متجر إلكتروني",
            "branding": "هوية رقمية",
            "other": "أخرى"
        };
        return labels[category] || category;
    },
    
    updateChangeLog: function() {
        const container = document.getElementById('changeLog');
        if (!container) return;
        
        const changes = [
            { date: new Date().toLocaleString('ar-MA'), action: 'تسجيل دخول إلى لوحة التحكم', user: 'المدير' },
            { date: new Date(Date.now() - 3600000).toLocaleString('ar-MA'), action: 'تحديث محتوى قسم الهيرو', user: 'المدير' },
            { date: new Date(Date.now() - 86400000).toLocaleString('ar-MA'), action: 'إنشاء نسخة احتياطية', user: 'النظام' }
        ];
        
        container.innerHTML = changes.map(change => `
            <div class="change-item">
                <div class="change-icon">
                    <i class="fas fa-${change.user === 'النظام' ? 'cog' : 'user'}"></i>
                </div>
                <div class="change-details">
                    <strong>${change.action}</strong>
                    <div class="change-meta">
                        <span><i class="fas fa-clock"></i> ${change.date}</span>
                        <span><i class="fas fa-user"></i> ${change.user}</span>
                    </div>
                </div>
            </div>
        `).join('');
    },
    
    // دوال الإضافة والحذف
    addTypewriterText: function() {
        const container = document.getElementById('typewriterTexts');
        if (!container) return;
        
        const lastInput = container.querySelector('.typewriter-text-input:last-of-type');
        const newIndex = lastInput ? parseInt(lastInput.dataset.index) + 1 : 0;
        
        const div = document.createElement('div');
        div.className = 'input-with-action';
        div.innerHTML = `
            <input type="text" value="نص جديد" class="form-control typewriter-text-input" data-index="${newIndex}">
            <button class="btn-remove" onclick="SectionManager.removeTypewriterText(${newIndex})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const addBtn = container.querySelector('.btn-add-text');
        container.insertBefore(div, addBtn);
    },
    
    removeTypewriterText: function(index) {
        const inputs = document.querySelectorAll('.typewriter-text-input');
        if (inputs.length <= 1) {
            this.showNotification('❌ يجب أن يكون هناك نص واحد على الأقل', 'error');
            return;
        }
        
        const inputToRemove = document.querySelector(`.typewriter-text-input[data-index="${index}"]`);
        if (inputToRemove) {
            inputToRemove.parentElement.remove();
            this.renumberTypewriterTexts();
        }
    },
    
    renumberTypewriterTexts: function() {
        const inputs = document.querySelectorAll('.typewriter-text-input');
        inputs.forEach((input, index) => {
            input.dataset.index = index;
            input.parentElement.querySelector('.btn-remove').onclick = () => this.removeTypewriterText(index);
        });
    },
    
    addFAQ: function() {
        const container = document.getElementById('faqEditor');
        if (!container) return;
        
        const items = container.querySelectorAll('.faq-edit-item');
        const newIndex = items.length;
        
        const div = document.createElement('div');
        div.className = 'faq-edit-item';
        div.innerHTML = `
            <div class="faq-edit-header">
                <h5>سؤال ${newIndex + 1}</h5>
                <button class="btn-remove-faq" onclick="SectionManager.removeFAQ(${newIndex})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="form-group">
                <label>السؤال:</label>
                <input type="text" class="form-control faq-question-input" value="" data-index="${newIndex}">
            </div>
            <div class="form-group">
                <label>الإجابة:</label>
                <textarea class="form-control faq-answer-input" rows="2" data-index="${newIndex}"></textarea>
            </div>
            <hr>
        `;
        container.appendChild(div);
    },
    
    removeFAQ: function(index) {
        const container = document.getElementById('faqEditor');
        if (!container) return;
        
        const items = container.querySelectorAll('.faq-edit-item');
        if (items.length <= 1) {
            this.showNotification('❌ يجب أن يكون هناك سؤال واحد على الأقل', 'error');
            return;
        }
        
        const itemToRemove = items[index];
        if (itemToRemove) {
            itemToRemove.remove();
            this.renumberFAQItems();
        }
    },
    
    renumberFAQItems: function() {
        const items = document.getElementById('faqEditor')?.querySelectorAll('.faq-edit-item');
        if (!items) return;
        
        items.forEach((item, index) => {
            const header = item.querySelector('.faq-edit-header h5');
            const inputs = item.querySelectorAll('input, textarea');
            const removeBtn = item.querySelector('.btn-remove-faq');
            
            if (header) header.textContent = `سؤال ${index + 1}`;
            inputs.forEach(input => input.dataset.index = index);
            removeBtn.onclick = () => this.removeFAQ(index);
        });
    },
    
    addFeature: function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const inputs = container.querySelectorAll('.feature-input');
        const newIndex = inputs.length;
        
        const div = document.createElement('div');
        div.className = 'feature-input';
        div.innerHTML = `
            <input type="text" value="ميزة جديدة" class="form-control feature-text" data-index="${newIndex}">
            <button class="btn-remove-feature" onclick="SectionManager.removeFeature('${containerId}', ${newIndex})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const addBtn = container.querySelector('.btn-add-feature');
        container.insertBefore(div, addBtn);
    },
    
    removeFeature: function(containerId, index) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const inputs = container.querySelectorAll('.feature-input');
        if (inputs.length <= 1) {
            this.showNotification('❌ يجب أن تكون هناك ميزة واحدة على الأقل', 'error');
            return;
        }
        
        const inputToRemove = container.querySelector(`.feature-input:nth-child(${index + 1})`);
        if (inputToRemove) {
            inputToRemove.remove();
            this.renumberFeatures(containerId);
        }
    },
    
    renumberFeatures: function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const inputs = container.querySelectorAll('.feature-input');
        inputs.forEach((inputDiv, index) => {
            const input = inputDiv.querySelector('.feature-text');
            const removeBtn = inputDiv.querySelector('.btn-remove-feature');
            
            if (input) input.dataset.index = index;
            if (removeBtn) removeBtn.onclick = () => this.removeFeature(containerId, index);
        });
    },
    
    addAddon: function() {
        const container = document.getElementById('addonsList');
        if (!container) return;
        
        const addons = container.querySelectorAll('.addon-item');
        const newIndex = addons.length;
        
        const div = document.createElement('div');
        div.className = 'addon-item';
        div.innerHTML = `
            <div class="addon-header">
                <input type="text" value="" class="form-control addon-name" data-index="${newIndex}" placeholder="اسم الخدمة الإضافية">
                <input type="text" value="" class="form-control addon-price" data-index="${newIndex}" placeholder="السعر">
                <button class="btn-remove-addon" onclick="SectionManager.removeAddon(${newIndex})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(div);
    },
    
    removeAddon: function(index) {
        const container = document.getElementById('addonsList');
        if (!container) return;
        
        const addonToRemove = container.querySelector(`.addon-item:nth-child(${index + 1})`);
        if (addonToRemove) {
            addonToRemove.remove();
            this.renumberAddons();
        }
    },
    
    renumberAddons: function() {
        const addons = document.getElementById('addonsList')?.querySelectorAll('.addon-item');
        if (!addons) return;
        
        addons.forEach((addon, index) => {
            const inputs = addon.querySelectorAll('input');
            const removeBtn = addon.querySelector('.btn-remove-addon');
            
            inputs.forEach(input => input.dataset.index = index);
            removeBtn.onclick = () => this.removeAddon(index);
        });
    },
    
    editPortfolioItem: function(id) {
        const portfolio = StorageSystem.load(STORAGE_KEYS.PORTFOLIO, DEFAULT_PORTFOLIO);
        const item = portfolio.find(p => p.id === id);
        
        if (!item) {
            this.showNotification('❌ العمل غير موجود', 'error');
            return;
        }
        
        document.getElementById('workTitle').value = item.title;
        document.getElementById('workDescription').value = item.description;
        document.getElementById('workImage').value = item.image;
        document.getElementById('workLink').value = item.link;
        document.getElementById('workCategory').value = item.category;
        document.getElementById('workDate').value = item.date;
        
        // تحديث المعاينة
        this.updatePortfolioPreview();
        
        // تعيين معرف العمل الحالي
        window.currentPortfolioId = id;
    },
    
    deletePortfolioItem: function(id) {
        if (!confirm('هل أنت متأكد من حذف هذا العمل؟')) {
            return;
        }
        
        const portfolio = StorageSystem.load(STORAGE_KEYS.PORTFOLIO, DEFAULT_PORTFOLIO);
        const updatedPortfolio = portfolio.filter(p => p.id !== id);
        
        StorageSystem.save(STORAGE_KEYS.PORTFOLIO, updatedPortfolio);
        this.showNotification('🗑️ تم حذف العمل', 'info');
        this.updatePortfolioList(updatedPortfolio);
    },
    
    updatePortfolioPreview: function() {
        const title = document.getElementById('workTitle').value || 'عنوان العمل';
        const description = document.getElementById('workDescription').value || 'وصف العمل سيظهر هنا';
        const image = document.getElementById('workImage').value || '';
        
        document.getElementById('previewWorkTitle').textContent = title;
        document.getElementById('previewWorkDesc').textContent = description;
        
        const previewImg = document.getElementById('previewWorkImage');
        if (previewImg && image) {
            previewImg.src = image;
            previewImg.style.display = 'block';
        } else if (previewImg) {
            previewImg.style.display = 'none';
        }
    }
};

// ================================
// 💾 نظام حفظ البيانات
// ================================
const SaveSystem = {
    // حفظ المحتوى النصي
    saveContentChanges: function() {
        try {
            // جمع البيانات من الحقول
            const contentData = {
                heroText1: document.getElementById('heroText1').value,
                heroText2: document.getElementById('heroText2').value,
                
                // جمع نصوص الكتابة المتحركة
                typewriterTexts: Array.from(document.querySelectorAll('.typewriter-text-input'))
                    .map(input => input.value)
                    .filter(text => text.trim() !== ''),
                
                whyTitle: document.getElementById('whyTitle').value,
                whyDesc: document.getElementById('whyDesc').value,
                speedTitle: document.getElementById('speedTitle').value,
                speedDesc: document.getElementById('speedDesc').value,
                responsiveTitle: document.getElementById('responsiveTitle').value,
                responsiveDesc: document.getElementById('responsiveDesc').value,
                supportTitle: document.getElementById('supportTitle').value,
                supportDesc: document.getElementById('supportDesc').value,
                designTitle: document.getElementById('designTitle').value,
                designDesc: document.getElementById('designDesc').value,
                servicesTitle: document.getElementById('servicesTitle').value,
                servicesDesc: document.getElementById('servicesDesc').value,
                youcanTitle: document.getElementById('youcanTitle').value,
                youcanDesc: document.getElementById('youcanDesc').value,
                youcanBtn: document.getElementById('youcanBtn').value,
                shopifyTitle: document.getElementById('shopifyTitle').value,
                shopifyDesc: document.getElementById('shopifyDesc').value,
                shopifyBtn: document.getElementById('shopifyBtn').value,
                websitesTitle: document.getElementById('websitesTitle').value,
                websitesDesc: document.getElementById('websitesDesc').value,
                websitesBtn: document.getElementById('websitesBtn').value,
                statsProjects: document.getElementById('statsProjects').value,
                statsSatisfaction: document.getElementById('statsSatisfaction').value,
                statsSupport: document.getElementById('statsSupport').value,
                copyright: document.getElementById('copyright').value,
                
                // جمع الأسئلة الشائعة
                faqItems: Array.from(document.querySelectorAll('.faq-edit-item')).map((item, index) => ({
                    q: item.querySelector('.faq-question-input')?.value || '',
                    a: item.querySelector('.faq-answer-input')?.value || ''
                })).filter(faq => faq.q.trim() !== '' && faq.a.trim() !== '')
            };
            
            // التحقق من البيانات الأساسية
            if (contentData.typewriterTexts.length === 0) {
                this.showNotification('❌ يجب إدخال نصوص الكتابة المتحركة', 'error');
                return;
            }
            
            if (contentData.faqItems.length === 0) {
                this.showNotification('❌ يجب إدخال سؤال واحد على الأقل', 'error');
                return;
            }
            
            // حفظ البيانات
            StorageSystem.save(STORAGE_KEYS.CONTENT, contentData);
            
            // إرسال التحديثات إلى الموقع
            LiveUpdateSystem.sendToSite(contentData);
            
            this.showNotification('✅ تم حفظ المحتوى بنجاح', 'success');
            
            // إنشاء نسخة احتياطية تلقائية
            BackupSystem.createBackup("content", "نسخة تلقائية بعد تعديل المحتوى", "تم إنشاء هذه النسخة تلقائياً بعد تعديل المحتوى");
            
        } catch (error) {
            console.error('❌ خطأ في حفظ المحتوى:', error);
            this.showNotification('❌ فشل حفظ المحتوى', 'error');
        }
    },
    
    // حفظ إعدادات SEO
    saveSEO: function() {
        try {
            const seoData = {
                siteTitle: document.getElementById('siteTitle').value,
                metaDescription: document.getElementById('metaDescription').value,
                metaKeywords: document.getElementById('metaKeywords').value,
                ogTitle: document.getElementById('ogTitle').value,
                ogDescription: document.getElementById('ogDescription').value,
                ogImage: document.getElementById('ogImage').value,
                twitterTitle: document.getElementById('twitterTitle').value,
                twitterDescription: document.getElementById('twitterDescription').value,
                orgName: document.getElementById('orgName').value,
                orgDescription: document.getElementById('orgDescription').value,
                orgAddress: document.getElementById('orgAddress').value
            };
            
            StorageSystem.save(STORAGE_KEYS.SEO, seoData);
            this.showNotification('✅ تم حفظ إعدادات SEO بنجاح', 'success');
            
        } catch (error) {
            console.error('❌ خطأ في حفظ SEO:', error);
            this.showNotification('❌ فشل حفظ إعدادات SEO', 'error');
        }
    },
    
    // حفظ التصميم
    saveDesign: function() {
        try {
            const designData = {
                arabicFont: document.getElementById('arabicFont').value,
                fontSize: parseInt(document.getElementById('fontSize').value),
                borderRadius: parseInt(document.getElementById('borderRadius').value),
                spacing: parseInt(document.getElementById('spacing').value),
                shadowIntensity: parseInt(document.getElementById('shadowIntensity').value),
                transitionSpeed: parseInt(document.getElementById('transitionSpeed').value)
            };
            
            StorageSystem.save(STORAGE_KEYS.DESIGN, designData);
            this.showNotification('✅ تم حفظ إعدادات التصميم بنجاح', 'success');
            
        } catch (error) {
            console.error('❌ خطأ في حفظ التصميم:', error);
            this.showNotification('❌ فشل حفظ إعدادات التصميم', 'error');
        }
    },
    
    // حفظ الألوان
    saveColors: function() {
        try {
            const colorsData = {
                // Dark Theme
                darkBg: document.getElementById('darkBg').value,
                darkCard: document.getElementById('darkCard').value,
                darkText: document.getElementById('darkText').value,
                darkSecondary: document.getElementById('darkSecondary').value,
                
                // Light Theme
                lightBg: document.getElementById('lightBg').value,
                lightCard: document.getElementById('lightCard').value,
                lightText: document.getElementById('lightText').value,
                lightSecondary: document.getElementById('lightSecondary').value,
                
                // Accent Colors
                accentColor: document.getElementById('accentColor').value,
                forgeColor: document.getElementById('forgeColor').value,
                successColor: document.getElementById('successColor').value,
                warningColor: document.getElementById('warningColor').value
            };
            
            StorageSystem.save(STORAGE_KEYS.COLORS, colorsData);
            this.showNotification('✅ تم حفظ نظام الألوان بنجاح', 'success');
            
        } catch (error) {
            console.error('❌ خطأ في حفظ الألوان:', error);
            this.showNotification('❌ فشل حفظ نظام الألوان', 'error');
        }
    },
    
    // حفظ الخدمات
    saveServices: function() {
        try {
            const servicesData = StorageSystem.load(STORAGE_KEYS.SERVICES, DEFAULT_SERVICES);
            
            // تحديث الباقات
            servicesData.packages.basic.name = document.getElementById('packageBasicName').value;
            servicesData.packages.basic.features = Array.from(document.querySelectorAll('#basicFeatures .feature-text'))
                .map(input => input.value)
                .filter(text => text.trim() !== '');
            
            servicesData.packages.pro.name = document.getElementById('packageProName').value;
            servicesData.packages.pro.features = Array.from(document.querySelectorAll('#proFeatures .feature-text'))
                .map(input => input.value)
                .filter(text => text.trim() !== '');
            
            // تحديث الخدمات الإضافية
            servicesData.addons = Array.from(document.querySelectorAll('.addon-item')).map(item => ({
                name: item.querySelector('.addon-name')?.value || '',
                price: item.querySelector('.addon-price')?.value || ''
            })).filter(addon => addon.name.trim() !== '' && addon.price.trim() !== '');
            
            StorageSystem.save(STORAGE_KEYS.SERVICES, servicesData);
            this.showNotification('✅ تم حفظ الخدمات والأسعار بنجاح', 'success');
            
        } catch (error) {
            console.error('❌ خطأ في حفظ الخدمات:', error);
            this.showNotification('❌ فشل حفظ الخدمات', 'error');
        }
    },
    
    // حفظ المعرض
    savePortfolio: function() {
        try {
            const portfolio = StorageSystem.load(STORAGE_KEYS.PORTFOLIO, DEFAULT_PORTFOLIO);
            
            const title = document.getElementById('workTitle').value;
            const description = document.getElementById('workDescription').value;
            const image = document.getElementById('workImage').value;
            const link = document.getElementById('workLink').value;
            const category = document.getElementById('workCategory').value;
            const date = document.getElementById('workDate').value;
            
            if (!title || !description || !image) {
                this.showNotification('❌ الرجاء ملء جميع الحقول الإلزامية', 'error');
                return;
            }
            
            const newItem = {
                id: window.currentPortfolioId || Date.now(),
                title,
                description,
                image,
                link,
                category,
                date: date || new Date().toISOString().split('T')[0]
            };
            
            if (window.currentPortfolioId) {
                // تحديث عمل موجود
                const index = portfolio.findIndex(p => p.id === window.currentPortfolioId);
                if (index !== -1) {
                    portfolio[index] = newItem;
                }
            } else {
                // إضافة عمل جديد
                portfolio.push(newItem);
            }
            
            StorageSystem.save(STORAGE_KEYS.PORTFOLIO, portfolio);
            this.showNotification('✅ تم حفظ العمل بنجاح', 'success');
            
            // تحديث القائمة
            SectionManager.updatePortfolioList(portfolio);
            
            // مسح الحقول
            this.clearPortfolioForm();
            
        } catch (error) {
            console.error('❌ خطأ في حفظ المعرض:', error);
            this.showNotification('❌ فشل حفظ العمل', 'error');
        }
    },
    
    // تحديث العمل الحالي
    updatePortfolioItem: function() {
        this.savePortfolio();
    },
    
    clearPortfolioForm: function() {
        document.getElementById('workTitle').value = '';
        document.getElementById('workDescription').value = '';
        document.getElementById('workImage').value = '';
        document.getElementById('workLink').value = '';
        document.getElementById('workCategory').value = 'website';
        document.getElementById('workDate').value = '';
        delete window.currentPortfolioId;
        
        SectionManager.updatePortfolioPreview();
    },
    
    // حفظ الإعدادات المتقدمة
    saveAdvancedSettings: function() {
        try {
            const settingsData = {
                autoBackup: document.getElementById('autoBackup').checked,
                enableAnalytics: document.getElementById('enableAnalytics').checked,
                enableCache: document.getElementById('enableCache').checked,
                sessionTimeout: parseInt(document.getElementById('sessionTimeout').value),
                defaultLanguage: document.getElementById('defaultLanguage').value,
                autoTranslate: document.getElementById('autoTranslate').value,
                allowedIPs: document.getElementById('allowedIPs').value,
                customCSS: document.getElementById('customCSS').value,
                customJS: document.getElementById('customJS').value
            };
            
            StorageSystem.save(STORAGE_KEYS.SETTINGS, settingsData);
            this.showNotification('✅ تم حفظ الإعدادات المتقدمة بنجاح', 'success');
            
        } catch (error) {
            console.error('❌ خطأ في حفظ الإعدادات:', error);
            this.showNotification('❌ فشل حفظ الإعدادات', 'error');
        }
    },
    
    // استعادة الإعدادات الأصلية
    resetContent: function() {
        if (confirm('هل أنت متأكد من استعادة المحتوى إلى الإعدادات الأصلية؟ سيتم فقدان جميع التعديلات.')) {
            StorageSystem.remove(STORAGE_KEYS.CONTENT);
            SectionManager.loadContentData();
            this.showNotification('✅ تم استعادة المحتوى الأصلي', 'success');
        }
    },
    
    // إعادة ضبط النظام
    resetSystem: function() {
        if (confirm('⚠️ تحذير: هل أنت متأكد من إعادة ضبط النظام؟\nسيتم حذف جميع التعديلات والبيانات المحفوظة.')) {
            StorageSystem.clearAll();
            location.reload();
        }
    }
};

// ================================
// 🔔 نظام الإشعارات
// ================================
const NotificationSystem = {
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'live-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },
    
    getNotificationIcon: function(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            info: 'info-circle',
            warning: 'exclamation-triangle'
        };
        return icons[type] || 'info-circle';
    }
};

// ================================
// 📱 مودال الخدمات
// ================================
const ServiceModal = {
    currentService: null,
    
    open: function(serviceId) {
        this.currentService = serviceId;
        const modal = document.getElementById('serviceModal');
        if (modal) {
            modal.style.display = 'block';
            this.loadServiceData(serviceId);
        }
    },
    
    close: function() {
        const modal = document.getElementById('serviceModal');
        if (modal) {
            modal.style.display = 'none';
            this.currentService = null;
        }
    },
    
    loadServiceData: function(serviceId) {
        const services = StorageSystem.load(STORAGE_KEYS.SERVICES, DEFAULT_SERVICES);
        const service = services[serviceId];
        
        if (!service) return;
        
        document.getElementById('modalServiceTitle').textContent = `تعديل ${service.name}`;
        document.getElementById('editServiceName').value = service.name;
        document.getElementById('editServicePrice').value = service.basePrice;
        document.getElementById('editServiceTime').value = service.deliveryTime;
        document.getElementById('editServiceDesc').value = service.description;
        
        // تحميل المميزات
        this.loadServiceFeatures(service.features || []);
    },
    
    loadServiceFeatures: function(features) {
        const container = document.getElementById('editServiceFeatures');
        if (!container) return;
        
        container.innerHTML = '';
        
        features.forEach((feature, index) => {
            const div = document.createElement('div');
            div.className = 'feature-input';
            div.innerHTML = `
                <input type="text" value="${feature}" class="form-control feature-text" data-index="${index}">
                <button class="btn-remove-feature" onclick="ServiceModal.removeFeature(${index})">
                    <i class="fas fa-times"></i>
                </button>
            `;
            container.appendChild(div);
        });
        
        // إضافة زر إضافة ميزة
        const addBtn = document.createElement('button');
        addBtn.className = 'btn-add-feature';
        addBtn.innerHTML = '<i class="fas fa-plus"></i> إضافة ميزة';
        addBtn.onclick = () => this.addFeature();
        container.appendChild(addBtn);
    },
    
    addFeature: function() {
        const container = document.getElementById('editServiceFeatures');
        if (!container) return;
        
        const inputs = container.querySelectorAll('.feature-input');
        const newIndex = inputs.length;
        
        const div = document.createElement('div');
        div.className = 'feature-input';
        div.innerHTML = `
            <input type="text" value="" class="form-control feature-text" data-index="${newIndex}" placeholder="ميزة جديدة">
            <button class="btn-remove-feature" onclick="ServiceModal.removeFeature(${newIndex})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const addBtn = container.querySelector('.btn-add-feature');
        container.insertBefore(div, addBtn);
    },
    
    removeFeature: function(index) {
        const container = document.getElementById('editServiceFeatures');
        if (!container) return;
        
        const inputToRemove = container.querySelector(`.feature-input:nth-child(${index + 1})`);
        if (inputToRemove) {
            inputToRemove.remove();
            this.renumberFeatures();
        }
    },
    
    renumberFeatures: function() {
        const container = document.getElementById('editServiceFeatures');
        if (!container) return;
        
        const inputs = container.querySelectorAll('.feature-input');
        inputs.forEach((inputDiv, index) => {
            const input = inputDiv.querySelector('.feature-text');
            const removeBtn = inputDiv.querySelector('.btn-remove-feature');
            
            if (input) input.dataset.index = index;
            if (removeBtn) removeBtn.onclick = () => this.removeFeature(index);
        });
    },
    
    saveChanges: function() {
        if (!this.currentService) return;
        
        const services = StorageSystem.load(STORAGE_KEYS.SERVICES, DEFAULT_SERVICES);
        
        services[this.currentService] = {
            name: document.getElementById('editServiceName').value,
            basePrice: document.getElementById('editServicePrice').value,
            deliveryTime: document.getElementById('editServiceTime').value,
            description: document.getElementById('editServiceDesc').value,
            features: Array.from(document.querySelectorAll('#editServiceFeatures .feature-text'))
                .map(input => input.value)
                .filter(text => text.trim() !== '')
        };
        
        StorageSystem.save(STORAGE_KEYS.SERVICES, services);
        NotificationSystem.showNotification('✅ تم حفظ التغييرات', 'success');
        this.close();
        
        // تحديث الواجهة
        SectionManager.loadServicesData();
    }
};

// ================================
// 🎮 دوال الواجهة
// ================================
function initDashboard() {
    console.log('🚀 لوحة تحكم Web Forge جاهزة!');
    
    // تعيين التواريخ والإحصائيات
    document.getElementById('systemVersion').textContent = SITE_CONFIG.version;
    document.getElementById('systemLastUpdate').textContent = new Date().toLocaleDateString('ar-MA');
    
    // تفعيل التبديل بين أزرار القائمة
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // تفعيل الشريط الجانبي
    setupSidebar();
    
    // تفعيل الأحداث
    setupEventListeners();
    
    // تحميل الإحصائيات
    updateStats();
    
    // تحميل أول قسم
    SectionManager.showSection('home');
}

function setupSidebar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
}

function setupEventListeners() {
    // أحداث SEO
    const seoInputs = ['siteTitle', 'metaDescription', 'metaKeywords', 'ogTitle', 'ogDescription', 'twitterTitle', 'twitterDescription'];
    seoInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => SectionManager.updateSEOPreview());
        }
    });
    
    // أحداث التصميم
    const designInputs = ['fontSize', 'borderRadius', 'spacing', 'shadowIntensity', 'transitionSpeed'];
    designInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => {
                SectionManager.updateDesignPreview();
                // تحديث القيمة المعروضة
                const valueElement = document.getElementById(`${id}Value`);
                if (valueElement) {
                    if (id === 'shadowIntensity') {
                        valueElement.textContent = SectionManager.getShadowLabel(element.value);
                    } else if (id === 'transitionSpeed') {
                        valueElement.textContent = `${element.value}ms`;
                    } else {
                        valueElement.textContent = `${element.value}px`;
                    }
                }
            });
        }
    });
    
    // أحداث الألوان
    const colorInputs = [
        'darkBg', 'darkCard', 'darkText', 'darkSecondary',
        'lightBg', 'lightCard', 'lightText', 'lightSecondary',
        'accentColor', 'forgeColor', 'successColor', 'warningColor'
    ];
    
    colorInputs.forEach(id => {
        const colorInput = document.getElementById(id);
        const textInput = document.getElementById(`${id}Text`);
        
        if (colorInput && textInput) {
            colorInput.addEventListener('input', function() {
                textInput.value = this.value;
                SectionManager.updateColorsPreview();
            });
            
            textInput.addEventListener('input', function() {
                colorInput.value = this.value;
                SectionManager.updateColorsPreview();
            });
        }
    });
    
    // أحداث المعرض
    const portfolioInputs = ['workTitle', 'workDescription', 'workImage', 'workLink'];
    portfolioInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => SectionManager.updatePortfolioPreview());
        }
    });
}

function updateStats() {
    // تحديث الإحصائيات عشوائياً للمعاينة
    setInterval(() => {
        const todayViews = document.getElementById('todayViews');
        const newOrders = document.getElementById('newOrders');
        
        if (todayViews) {
            const current = parseInt(todayViews.textContent) || 0;
            todayViews.textContent = Math.floor(current + Math.random() * 3);
        }
        
        if (newOrders) {
            const current = parseInt(newOrders.textContent) || 0;
            if (Math.random() > 0.8) { // 20% فرصة لإضافة طلب جديد
                newOrders.textContent = current + 1;
            }
        }
    }, 10000); // كل 10 ثوانٍ
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

function backupSite() {
    BackupSystem.createBackup("full", "نسخة يدوية", "تم إنشاء هذه النسخة يدوياً من قبل المدير");
}

function previewChanges() {
    LiveUpdateSystem.testUpdate();
}

function applyThemePreview() {
    // تطبيق الألوان المختارة على المعاينة
    NotificationSystem.showNotification('🎨 تم تطبيق معاينة الألوان', 'success');
}

// ================================
// 📁 دوال الملفات والصور
// ================================
function handleImageUpload(files) {
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    const MAX_FILES = 10;
    
    let uploadedFiles = JSON.parse(localStorage.getItem('webforge_images') || '[]');
    
    Array.from(files).forEach(file => {
        if (file.size > MAX_SIZE) {
            NotificationSystem.showNotification(`❌ ملف ${file.name} أكبر من 5MB`, 'error');
            return;
        }
        
        if (uploadedFiles.length >= MAX_FILES) {
            NotificationSystem.showNotification('❌ الحد الأقصى هو 10 صور', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = {
                id: Date.now() + Math.random(),
                name: file.name,
                type: file.type,
                size: file.size,
                data: e.target.result,
                uploadDate: new Date().toISOString()
            };
            
            uploadedFiles.push(imageData);
            localStorage.setItem('webforge_images', JSON.stringify(uploadedFiles));
            
            NotificationSystem.showNotification(`✅ تم رفع ${file.name}`, 'success');
            updateImageGallery();
        };
        
        reader.readAsDataURL(file);
    });
}

function updateImageGallery() {
    const gallery = document.getElementById('imageGallery');
    const selectElements = ['ogImageSelect', 'twitterImageSelect', 'faviconSelect'];
    
    if (!gallery) return;
    
    const images = JSON.parse(localStorage.getItem('webforge_images') || '[]');
    
    gallery.innerHTML = images.map(img => `
        <div class="gallery-item">
            <img src="${img.data}" alt="${img.name}">
            <div class="gallery-overlay">
                <button onclick="previewImage('${img.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button onclick="deleteImage('${img.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // تحديث عناصر الاختيار
    selectElements.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            const currentValue = select.value;
            select.innerHTML = '<option value="">اختر صورة</option>' + 
                images.map(img => `<option value="${img.data}" ${currentValue === img.data ? 'selected' : ''}>${img.name}</option>`).join('');
        }
    });
}

function previewImage(imageId) {
    const images = JSON.parse(localStorage.getItem('webforge_images') || '[]');
    const image = images.find(img => img.id === imageId);
    
    if (image) {
        const modal = document.getElementById('imagePreviewModal');
        const imgElement = document.getElementById('previewImage');
        const infoElement = document.getElementById('imageInfo');
        
        if (modal && imgElement && infoElement) {
            imgElement.src = image.data;
            infoElement.textContent = `${image.name} (${(image.size / 1024).toFixed(1)}KB)`;
            modal.style.display = 'block';
            
            window.currentPreviewImage = image.data;
        }
    }
}

function closePreview() {
    const modal = document.getElementById('imagePreviewModal');
    if (modal) {
        modal.style.display = 'none';
        window.currentPreviewImage = null;
    }
}

function deleteImage(imageId) {
    if (!confirm('هل تريد حذف هذه الصورة؟')) return;
    
    let images = JSON.parse(localStorage.getItem('webforge_images') || '[]');
    images = images.filter(img => img.id !== imageId);
    
    localStorage.setItem('webforge_images', JSON.stringify(images));
    NotificationSystem.showNotification('🗑️ تم حذف الصورة', 'info');
    updateImageGallery();
}

function useSelectedImage() {
    if (window.currentPreviewImage) {
        // استخدام الصورة حسب السياق
        NotificationSystem.showNotification('✅ تم تعيين الصورة', 'success');
        closePreview();
    }
}

function saveImages() {
    NotificationSystem.showNotification('✅ تم حفظ إعدادات الصور', 'success');
}

// ================================
// 📥 معالجة سحب وإفلات الصور
// ================================
function setupDragAndDrop() {
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('imageUpload');
    
    if (dropArea && fileInput) {
        // منع السلوك الافتراضي
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
        
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        // إضافة تأثيرات السحب
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false);
        });
        
        function highlight() {
            dropArea.classList.add('dragging');
        }
        
        function unhighlight() {
            dropArea.classList.remove('dragging');
        }
        
        // معالجة الإفلات
        dropArea.addEventListener('drop', handleDrop, false);
        
        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleImageUpload(files);
        }
        
        // معالجة الاختيار العادي
        fileInput.addEventListener('change', function() {
            handleImageUpload(this.files);
        });
    }
}

// ================================
// 🚀 تهيئة النظام
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // التحقق من تسجيل الدخول
    AuthSystem.checkAuth();
    
    // تهيئة السحب والإفلات
    setupDragAndDrop();
    
    // إعداد أحداث التسجيل
    const loginBtn = document.querySelector('.btn-login');
    const passwordInput = document.getElementById('adminPassword');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', AuthSystem.login);
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                AuthSystem.login();
            }
        });
    }
    
    // منع الإرسال التلقائي للنماذج
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', e => e.preventDefault());
    });
});

// ================================
// 🌐 جعل الدوال متاحة عالمياً
// ================================
window.login = AuthSystem.login;
window.logout = AuthSystem.logout;
window.showSection = SectionManager.showSection;
window.toggleSidebar = toggleSidebar;
window.forceLiveUpdate = LiveUpdateSystem.forceUpdate;
window.testLiveUpdate = LiveUpdateSystem.testUpdate;
window.openSitePreview = () => window.open('index.html?preview=true&admin=' + Date.now(), '_blank');
window.saveContentChanges = SaveSystem.saveContentChanges;
window.resetContent = SaveSystem.resetContent;
window.saveSEO = SaveSystem.saveSEO;
window.saveDesign = SaveSystem.saveDesign;
window.saveColors = SaveSystem.saveColors;
window.saveServices = SaveSystem.saveServices;
window.savePortfolio = SaveSystem.savePortfolio;
window.updatePortfolioItem = SaveSystem.updatePortfolioItem;
window.saveAdvancedSettings = SaveSystem.saveAdvancedSettings;
window.resetSystem = SaveSystem.resetSystem;
window.changePassword = AuthSystem.changePassword;
window.createBackup = BackupSystem.createBackup;
window.restoreBackup = BackupSystem.restoreBackup;
window.addFAQ = SectionManager.addFAQ;
window.addPortfolioItem = () => {
    SaveSystem.clearPortfolioForm();
    SectionManager.showSection('portfolio');
};
window.editService = ServiceModal.open;
window.closeServiceModal = ServiceModal.close;
window.saveServiceChanges = ServiceModal.saveChanges;
window.previewImage = previewImage;
window.closePreview = closePreview;
window.useSelectedImage = useSelectedImage;
window.saveImages = saveImages;
window.backupSite = backupSite;
window.previewChanges = previewChanges;
window.applyThemePreview = applyThemePreview;

// حفظ المرجع للدالة الأصلية
window.originalSaveContentChanges = SaveSystem.saveContentChanges;

// ================================
// ✅ تم إعداد لوحة التحكم بنجاح
// ================================
console.log('🎛️ admin-config.js جاهز للاستخدام!');
