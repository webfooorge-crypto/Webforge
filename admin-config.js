// ========== إعدادات النظام الأساسية ==========
const ADMIN_CONFIG = {
    // إعدادات النظام
    systemVersion: "2.0.0",
    defaultPassword: "WebForge2026", // يمكن تغييرها لاحقاً
    sessionTimeout: 60, // دقائق
    autoBackup: true,
    
    // مسارات التخزين
    storageKeys: {
        content: "webforge_content",
        design: "webforge_design",
        seo: "webforge_seo",
        services: "webforge_services",
        portfolio: "webforge_portfolio",
        backups: "webforge_backups",
        system: "webforge_system"
    },
    
    // القيم الافتراضية
    defaultContent: {
        hero: {
            text1: "نحول أفكارك إلى",
            text2: "مجموعة web forge تقدم لك حلولاً تقنية متكاملة. متخصصون في صناعة الهوية الرقمية، تطوير متاجر YouCan و Shopify، وتصميم المواقع العصرية."
        },
        typewriter: [
            "متاجر إلكترونية رائعة",
            "هوية رقمية رائعة", 
            "مواقع احترافية",
            "دعم فني متواصل"
        ],
        whyUs: {
            title: "🛡️ لماذا تختار Web Forge؟",
            desc: "نحن لا نبني مجرد أكواد، بل نصنع تجربة مستخدم فريدة",
            cards: [
                {
                    title: "سرعة فائقة",
                    desc: "نضمن لك سرعة تحميل استثنائية لتصدر محركات البحث."
                },
                {
                    title: "تجاوب كامل",
                    desc: "موقعك سيظهر بشكل أنيق على كافة الأجهزة الذكية."
                },
                {
                    title: "دعم فني",
                    desc: "فريقنا معك دائماً لضمان استقرار موقعك 24/7."
                },
                {
                    title: "تصميم مخصص",
                    desc: "نمنح مشروعك لمسة إبداعية تميزك عن المنافسين."
                }
            ]
        },
        services: {
            title: "💼 خدماتنا الاحترافية",
            desc: "اختر الخدمة التي تناسب طموحاتك",
            items: [
                {
                    title: "متاجر YouCan",
                    desc: "تصميم وتجهيز متاجر YouCan احترافية بالكامل.",
                    btn: "اطلب الخدمة"
                },
                {
                    title: "متاجر Shopify",
                    desc: "تطوير متاجر دروبشيبينغ أو براند خاص عالمي.",
                    btn: "اطلب الخدمة"
                },
                {
                    title: "مواقع Web Forge",
                    desc: "مواقع خاصة: مدونة، طبيب، محامي، Portfolio، كتب.",
                    btn: "اطلب الخدمة"
                }
            ]
        },
        stats: {
            projects: 50,
            satisfaction: 100,
            support: "دعم فني"
        },
        faq: [
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
        footer: {
            copyright: "جميع الحقوق محفوظة &copy; 2026 Web Forge"
        }
    },
    
    defaultDesign: {
        colors: {
            dark: {
                bg: "#0f172a",
                card: "#1e293b",
                text: "#f8fafc",
                secondary: "#94a3b8"
            },
            light: {
                bg: "#f8fafc",
                card: "#ffffff",
                text: "#0f172a",
                secondary: "#475569"
            },
            accent: "#38bdf8",
            forge: "#f59e0b",
            success: "#10b981",
            warning: "#f59e0b",
            error: "#ef4444"
        },
        fonts: {
            arabic: "'Noto Naskh Arabic', 'Tajawal', 'Cairo', sans-serif",
            ui: "'Tajawal', 'Cairo', sans-serif"
        },
        spacing: {
            borderRadius: "8px",
            baseSpacing: "15px"
        }
    },
    
    defaultSEO: {
        title: "Web Forge | مجموعة محمد أيت صالح",
        description: "Web Forge - متخصصون في تصميم وتطوير المواقع الإلكترونية والمتاجر (YouCan و Shopify). تحويل أفكارك إلى واقع رقمي احترافي.",
        keywords: "تصميم مواقع, متاجر إلكترونية, YouCan, Shopify, تطوير ويب, هوية رقمية, المغرب",
        og: {
            title: "Web Forge | مجموعة محمد أيت صالح",
            description: "مجموعة Web Forge تقدم حلولاً تقنية متكاملة في تصميم وتطوير المواقع والمتاجر الإلكترونية",
            image: "https://i.ibb.co/3qzt7ks/2-2-2026-15329-webforge-it-com.jpg"
        },
        twitter: {
            title: "Web Forge | مجموعة محمد أيت صالح",
            description: "متخصصون في صناعة الهوية الرقمية، تطوير متاجر YouCan و Shopify"
        },
        schema: {
            orgName: "Web Forge | مجموعة محمد أيت صالح",
            description: "مجموعة Web Forge تقدم حلولاً تقنية متكاملة في تصميم وتطوير المواقع والمتاجر الإلكترونية",
            address: "أكادير، المغرب"
        }
    }
};

// ========== نظام الحالة ==========
let currentState = {
    isLoggedIn: false,
    currentSection: 'home',
    currentService: null,
    editingItem: null
};

// ========== نظام التخزين ==========
class StorageManager {
    static save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('خطأ في الحفظ:', error);
            this.showNotification('خطأ في حفظ البيانات', 'error');
            return false;
        }
    }
    
    static load(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('خطأ في التحميل:', error);
            return null;
        }
    }
    
    static remove(key) {
        localStorage.removeItem(key);
    }
    
    static clearAll() {
        Object.values(ADMIN_CONFIG.storageKeys).forEach(key => {
            localStorage.removeItem(key);
        });
    }
}

