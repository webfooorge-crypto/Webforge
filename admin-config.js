// ========== نظام تحديث الموقع الحي ==========
class LiveUpdateSystem {
    static saveAndUpdate(key, data) {
        try {
            // حفظ في localStorage الخاص باللوحة
            StorageManager.save(key, data);
            
            // إعداد التحديثات للموقع الرئيسي
            this.prepareSiteUpdates(key, data);
            
            // إرسال التحديثات للموقع
            this.sendUpdatesToSite();
            
            return true;
        } catch (error) {
            console.error('خطأ في حفظ وتحديث البيانات:', error);
            return false;
        }
    }
    
    static prepareSiteUpdates(key, data) {
        const siteUpdates = StorageManager.load('webforge_updates') || {};
        
        switch(key) {
            case ADMIN_CONFIG.storageKeys.content:
                // تحديث محتوى الموقع
                this.updateContentForSite(siteUpdates, data);
                break;
                
            case ADMIN_CONFIG.storageKeys.design:
                // تحديث تصميم الموقع
                this.updateDesignForSite(siteUpdates, data);
                break;
                
            case ADMIN_CONFIG.storageKeys.seo:
                // تحديث SEO
                this.updateSEOForSite(siteUpdates, data);
                break;
        }
        
        // حفظ التحديثات
        StorageManager.save('webforge_updates', siteUpdates);
        
        // تحديث وقت آخر تعديل
        localStorage.setItem('last_dashboard_update', new Date().toISOString());
    }
    
    static updateContentForSite(updates, contentData) {
        // Hero Section
        updates['hero-text1'] = contentData.hero.text1;
        updates['hero-text2'] = contentData.hero.text2;
        
        // Typewriter
        updates['typewriter-texts'] = contentData.typewriter;
        
        // Why Us
        updates['why-title'] = contentData.whyUs.title;
        updates['why-desc'] = contentData.whyUs.desc;
        updates['speed-title'] = contentData.whyUs.cards[0].title;
        updates['speed-desc'] = contentData.whyUs.cards[0].desc;
        updates['responsive-title'] = contentData.whyUs.cards[1].title;
        updates['responsive-desc'] = contentData.whyUs.cards[1].desc;
        updates['support-title'] = contentData.whyUs.cards[2].title;
        updates['support-desc'] = contentData.whyUs.cards[2].desc;
        updates['design-title'] = contentData.whyUs.cards[3].title;
        updates['design-desc'] = contentData.whyUs.cards[3].desc;
        
        // Services
        updates['services-title'] = contentData.services.title;
        updates['services-desc'] = contentData.services.desc;
        updates['youcan-title'] = contentData.services.items[0].title;
        updates['youcan-desc'] = contentData.services.items[0].desc;
        updates['youcan-btn'] = contentData.services.items[0].btn;
        updates['shopify-title'] = contentData.services.items[1].title;
        updates['shopify-desc'] = contentData.services.items[1].desc;
        updates['shopify-btn'] = contentData.services.items[1].btn;
        updates['websites-title'] = contentData.services.items[2].title;
        updates['websites-desc'] = contentData.services.items[2].desc;
        updates['websites-btn'] = contentData.services.items[2].btn;
        
        // Stats
        updates['stats-projects'] = contentData.stats.projects;
        updates['stats-satisfaction'] = contentData.stats.satisfaction;
        updates['stats-support'] = contentData.stats.support;
        
        // FAQ
        updates['faq-items'] = contentData.faq;
        
        // Footer
        updates['copyright'] = contentData.footer.copyright;
    }
    
    static updateDesignForSite(updates, designData) {
        // سنضيف هذا لاحقاً لتحديث التصميم مباشرة
        console.log('تصميم الموقع يحتاج إلى إعادة تحميل الصفحة');
    }
    
    static updateSEOForSite(updates, seoData) {
        // تحديث meta tags ديناميكياً
        this.updateMetaTags(seoData);
    }
    
    static updateMetaTags(seoData) {
        try {
            // تحديث title
            document.title = seoData.title;
            
            // تحديث meta description
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = 'description';
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = seoData.description;
            
            // تحديث keywords
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.name = 'keywords';
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.content = seoData.keywords;
            
            // تحديث Open Graph
            this.updateOpenGraph(seoData.og);
            
            // تحديث Twitter Cards
            this.updateTwitterCards(seoData.twitter);
            
        } catch (error) {
            console.error('خطأ في تحديث meta tags:', error);
        }
    }
    
    static updateOpenGraph(ogData) {
        const properties = ['title', 'description', 'image'];
        properties.forEach(prop => {
            let meta = document.querySelector(`meta[property="og:${prop}"]`);
            if (meta && ogData[prop]) {
                meta.content = ogData[prop];
            }
        });
    }
    
    static updateTwitterCards(twitterData) {
        const properties = ['title', 'description', 'image'];
        properties.forEach(prop => {
            let meta = document.querySelector(`meta[name="twitter:${prop}"]`);
            if (meta && twitterData[prop]) {
                meta.content = twitterData[prop];
            }
        });
    }
    
