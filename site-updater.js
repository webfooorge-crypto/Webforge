// ضع هذا الكود في نهاية index.html قبل </body>
(function() {
    'use strict';
    
    console.log('🚀 نظام تحديث Web Forge - جاهز للتشغيل');
    
    // دالة التحديث الرئيسية
    function updateSiteContent() {
        try {
            console.log('🔄 جاري تحديث المحتوى...');
            
            // 1. البحث عن بيانات التحديث
            const updateData = localStorage.getItem('webforge_live_update');
            if (!updateData) {
                console.log('📭 لا توجد بيانات تحديث');
                return;
            }
            
            const parsedData = JSON.parse(updateData);
            const siteData = parsedData.data;
            
            console.log('✅ بيانات التحديث:', siteData);
            
            // 2. تحديث القسم الرئيسي (Hero)
            if (siteData.hero) {
                // البحث عن العناصر المختلفة
                const heroElements = {
                    // محاولة العثور على العنوان
                    title: document.querySelector('[data-translate="heroText1"]') || 
                           document.querySelector('.hero h1') ||
                           document.querySelector('h1'),
                    
                    // البحث عن الوصف
                    description: document.querySelector('[data-translate="heroText2"]') || 
                                 document.querySelector('.hero p') ||
                                 document.querySelector('.hero-description'),
                    
                    // الأزرار
                    primaryBtn: document.querySelector('[data-translate="primaryBtn"]') || 
                                document.querySelector('.btn-primary'),
                    
                    secondaryBtn: document.querySelector('[data-translate="secondaryBtn"]') || 
                                  document.querySelector('.btn-secondary')
                };
                
                // تحديث العنوان
                if (heroElements.title && siteData.hero.title) {
                    heroElements.title.textContent = siteData.hero.title;
                    console.log('✅ تم تحديث العنوان:', siteData.hero.title);
                }
                
                // تحديث الوصف
                if (heroElements.description && siteData.hero.description) {
                    heroElements.description.textContent = siteData.hero.description;
                    console.log('✅ تم تحديث الوصف');
                }
                
                // تحديث الأزرار
                if (heroElements.primaryBtn && siteData.hero.btn1) {
                    heroElements.primaryBtn.textContent = siteData.hero.btn1;
                }
                
                if (heroElements.secondaryBtn && siteData.hero.btn2) {
                    heroElements.secondaryBtn.textContent = siteData.hero.btn2;
                }
            }
            
            // 3. تحديث الإحصائيات
            if (siteData.stats) {
                // البحث عن العدادات
                const counters = document.querySelectorAll('.counter[data-target], .stat-item h2, .stats-bar h2');
                
                counters.forEach(counter => {
                    const text = counter.textContent || '';
                    
                    if (text.includes('مشروع') || counter.getAttribute('data-translate') === 'statsProjects') {
                        counter.textContent = siteData.stats.projects || 50;
                        if (counter.hasAttribute('data-target')) {
                            counter.setAttribute('data-target', siteData.stats.projects || 50);
                        }
                        console.log('✅ تم تحديث عدد المشاريع:', siteData.stats.projects);
                    }
                    
                    if (text.includes('رضا') || counter.getAttribute('data-translate') === 'statsSatisfaction') {
                        counter.textContent = (siteData.stats.satisfaction || 100) + (text.includes('%') ? '%' : '');
                        if (counter.hasAttribute('data-target')) {
                            counter.setAttribute('data-target', siteData.stats.satisfaction || 100);
                        }
                    }
                });
                
                // تحديث نص الدعم الفني
                const supportText = document.querySelector('[data-translate="statsSupport"]');
                if (supportText && siteData.stats.support) {
                    supportText.textContent = siteData.stats.support;
                }
            }
            
            // 4. تحديث الخدمات
            if (siteData.services && siteData.services.length > 0) {
                // البحث عن بطاقات الخدمات
                const serviceCards = document.querySelectorAll('.service-card, .services-grid > div, [data-service]');
                
                siteData.services.forEach((service, index) => {
                    if (serviceCards[index]) {
                        // العنوان
                        const title = serviceCards[index].querySelector('h3, h4, .service-title');
                        if (title && service.title) {
                            title.textContent = service.title;
                        }
                        
                        // الوصف
                        const description = serviceCards[index].querySelector('p, .service-desc, .arabic-text');
                        if (description && service.description) {
                            description.textContent = service.description;
                        }
                    }
                });
                
                console.log('✅ تم تحديث الخدمات');
            }
            
            // 5. تحديث العرض الترويجي
            if (siteData.promo && siteData.promo.text) {
                // البحث عن شريط العرض الترويجي
                const promoElements = [
                    document.querySelector('[data-translate="promoText"]'),
                    document.querySelector('.promo-bar'),
                    document.querySelector('.promo-content'),
                    document.querySelector('.announcement')
                ];
                
                for (let element of promoElements) {
                    if (element) {
                        element.textContent = siteData.promo.text;
                        console.log('✅ تم تحديث العرض الترويجي');
                        break;
                    }
                }
            }
            
            // 6. عرض إشعار النجاح
            showSuccessNotification('تم تحديث المحتوى بنجاح!');
            
            // 7. تسجيل التحديث
            localStorage.setItem('last_webforge_update', Date.now());
            
        } catch (error) {
            console.error('❌ خطأ في تحديث المحتوى:', error);
            showErrorNotification('حدث خطأ أثناء التحديث');
        }
    }
    
    // دالة عرض إشعار النجاح
    function showSuccessNotification(message) {
        // إزالة أي إشعارات سابقة
        const oldNotice = document.getElementById('webforge-update-notice');
        if (oldNotice) oldNotice.remove();
        
        const notice = document.createElement('div');
        notice.id = 'webforge-update-notice';
        notice.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: linear-gradient(90deg, #10b981, #059669);
            color: #000;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
            animation: slideInLeft 0.3s ease;
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: 'Tajawal', sans-serif;
            max-width: 400px;
        `;
        
        notice.innerHTML = `
            <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" 
                    style="background: none; border: none; color: #000; cursor: pointer; margin-right: auto; font-size: 1.2rem;">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notice);
        
        // إخفاء تلقائي بعد 5 ثواني
        setTimeout(() => {
            if (notice.parentNode) {
                notice.style.opacity = '0';
                setTimeout(() => notice.remove(), 300);
            }
        }, 5000);
    }
    
    // دالة عرض إشعار الخطأ
    function showErrorNotification(message) {
        const errorNotice = document.createElement('div');
        errorNotice.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(90deg, #ef4444, #dc2626);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
            animation: slideInRight 0.3s ease;
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: 'Tajawal', sans-serif;
            max-width: 400px;
        `;
        
        errorNotice.innerHTML = `
            <i class="fas fa-exclamation-circle" style="font-size: 1.2rem;"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" 
                    style="background: none; border: none; color: white; cursor: pointer; margin-right: auto; font-size: 1.2rem;">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(errorNotice);
        
        setTimeout(() => {
            if (errorNotice.parentNode) {
                errorNotice.style.opacity = '0';
                setTimeout(() => errorNotice.remove(), 300);
            }
        }, 5000);
    }
    
    // ========== استقبال التحديثات ==========
    
    // 1. الاستماع لتحديثات localStorage
    window.addEventListener('storage', function(event) {
        if (event.key === 'webforge_live_update' || 
            event.key === 'webforge_site_data') {
            console.log('📡 استقبال تحديث من الإدارة...');
            updateSiteContent();
        }
    });
    
    // 2. الاستماع للرسائل المباشرة
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'WEBFORGE_LIVE_UPDATE') {
            console.log('📡 استقبال تحديث مباشر...');
            localStorage.setItem('webforge_live_update', JSON.stringify({
                data: event.data.data,
                timestamp: Date.now()
            }));
            updateSiteContent();
        }
    });
    
    // 3. زر التحديث اليدوي (للمالك فقط)
    if (window.location.hash === '#owner' || window.location.hash === '#admin') {
        // إضافة زر التحديث
        const updateBtn = document.createElement('button');
        updateBtn.id = 'manual-update-btn';
        updateBtn.innerHTML = '<i class="fas fa-sync-alt"></i> تحديث المحتوى';
        updateBtn.style.cssText = `
            position: fixed;
            bottom: 80px;
            left: 20px;
            background: linear-gradient(90deg, #38bdf8, #0ea5e9);
            color: #000;
            border: none;
            padding: 12px 20px;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
            font-family: 'Tajawal', sans-serif;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
        
        updateBtn.onclick = function() {
            updateSiteContent();
        };
        
        document.body.appendChild(updateBtn);
        
        // إضافة زر لوحة التحكم
        const adminBtn = document.createElement('a');
        adminBtn.href = 'admin.php';
        adminBtn.target = '_blank';
        adminBtn.innerHTML = '<i class="fas fa-crown"></i> لوحة التحكم';
        adminBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: linear-gradient(90deg, #f59e0b, #d97706);
            color: #000;
            padding: 12px 25px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
            font-family: 'Tajawal', sans-serif;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        
        document.body.appendChild(adminBtn);
    }
    
    // ========== التحميل الأولي ==========
    
    // انتظر تحميل الصفحة بالكامل
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(updateSiteContent, 1000);
        });
    } else {
        setTimeout(updateSiteContent, 1000);
    }
    
    // تحديث تلقائي كل 30 ثانية
    setInterval(updateSiteContent, 30000);
    
    // تحديث عند العودة للتبويب
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            updateSiteContent();
        }
    });
    
    // جعل الدوال متاحة عالمياً
    window.refreshWebForgeContent = updateSiteContent;
    window.showUpdateNotification = showSuccessNotification;
    
    // تعريف أنيميشن CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    console.log('✅ نظام تحديث Web Forge - تم التحميل بنجاح');
    
})();