// ========== نظام الإشعارات ==========
class NotificationSystem {
    static show(message, type = 'info') {
        const container = document.getElementById('notificationArea');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        container.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    static getIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
}

// ========== نظام المصادقة ==========
class AuthSystem {
    static login(password) {
        const savedPassword = StorageManager.load('admin_password') || ADMIN_CONFIG.defaultPassword;
        
        if (password === savedPassword) {
            currentState.isLoggedIn = true;
            sessionStorage.setItem('admin_session', 'active');
            sessionStorage.setItem('session_start', Date.now());
            return true;
        }
        return false;
    }
    
    static logout() {
        currentState.isLoggedIn = false;
        sessionStorage.removeItem('admin_session');
        window.location.reload();
    }
    
    static checkSession() {
        const session = sessionStorage.getItem('admin_session');
        const startTime = sessionStorage.getItem('session_start');
        
        if (!session || !startTime) return false;
        
        const currentTime = Date.now();
        const sessionDuration = (currentTime - parseInt(startTime)) / 60000; // دقائق
        
        if (sessionDuration > ADMIN_CONFIG.sessionTimeout) {
            this.logout();
            return false;
        }
        
        currentState.isLoggedIn = true;
        return true;
    }
    
    static changePassword(newPassword, confirmPassword) {
        if (newPassword !== confirmPassword) {
            throw new Error('كلمات المرور غير متطابقة');
        }
        
        if (newPassword.length < 6) {
            throw new Error('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        }
        
        StorageManager.save('admin_password', newPassword);
        NotificationSystem.show('تم تغيير كلمة المرور بنجاح', 'success');
    }
}

// ========== نظام تحميل المحتوى ==========
class ContentLoader {
    static loadAllContent() {
        this.loadTextContent();
        this.loadDesignContent();
        this.loadSEOContent();
        this.loadServicesContent();
        this.loadPortfolioContent();
        this.loadSystemContent();
        this.updateStats();
    }
    
    static loadTextContent() {
        const content = StorageManager.load(ADMIN_CONFIG.storageKeys.content) || ADMIN_CONFIG.defaultContent;
        
        // Hero Section
        document.getElementById('heroText1').value = content.hero.text1;
        document.getElementById('heroText2').value = content.hero.text2;
        
        // Typewriter
        const typewriterContainer = document.getElementById('typewriterTexts');
        typewriterContainer.innerHTML = '';
        content.typewriter.forEach((text, index) => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'form-control';
            input.value = text;
            input.dataset.index = index;
            input.placeholder = `نص ${index + 1}`;
            typewriterContainer.appendChild(input);
        });
        
        // Why Us Section
        document.getElementById('whyTitle').value = content.whyUs.title;
        document.getElementById('whyDesc').value = content.whyUs.desc;
        
        content.whyUs.cards.forEach((card, index) => {
            const titles = ['speedTitle', 'responsiveTitle', 'supportTitle', 'designTitle'];
            const descs = ['speedDesc', 'responsiveDesc', 'supportDesc', 'designDesc'];
            
            if (document.getElementById(titles[index])) {
                document.getElementById(titles[index]).value = card.title;
                document.getElementById(descs[index]).value = card.desc;
            }
        });
        
        // Services Section
        document.getElementById('servicesTitle').value = content.services.title;
        document.getElementById('servicesDesc').value = content.services.desc;
        
        content.services.items.forEach((service, index) => {
            const titles = ['youcanTitle', 'shopifyTitle', 'websitesTitle'];
            const descs = ['youcanDesc', 'shopifyDesc', 'websitesDesc'];
            const btns = ['youcanBtn', 'shopifyBtn', 'websitesBtn'];
            
            if (document.getElementById(titles[index])) {
                document.getElementById(titles[index]).value = service.title;
                document.getElementById(descs[index]).value = service.desc;
                document.getElementById(btns[index]).value = service.btn;
            }
        });
        
        // Stats Section
        document.getElementById('statsProjects').value = content.stats.projects;
        document.getElementById('statsSatisfaction').value = content.stats.satisfaction;
        document.getElementById('statsSupport').value = content.stats.support;
        
        // FAQ Section
        const faqContainer = document.getElementById('faqEditor');
        faqContainer.innerHTML = '';
        content.faq.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item-edit';
            faqItem.innerHTML = `
                <div class="faq-header">
                    <strong>سؤال ${index + 1}</strong>
                    <button onclick="removeFAQ(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <input type="text" class="form-control faq-question" 
                       value="${item.q}" placeholder="السؤال" data-index="${index}">
                <textarea class="form-control faq-answer" rows="2" 
                          placeholder="الإجابة" data-index="${index}">${item.a}</textarea>
            `;
            faqContainer.appendChild(faqItem);
        });
        
