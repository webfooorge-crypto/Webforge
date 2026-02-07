<?php
session_start();

// مستخدم واحد بسيط
$admin_user = 'admin';
$admin_pass = 'admin123'; // غيّرها فوراً!

if ($_POST) {
    if ($_POST['username'] === $admin_user && $_POST['password'] === $admin_pass) {
        $_SESSION['admin'] = true;
        header('Location: dashboard.php');
        exit;
    } else {
        $error = 'خطأ في اسم المستخدم أو كلمة المرور';
    }
}
?>
<!DOCTYPE html>
<html dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>تسجيل دخول - Web Forge</title>
    <style>
        body { 
            background: linear-gradient(135deg, #667eea, #764ba2); 
            font-family: 'Tajawal', sans-serif; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
        }
        .login-box { 
            background: white; 
            padding: 40px; 
            border-radius: 15px; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.1); 
            width: 350px; 
        }
        input { 
            width: 100%; 
            padding: 12px; 
            margin: 10px 0; 
            border: 2px solid #ddd; 
            border-radius: 8px; 
            font-size: 16px; 
        }
        button { 
            background: #2563eb; 
            color: white; 
            border: none; 
            padding: 12px; 
            width: 100%; 
            border-radius: 8px; 
            font-size: 16px; 
            cursor: pointer; 
            margin-top: 10px; 
        }
        .error { 
            color: #ef4444; 
            background: #fee; 
            padding: 10px; 
            border-radius: 5px; 
            margin-bottom: 15px; 
        }
    </style>
</head>
<body>
    <div class="login-box">
        <h2 style="text-align:center; color:#2563eb;">🔐 تسجيل الدخول</h2>
        <?php if(isset($error)) echo "<div class='error'>$error</div>"; ?>
        <form method="POST">
            <input type="text" name="username" placeholder="اسم المستخدم" required>
            <input type="password" name="password" placeholder="كلمة المرور" required>
            <button type="submit">دخول</button>
        </form>
    </div>
</body>
</html>
