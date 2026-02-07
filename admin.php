# حماية واجهة الإدارة
<Files "admin.php">
    # منع الوصول المباشر إلا عبر POST
    RewriteEngine On
    RewriteCond %{REQUEST_METHOD} !POST
    RewriteCond %{QUERY_STRING} !logout
    RewriteRule ^ - [F]
</Files>

# منع الوصول للملفات الحساسة
<FilesMatch "\.(php|json|sql|log)$">
    Order Deny,Allow
    Deny from all
</FilesMatch>

# السماح فقط بالملفات الضرورية
<FilesMatch "^(index\.html|style\.css|script\.js|admin\.php)$">
    Order Allow,Deny
    Allow from all
</FilesMatch>

# حماية من المتطفلين
Options -Indexes
ServerSignature Off

# منع الوصول للـ PHP في مجلدات معينة
<Directory "/admin">
    php_flag engine off
</Directory>