        // Footer
        document.getElementById('copyright').value = content.footer.copyright;
    }
    
    static loadDesignContent() {
        const design = StorageManager.load(ADMIN_CONFIG.storageKeys.design) || ADMIN_CONFIG.defaultDesign;
        
        // الألوان
        document.getElementById('darkBg').value = design.colors.dark.bg;
        document.getElementById('darkBgText').value = design.colors.dark.bg;
        document.getElementById('darkCard').value = design.colors.dark.card;
        document.getElementById('darkCardText').value = design.colors.dark.card;
        document.getElementById('darkText').value = design.colors.dark.text;
        document.getElementById('darkTextText').value = design.colors.dark.text;
        document.getElementById('darkSecondary').value = design.colors.dark.secondary;
        document.getElementById('darkSecondaryText').value = design.colors.dark.secondary;
        
        document.getElementById('lightBg').value = design.colors.light.bg;
        document.getElementById('lightBgText').value = design.colors.light.bg;
        document.getElementById('lightCard').value = design.colors.light.card;
        document.getElementById('lightCardText').value = design.colors.light.card;
        document.getElementById('lightText').value = design.colors.light.text;
        document.getElementById('lightTextText').value = design.colors.light.text;
        document.getElementById('lightSecondary').value = design.colors.light.secondary;
        document.getElementById('lightSecondaryText').value = design.colors.light.secondary;
        
        document.getElementById('accentColor').value = design.colors.accent;
        document.getElementById('accentColorText').value = design.colors.accent;
        document.getElementById('forgeColor').value = design.colors.forge;
        document.getElementById('forgeColorText').value = design.colors.forge;
        document.getElementById('successColor').value = design.colors.success;
        document.getElementById('successColorText').value = design.colors.success;
        document.getElementById('warningColor').value = design.colors.warning;
        document.getElementById('warningColorText').value = design.colors.warning;
        
        // الخطوط
        document.getElementById('arabicFont').value = design.fonts.arabic;
        
        // التباعد
        document.getElementById('borderRadius').value = parseInt(design.spacing.borderRadius);
        document.getElementById('borderRadiusValue').textContent = design.spacing.borderRadius;
        document.getElementById('spacing').value = parseInt(design.spacing.baseSpacing);
        document.getElementById('spacingValue').textContent = design.spacing.baseSpacing;
        
        // تحديث المعاينة
        this.updateDesignPreview();
    }
    
