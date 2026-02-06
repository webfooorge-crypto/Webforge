
// config.js - إعدادات لوحة التحكم

const GITHUB_CONFIG = {
    username: 'YOUR_GITHUB_USERNAME',
    repo: 'YOUR_REPO_NAME',
    branch: 'main',
    apiUrl: 'api.php' // URL لملف API
};

const LOCAL_STORAGE_KEYS = {
    SITE_DATA: 'webforgeData',
    SITE_CODE: 'siteCode',
    SITE_STATS: 'siteStats',
    SITE_ORDERS: 'siteOrders',
    GITHUB_TOKEN: 'githubToken',
    LAST_BACKUP: 'lastBackup'
};

const ALLOWED_FILE_TYPES = [
    '.html', '.htm', '.css', '.js', '.json',
    '.txt', '.md', '.php', '.xml', '.svg'
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