    static sendUpdatesToSite() {
        try {
            // إرسال حدث storage لتحديث الموقع
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'last_dashboard_update',
                newValue: new Date().toISOString()
            }));
            
            // إذا كان الموقع مفتوحاً في نافذة أخرى
            if (window.opener && !window.opener.closed) {
                try {
                    window.opener.postMessage({
                        type: 'WEBFORGE_UPDATE',
                        data: { timestamp: Date.now() }
                    }, '*');
                } catch (e) {}
            }
            
            NotificationSystem.show('✅ تم إرسال التحديثات للموقع بنجاح', 'success');
            
        } catch (error) {
            console.error('خطأ في إرسال التحديثات:', error);
        }
    }
    
    static forceSiteReload() {
        // إرسال طلب إعادة تحميل للموقع
        localStorage.setItem('force_site_reload', Date.now().toString());
        this.sendUpdatesToSite();
    }
}

// ========== تحديث دوال الحفظ لاستخدام النظام الجديد ==========

// تعديل دالة saveContentChanges
function saveContentChanges() {
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
        
        // استخدام النظام الجديد للحفظ والتحديث
        if (LiveUpdateSystem.saveAndUpdate(ADMIN_CONFIG.storageKeys.content, content)) {
            NotificationSystem.show('✅ تم حفظ وتحديث الموقع بنجاح', 'success');
            
            // تحديث الإحصائيات في اللوحة
            updateDashboardStats();
            
            // فتح معاينة الموقع
            setTimeout(() => {
                if (confirm('هل تريد معاينة التغييرات في الموقع؟')) {
                    window.open('../index.html?preview=true', '_blank');
                }
            }, 1000);
            
            return true;
        }
        
        return false;
        
    } catch (error) {
        console.error('خطأ في حفظ المحتوى:', error);
        NotificationSystem.show('❌ خطأ في حفظ المحتوى', 'error');
        return false;
    }
}

// تعديل دالة saveDesign
function saveDesign() {
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
        
        if (LiveUpdateSystem.saveAndUpdate(ADMIN_CONFIG.storageKeys.design, design)) {
            NotificationSystem.show('✅ تم حفظ التصميم بنجاح', 'success');
            
            // إشعار بأن التصميم يحتاج إعادة تحميل
            NotificationSystem.show('ملاحظة: بعض تغييرات التصميم تحتاج إعادة تحميل الصفحة', 'info');
            
            return true;
        }
        
        return false;
        
    } catch (error) {
        console.error('خطأ في حفظ التصميم:', error);
        NotificationSystem.show('❌ خطأ في حفظ التصميم', 'error');
        return false;
    }
}

// تعديل دالة saveSEO
function saveSEO() {
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
        
        if (LiveUpdateSystem.saveAndUpdate(ADMIN_CONFIG.storageKeys.seo, seo)) {
            NotificationSystem.show('✅ تم حفظ SEO وتحديث الموقع بنجاح', 'success');
            return true;
        }
        
        return false;
        
    } catch (error) {
        console.error('خطأ في حفظ SEO:', error);
        NotificationSystem.show('❌ خطأ في حفظ SEO', 'error');
        return false;
    }
}

// ========== إضافة زر تحديث الموقع يدوياً ==========
function addLiveUpdateButton() {
    const headerRight = document.querySelector('.header-right');
    if (!headerRight) return;
    
    const updateBtn = document.createElement('button');
    updateBtn.className = 'btn-update-site';
    updateBtn.innerHTML = '<i class="fas fa-broadcast-tower"></i> تحديث الموقع';
    updateBtn.onclick = function() {
        if (confirm('هل تريد إرسال جميع التحديثات إلى الموقع الآن؟')) {
            LiveUpdateSystem.forceSiteReload();
        }
    };
    
    // إضافة الأنماط
    const style = document.createElement('style');
    style.textContent = `
        .btn-update-site {
            padding: 8px 16px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
        }
        
        .btn-update-site:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }
        
        .btn-update-site:active {
            animation: pulse 0.5s;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    headerRight.insertBefore(updateBtn, headerRight.firstChild);
}

// ========== تحديث تهيئة النظام ==========
document.addEventListener('DOMContentLoaded', function() {
    // ... الكود السابق ...
    
    // إضافة زر تحديث الموقع
    addLiveUpdateButton();
    
    // اختبار الاتصال مع الموقع
    testSiteConnection();
});

// ========== اختبار الاتصال مع الموقع ==========
function testSiteConnection() {
    setTimeout(() => {
        const siteUpdates = StorageManager.load('webforge_updates');
        if (siteUpdates) {
            console.log('✅ الموقع متصل وجاهز للتحديثات');
            NotificationSystem.show('✅ الموقع الرئيسي متصل', 'success');
        } else {
            console.log('⚠️ لا توجد تحديثات سابقة للموقع');
        }
    }, 1000);
}

// ========== تصدير النظام للاستخدام العالمي ==========
window.LiveUpdateSystem = LiveUpdateSystem;
window.saveContentChanges = saveContentChanges;
window.saveDesign = saveDesign;
window.saveSEO = saveSEO;