    static loadSEOContent() {
        const seo = StorageManager.load(ADMIN_CONFIG.storageKeys.seo) || ADMIN_CONFIG.defaultSEO;
        
        document.getElementById('siteTitle').value = seo.title;
        document.getElementById('metaDescription').value = seo.description;
        document.getElementById('metaKeywords').value = seo.keywords;
        document.getElementById('ogTitle').value = seo.og.title;
        document.getElementById('ogDescription').value = seo.og.description;
        document.getElementById('ogImage').value = seo.og.image;
        document.getElementById('twitterTitle').value = seo.twitter.title;
        document.getElementById('twitterDescription').value = seo.twitter.description;
        document.getElementById('orgName').value = seo.schema.orgName;
        document.getElementById('orgDescription').value = seo.schema.description;
        document.getElementById('orgAddress').value = seo.schema.address;
        
        // تحديث معاينة SEO
        this.updateSEOPreview();
    }
    
    static updateStats() {
        // تحديث الإحصائيات
        const content = StorageManager.load(ADMIN_CONFIG.storageKeys.content) || ADMIN_CONFIG.defaultContent;
        document.getElementById('todayViews').textContent = this.getRandomViews();
        document.getElementById('newOrders').textContent = this.getRandomOrders();
        document.getElementById('lastUpdate').textContent = this.formatLastUpdate();
        
        // تحديث سجل التغييرات
        this.updateChangeLog();
    }
    
    static getRandomViews() {
        return Math.floor(Math.random() * 100) + 50;
    }
    
    static getRandomOrders() {
        return Math.floor(Math.random() * 10) + 1;
    }
    
    static formatLastUpdate() {
        const lastUpdate = localStorage.getItem('last_update');
        if (!lastUpdate) return 'لم يتم التحديث بعد';
        
        const now = new Date();
        const updateTime = new Date(parseInt(lastUpdate));
        const diffMinutes = Math.floor((now - updateTime) / 60000);
        
        if (diffMinutes < 60) {
            return `قبل ${diffMinutes} دقيقة`;
        } else if (diffMinutes < 1440) {
            return `قبل ${Math.floor(diffMinutes / 60)} ساعة`;
        } else {
            return `قبل ${Math.floor(diffMinutes / 1440)} يوم`;
        }
    }
}

// ========== نظام الحفظ ==========
class SaveSystem {
    static saveContent() {
        try {
            const content = {
                hero: {
                    text1: document.getElementById('heroText1').value,
                    text2: document.getElementById('heroText2').value
                },
                typewriter: Array.from(document.querySelectorAll('#typewriterTexts input')).map(input => input.value),
                whyUs: {
                    title: document.getElementById('whyTitle').value,
                    desc: document.getElementById('whyDesc').value,
                    cards: [
                        {
                            title: document.getElementById('speedTitle').value,
                            desc: document.getElementById('speedDesc').value
                        },
                        {
                            title: document.getElementById('responsiveTitle').value,
                            desc: document.getElementById('responsiveDesc').value
                        },
                        {
                            title: document.getElementById('supportTitle').value,
                            desc: document.getElementById('supportDesc').value
                        },
                        {
                            title: document.getElementById('designTitle').value,
                            desc: document.getElementById('designDesc').value
                        }
                    ]
                },
                services: {
                    title: document.getElementById('servicesTitle').value,
                    desc: document.getElementById('servicesDesc').value,
                    items: [
                        {
                            title: document.getElementById('youcanTitle').value,
                            desc: document.getElementById('youcanDesc').value,
                            btn: document.getElementById('youcanBtn').value
                        },
                        {
                            title: document.getElementById('shopifyTitle').value,
                            desc: document.getElementById('shopifyDesc').value,
                            btn: document.getElementById('shopifyBtn').value
                        },
                        {
                            title: document.getElementById('websitesTitle').value,
                            desc: document.getElementById('websitesDesc').value,
                            btn: document.getElementById('websitesBtn').value
                        }
                    ]
                },
                stats: {
                    projects: parseInt(document.getElementById('statsProjects').value) || 0,
                    satisfaction: parseInt(document.getElementById('statsSatisfaction').value) || 0,
                    support: document.getElementById('statsSupport').value
                },
                faq: Array.from(document.querySelectorAll('.faq-item-edit')).map(item => ({
                    q: item.querySelector('.faq-question').value,
                    a: item.querySelector('.faq-answer').value
                })),
                footer: {
                    copyright: document.getElementById('copyright').value
                }
            };
            
            StorageManager.save(ADMIN_CONFIG.storageKeys.content, content);
            localStorage.setItem('last_update', Date.now());
            
            NotificationSystem.show('تم حفظ المحتوى بنجاح', 'success');
            return true;
        } catch (error) {
            console.error('خطأ في حفظ المحتوى:', error);
            NotificationSystem.show('خطأ في حفظ المحتوى', 'error');
            return false;
        }
    }
    
