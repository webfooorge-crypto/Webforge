// ========== إعدادات Web Forge المشتركة ==========

const WebForgeConfig = {
    // إصدار النظام
    version: '2.0.0',
    
    // عناصر الموقع القابلة للتعديل
    editableElements: {
        'hero-text': {
            selector: '.hero p[data-translate="heroText2"]',
            name: 'نص الترحيب الرئيسي',
            type: 'textarea'
        },
        'promo-text': {
            selector: '.promo-content',
            name: 'العرض الترويجي العلوي',
            type: 'text'
        },
        'why-text': {
            selector: '.why-us p[data-translate="whyDesc"]',
            name: 'نص قسم "لماذا تختارنا"',
            type: 'textarea'
        },
        'why-title': {
            selector: '.why-us h2[data-translate="whyTitle"]',
            name: 'عنوان قسم "لماذا تختارنا"',
            type: 'text'
        },
        'services-title': {
            selector: '.services h2[data-translate="servicesTitle"]',
            name: 'عنوان قسم الخدمات',
            type: 'text'
        },
        'services-desc': {
            selector: '.services p[data-translate="servicesDesc"]',
            name: 'وصف قسم الخدمات',
            type: 'textarea'
        },
        'youcan-title': {
            selector: '.services-grid .service-card:nth-child(1) h3',
            name: 'عنوان خدمة YouCan',
            type: 'text'
        },
        'youcan-desc': {
            selector: '.services-grid .service-card:nth-child(1) p',
            name: 'وصف خدمة YouCan',
            type: 'textarea'
        },
        'shopify-title': {
            selector: '.services-grid .service-card:nth-child(2) h3',
            name: 'عنوان خدمة Shopify',
            type: 'text'
        },
        'shopify-desc': {
            selector: '.services-grid .service-card:nth-child(2) p',
            name: 'وصف خدمة Shopify',
            type: 'textarea'
        },
        'websites-title': {
            selector: '.services-grid .service-card:nth-child(3) h3',
            name: 'عنوان خدمة المواقع',
            type: 'text'
        },
        'websites-desc': {
            selector: '.services-grid .service-card:nth-child(3) p',
            name: 'وصف خدمة المواقع',
            type: 'textarea'
        },
        'stats-projects': {
            selector: '.stats-bar .stat-item:nth-child(1) h2',
            name: 'عدد المشاريع المنفذة',
            type: 'number'
        },
        'stats-satisfaction': {
            selector: '.stats-bar .stat-item:nth-child(2) h2',
            name: 'نسبة رضا العملاء',
            type: 'number'
        }
    },
    
    // إعدادات النظام
    settings: {
        autoSave: true,
        autoSaveInterval: 30000, // 30 ثانية
        maxBackups: 10,
        enableNotifications: true
    },
    
    // تسجيل الأخطاء
    logError: function(error, context) {
        console.error(`[WebForge Error] ${context}:`, error);
        
        // حفظ في localStorage للتحليل لاحقاً
        const errors = JSON.parse(localStorage.getItem('webforge_errors') || '[]');
        errors.push({
            error: error.message,
            context,
            timestamp: new Date().toISOString(),
            url: window.location.href
        });
        
        if (errors.length > 50) {
            errors.shift();
        }
        
        localStorage.setItem('webforge_errors', JSON.stringify(errors));
    },
    
    // التحقق من صحة التحديثات
    validateUpdate: function(updates) {
        const validUpdates = {};
        
        Object.keys(updates).forEach(key => {
            if (this.editableElements[key]) {
                // التحقق من الطول (حسب النوع)
                const value = updates[key];
                const elementConfig = this.editableElements[key];
                
                if (elementConfig.type === 'number') {
                    // تحقق من أن القيمة رقمية
                    if (!isNaN(value)) {
                        validUpdates[key] = value;
                    }
                } else {
                    // تحقق من الطول
                    if (value && value.length > 0 && value.length < 1000) {
                        validUpdates[key] = value;
                    }
                }
            }
        });
        
        return validUpdates;
    },
    
    // الحصول على إحصائيات النظام
    getStats: function() {
        const updates = JSON.parse(localStorage.getItem('webforge_updates') || '{}');
        const backups = JSON.parse(localStorage.getItem('webforge_backups') || '[]');
        const activities = JSON.parse(localStorage.getItem('webforge_activities') || '[]');
        
        return {
            totalUpdates: Object.keys(updates).length,
            totalBackups: backups.length,
            totalActivities: activities.length,
            lastUpdate: localStorage.getItem('webforge_last_update'),
            version: this.version
        };
    }
};

// جعل الكائن متاحاً عالمياً
window.WebForgeConfig = WebForgeConfig;

// تهيئة النظام
(function initWebForge() {
    console.log(`🚀 Web Forge CMS v${WebForgeConfig.version} initialized`);
    
    // التحقق من التحديثات
    if (typeof window.WebForge !== 'undefined') {
        console.log('✅ نظام ربط الموقع جاهز');
    }
})();
