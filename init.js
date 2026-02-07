// ملف تهيئة النظام للاستضافة على GitHub Pages
async function initializeCMS() {
    // التحقق من وجود ملف البيانات
    try {
        const response = await fetch('site-data.json');
        if (!response.ok) {
            // إنشاء ملف بيانات أولي
            const initialData = {
                siteTitle: "Web Forge | مجموعة محمد أيت صالح",
                siteDescription: "مجموعة Web Forge تقدم حلولاً تقنية متكاملة في تصميم وتطوير المواقع والمتاجر الإلكترونية",
                heroText: "مجموعة web forge تقدم لك حلولاً تقنية متكاملة. متخصصون في صناعة الهوية الرقمية، تطوير متاجر YouCan و Shopify، وتصميم المواقع العصرية.",
                promoText: "🚀 عرض لفترة محدودة: احصل على خصم 20% عند طلب أول متجر YouCan أو Shopify هذا الأسبوع! — اطلب الآن واستفد من العرض — 🎁 استشارة مجانية عند طلب موقع خاص!",
                stats: {
                    visits: 0,
                    orders: 0,
                    referrals: 0,
                    gifts: 0
                }
            };
            
            // حفظ البيانات محلياً
            localStorage.setItem('siteData', JSON.stringify(initialData));
            console.log('تم إنشاء بيانات أولية للموقع');
        }
    } catch (error) {
        console.log('جاري استخدام البيانات المحلية...');
    }
    
    // إضافة زر التحكم في لوحة الإدارة للمالك فقط
    if (localStorage.getItem('isAdmin') === 'true') {
        addAdminButton();
    }
}

// إضافة زر للتحكم للمالك
function addAdminButton() {
    const adminBtn = document.createElement('div');
    adminBtn.className = 'admin-panel';
    adminBtn.innerHTML = `
        <div class="admin-btn" onclick="window.open('admin.html', '_blank')">
            <i class="fas fa-cogs"></i>
        </div>
    `;
    document.body.appendChild(adminBtn);
}

// تشغيل التهيئة
initializeCMS();