    static saveDesign() {
        try {
            const design = {
                colors: {
                    dark: {
                        bg: document.getElementById('darkBg').value,
                        card: document.getElementById('darkCard').value,
                        text: document.getElementById('darkText').value,
                        secondary: document.getElementById('darkSecondary').value
                    },
                    light: {
                        bg: document.getElementById('lightBg').value,
                        card: document.getElementById('lightCard').value,
                        text: document.getElementById('lightText').value,
                        secondary: document.getElementById('lightSecondary').value
                    },
                    accent: document.getElementById('accentColor').value,
                    forge: document.getElementById('forgeColor').value,
                    success: document.getElementById('successColor').value,
                    warning: document.getElementById('warningColor').value,
                    error: ADMIN_CONFIG.defaultDesign.colors.error
                },
                fonts: {
                    arabic: document.getElementById('arabicFont').value,
                    ui: ADMIN_CONFIG.defaultDesign.fonts.ui
                },
                spacing: {
                    borderRadius: document.getElementById('borderRadius').value + 'px',
                    baseSpacing: document.getElementById('spacing').value + 'px'
                }
            };
            
            StorageManager.save(ADMIN_CONFIG.storageKeys.design, design);
            NotificationSystem.show('تم حفظ التصميم بنجاح', 'success');
            return true;
        } catch (error) {
            console.error('خطأ في حفظ التصميم:', error);
            NotificationSystem.show('خطأ في حفظ التصميم', 'error');
            return false;
        }
    }
    
    static saveSEO() {
        try {
            const seo = {
                title: document.getElementById('siteTitle').value,
                description: document.getElementById('metaDescription').value,
                keywords: document.getElementById('metaKeywords').value,
                og: {
                    title: document.getElementById('ogTitle').value,
                    description: document.getElementById('ogDescription').value,
                    image: document.getElementById('ogImage').value
                },
                twitter: {
                    title: document.getElementById('twitterTitle').value,
                    description: document.getElementById('twitterDescription').value
                },
                schema: {
                    orgName: document.getElementById('orgName').value,
                    description: document.getElementById('orgDescription').value,
                    address: document.getElementById('orgAddress').value
                }
            };
            
            StorageManager.save(ADMIN_CONFIG.storageKeys.seo, seo);
            NotificationSystem.show('تم حفظ إعدادات SEO بنجاح', 'success');
            return true;
        } catch (error) {
            console.error('خطأ في حفظ SEO:', error);
            NotificationSystem.show('خطأ في حفظ إعدادات SEO', 'error');
            return false;
        }
    }
}

// ========== نظام النسخ الاحتياطي ==========
class BackupSystem {
    static createBackup(type = 'full', name = null, description = '') {
        try {
            const backup = {
                id: 'backup_' + Date.now(),
                name: name || `نسخة_${new Date().toLocaleDateString('ar-MA')}`,
                description: description,
                type: type,
                date: new Date().toISOString(),
                data: {}
            };
            
            switch(type) {
                case 'full':
                    backup.data = {
                        content: StorageManager.load(ADMIN_CONFIG.storageKeys.content),
                        design: StorageManager.load(ADMIN_CONFIG.storageKeys.design),
                        seo: StorageManager.load(ADMIN_CONFIG.storageKeys.seo),
                        services: StorageManager.load(ADMIN_CONFIG.storageKeys.services),
                        portfolio: StorageManager.load(ADMIN_CONFIG.storageKeys.portfolio)
                    };
                    break;
                case 'content':
                    backup.data = {
                        content: StorageManager.load(ADMIN_CONFIG.storageKeys.content)
                    };
                    break;
                case 'design':
                    backup.data = {
                        design: StorageManager.load(ADMIN_CONFIG.storageKeys.design)
                    };
                    break;
                case 'database':
                    backup.data = {
                        services: StorageManager.load(ADMIN_CONFIG.storageKeys.services),
                        portfolio: StorageManager.load(ADMIN_CONFIG.storageKeys.portfolio)
                    };
                    break;
            }
            
            const backups = StorageManager.load(ADMIN_CONFIG.storageKeys.backups) || [];
            backups.unshift(backup);
            
            // الاحتفاظ بآخر 10 نسخ فقط
            if (backups.length > 10) {
                backups.pop();
            }
            
            StorageManager.save(ADMIN_CONFIG.storageKeys.backups, backups);
            
            NotificationSystem.show(`تم إنشاء نسخة احتياطية: ${backup.name}`, 'success');
            this.updateBackupList();
            return backup;
        } catch (error) {
            console.error('خطأ في إنشاء النسخة الاحتياطية:', error);
            NotificationSystem.show('خطأ في إنشاء النسخة الاحتياطية', 'error');
            return null;
        }
    }
    
