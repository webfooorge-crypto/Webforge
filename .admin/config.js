// ملف الإعدادات للوحة التحكم
const ADMIN_CONFIG = {
    // معلومات الموقع
    SITE_INFO: {
        name: "Web Forge",
        url: "https://webfooorge.github.io/Webforge/",
        repo: "https://github.com/webfooorge/Webforge",
        owner: "webfooorge"
    },
    
    // إعدادات GitHub
    GITHUB: {
        apiUrl: "https://api.github.com",
        endpoints: {
            getContent: "/repos/{owner}/{repo}/contents/{path}",
            updateContent: "/repos/{owner}/{repo}/contents/{path}"
        }
    },
    
    // ملفات الموقع القابلة للتحرير
    EDITABLE_FILES: [
        { name: "index.html", path: "index.html", type: "html" },
        { name: "style.css", path: "style.css", type: "css" },
        { name: "script.js", path: "script.js", type: "js" }
    ],
    
    // إعدادات التخزين
    STORAGE: {
        prefix: "webforge_admin_",
        keys: {
            content: "content_data",
            settings: "admin_settings",
            cache: "file_cache"
        }
    }
};

// ملفات الموقع التي تحتوي على بيانات قابلة للتحرير
const SITE_DATA_SECTIONS = {
    hero: {
        selector: ".hero",
        fields: ["title", "description", "typewriterWords"]
    },
    about: {
        selector: "#aboutSection",
        fields: ["title", "description", "teamMembers"]
    },
    services: {
        selector: "#servicesSection",
        fields: ["title", "description", "items"]
    }
};

// التصدير للنمط الحديث
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ADMIN_CONFIG, SITE_DATA_SECTIONS };
}