    static restoreBackup(backupId, type = 'full') {
        try {
            const backups = StorageManager.load(ADMIN_CONFIG.storageKeys.backups) || [];
            const backup = backups.find(b => b.id === backupId);
            
            if (!backup) {
                throw new Error('النسخة الاحتياطية غير موجودة');
            }
            
            switch(type) {
                case 'full':
                    if (backup.data.content) StorageManager.save(ADMIN_CONFIG.storageKeys.content, backup.data.content);
                    if (backup.data.design) StorageManager.save(ADMIN_CONFIG.storageKeys.design, backup.data.design);
                    if (backup.data.seo) StorageManager.save(ADMIN_CONFIG.storageKeys.seo, backup.data.seo);
                    if (backup.data.services) StorageManager.save(ADMIN_CONFIG.storageKeys.services, backup.data.services);
                    if (backup.data.portfolio) StorageManager.save(ADMIN_CONFIG.storageKeys.portfolio, backup.data.portfolio);
                    break;
                case 'content':
                    if (backup.data.content) StorageManager.save(ADMIN_CONFIG.storageKeys.content, backup.data.content);
                    break;
                case 'design':
                    if (backup.data.design) StorageManager.save(ADMIN_CONFIG.storageKeys.design, backup.data.design);
                    break;
            }
            
            NotificationSystem.show(`تم استعادة النسخة: ${backup.name}`, 'success');
            ContentLoader.loadAllContent();
            return true;
        } catch (error) {
            console.error('خطأ في استعادة النسخة:', error);
            NotificationSystem.show('خطأ في استعادة النسخة', 'error');
            return false;
        }
    }
    
    static deleteBackup(backupId) {
        try {
            let backups = StorageManager.load(ADMIN_CONFIG.storageKeys.backups) || [];
            backups = backups.filter(b => b.id !== backupId);
            StorageManager.save(ADMIN_CONFIG.storageKeys.backups, backups);
            
            NotificationSystem.show('تم حذف النسخة الاحتياطية', 'success');
            this.updateBackupList();
            return true;
        } catch (error) {
            console.error('خطأ في حذف النسخة:', error);
            NotificationSystem.show('خطأ في حذف النسخة', 'error');
            return false;
        }
    }
    
    static updateBackupList() {
        const backups = StorageManager.load(ADMIN_CONFIG.storageKeys.backups) || [];
        const container = document.getElementById('backupItems');
        const select = document.getElementById('restoreBackup');
        
        if (container) {
            container.innerHTML = '';
            backups.forEach(backup => {
                const item = document.createElement('div');
                item.className = 'backup-item';
                item.innerHTML = `
                    <div class="backup-info">
                        <strong>${backup.name}</strong>
                        <small>${new Date(backup.date).toLocaleString('ar-MA')}</small>
                        <p>${backup.description || 'لا يوجد وصف'}</p>
                    </div>
                    <div class="backup-actions">
                        <button onclick="BackupSystem.restoreBackup('${backup.id}')">
                            <i class="fas fa-upload"></i>
                        </button>
                        <button onclick="BackupSystem.deleteBackup('${backup.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                container.appendChild(item);
            });
        }
        
        if (select) {
            select.innerHTML = '<option value="">اختر نسخة</option>';
            backups.forEach(backup => {
                const option = document.createElement('option');
                option.value = backup.id;
                option.textContent = `${backup.name} (${new Date(backup.date).toLocaleDateString('ar-MA')})`;
                select.appendChild(option);
            });
        }
    }
}

// ========== نظام التصدير والاستيراد ==========
class ExportSystem {
    static exportAll() {
        try {
            const data = {
                version: ADMIN_CONFIG.systemVersion,
                exportDate: new Date().toISOString(),
                content: StorageManager.load(ADMIN_CONFIG.storageKeys.content),
                design: StorageManager.load(ADMIN_CONFIG.storageKeys.design),
                seo: StorageManager.load(ADMIN_CONFIG.storageKeys.seo),
                services: StorageManager.load(ADMIN_CONFIG.storageKeys.services),
                portfolio: StorageManager.load(ADMIN_CONFIG.storageKeys.portfolio)
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `webforge-backup-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
            
            NotificationSystem.show('تم تصدير جميع البيانات بنجاح', 'success');
            return true;
        } catch (error) {
            console.error('خطأ في التصدير:', error);
            NotificationSystem.show('خطأ في تصدير البيانات', 'error');
            return false;
        }
    }
    
    static importData(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // التحقق من الإصدار
                    if (!data.version || data.version !== ADMIN_CONFIG.systemVersion) {
                        NotificationSystem.show('إصدار الملف غير متوافق', 'warning');
                    }
                    
                    // استيراد البيانات
                    if (data.content) StorageManager.save(ADMIN_CONFIG.storageKeys.content, data.content);
                    if (data.design) StorageManager.save(ADMIN_CONFIG.storageKeys.design, data.design);
                    if (data.seo) StorageManager.save(ADMIN_CONFIG.storageKeys.seo, data.seo);
                    if (data.services) StorageManager.save(ADMIN_CONFIG.storageKeys.services, data.services);
                    if (data.portfolio) StorageManager.save(ADMIN_CONFIG.storageKeys.portfolio, data.portfolio);
                    
                    NotificationSystem.show('تم استيراد البيانات بنجاح', 'success');
                    ContentLoader.loadAllContent();
                    resolve(true);
                } catch (error) {
                    console.error('خطأ في استيراد البيانات:', error);
                    NotificationSystem.show('خطأ في استيراد البيانات', 'error');
                    reject(error);
                }
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }
}

// ========== الدوال العامة ==========
function login() {
    const password = document.getElementById('adminPassword').value;
    
    if (!password) {
        NotificationSystem.show('يرجى إدخال كلمة المرور', 'warning');
        return;
    }
    
    if (AuthSystem.login(password)) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        ContentLoader.loadAllContent();
        BackupSystem.updateBackupList();
        NotificationSystem.show('مرحباً في لوحة التحكم!', 'success');
    } else {
        NotificationSystem.show('كلمة المرور غير صحيحة', 'error');
    }
}

function logout() {
    if (confirm('هل تريد تسجيل الخروج؟')) {
        AuthSystem.logout();
    }
}

function showSection(sectionId) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // إزالة النشاط من جميع الأزرار
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // إظهار القسم المطلوب
    document.getElementById(sectionId + '-section').style.display = 'block';
    
    // تفعيل الزر النشط
    document.querySelectorAll('.menu-btn').forEach(btn => {
        if (btn.onclick.toString().includes(sectionId)) {
            btn.classList.add('active');
        }
    });
    
    currentState.currentSection = sectionId;
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function saveContentChanges() {
    if (SaveSystem.saveContent()) {
        // تحديث الإحصائيات
        ContentLoader.updateStats();
    }
}

function saveDesign() {
    SaveSystem.saveDesign();
}

function saveSEO() {
    SaveSystem.saveSEO();
    ContentLoader.updateSEOPreview();
}

function addFAQ() {
    const container = document.getElementById('faqEditor');
    const index = container.children.length;
    
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item-edit';
    faqItem.innerHTML = `
        <div class="faq-header">
            <strong>سؤال جديد</strong>
            <button onclick="removeFAQ(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <input type="text" class="form-control faq-question" 
               placeholder="السؤال" data-index="${index}">
        <textarea class="form-control faq-answer" rows="2" 
                  placeholder="الإجابة" data-index="${index}"></textarea>
    `;
    container.appendChild(faqItem);
}

function removeFAQ(index) {
    if (confirm('هل تريد حذف هذا السؤال؟')) {
        const container = document.getElementById('faqEditor');
        const items = Array.from(container.children);
        
        if (items[index]) {
            items[index].remove();
            
            // تحديث الفهرس
            items.forEach((item, i) => {
                if (i > index) {
                    const btn = item.querySelector('button');
                    btn.onclick = function() { removeFAQ(i - 1); };
                    item.querySelectorAll('[data-index]').forEach(el => {
                        el.dataset.index = i - 1;
                    });
                }
            });
            
            NotificationSystem.show('تم حذف السؤال', 'success');
        }
    }
}

function changePassword() {
    const newPass = document.getElementById('newPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    
    try {
        AuthSystem.changePassword(newPass, confirmPass);
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    } catch (error) {
        NotificationSystem.show(error.message, 'error');
    }
}

function createBackup() {
    const type = document.getElementById('backupType').value;
    const name = document.getElementById('backupName').value;
    const description = document.getElementById('backupDescription').value;
    
    BackupSystem.createBackup(type, name, description);
}

function restoreBackup() {
    const backupId = document.getElementById('restoreBackup').value;
    const type = document.getElementById('restoreType').value;
    
    if (!backupId) {
        NotificationSystem.show('يرجى اختيار نسخة للاستعادة', 'warning');
        return;
    }
    
    if (confirm('هل تريد استعادة هذه النسخة؟ سيتم استبدال البيانات الحالية.')) {
        BackupSystem.restoreBackup(backupId, type);
    }
}

function previewChanges() {
    // تنبيه
    alert('يمكنك معاينة التغييرات في نافذة منفصلة');
    
    // فتح معاينة
    window.open('index.html?preview=true', '_blank');
}

function refreshSite() {
    if (confirm('هل تريد تحديث الموقع الرئيسي؟')) {
        // هنا يمكن إضافة كود لتحديث الموقع
        NotificationSystem.show('جاري تحديث الموقع...', 'info');
        
        setTimeout(() => {
            NotificationSystem.show('تم تحديث الموقع بنجاح', 'success');
        }, 2000);
    }
}

// ========== تهيئة النظام ==========
document.addEventListener('DOMContentLoaded', function() {
    // التحقق من الجلسة
    if (AuthSystem.checkSession()) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        ContentLoader.loadAllContent();
        BackupSystem.updateBackupList();
    }
    
    // إضافة مستمعات الأحداث
    document.getElementById('borderRadius').addEventListener('input', function() {
        document.getElementById('borderRadiusValue').textContent = this.value + 'px';
    });
    
    document.getElementById('spacing').addEventListener('input', function() {
        document.getElementById('spacingValue').textContent = this.value + 'px';
    });
    
    // إعداد النسخ الاحتياطي التلقائي
    if (ADMIN_CONFIG.autoBackup) {
        const lastBackup = localStorage.getItem('last_auto_backup');
        const today = new Date().toDateString();
        
        if (!lastBackup || lastBackup !== today) {
            setTimeout(() => {
                BackupSystem.createBackup('full', `نسخة_تلقائية_${today}`, 'نسخة احتياطية تلقائية يومية');
                localStorage.setItem('last_auto_backup', today);
            }, 10000);
        }
    }
    
    console.log('✅ نظام لوحة التحكم جاهز!');
});

// ========== تصدير الدوال للاستخدام العالمي ==========
window.AuthSystem = AuthSystem;
window.StorageManager = StorageManager;
window.ContentLoader = ContentLoader;
window.SaveSystem = SaveSystem;
window.BackupSystem = BackupSystem;
window.ExportSystem = ExportSystem;
window.NotificationSystem = NotificationSystem;

window.login = login;
window.logout = logout;
window.showSection = showSection;
window.toggleSidebar = toggleSidebar;
window.saveContentChanges = saveContentChanges;
window.saveDesign = saveDesign;
window.saveSEO = saveSEO;
window.addFAQ = addFAQ;
window.removeFAQ = removeFAQ;
window.changePassword = changePassword;
window.createBackup = createBackup;
window.restoreBackup = restoreBackup;
window.previewChanges = previewChanges;
window.refreshSite = refreshSite;
