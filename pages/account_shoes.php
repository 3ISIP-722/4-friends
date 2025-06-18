<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Проверка администратора
    if ($email === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        $_SESSION['user'] = [
            'name' => 'Администратор',
            'email' => ADMIN_USERNAME
        ];
        header('Location: admin.php');
        exit();
    }

    // Проверка обычного пользователя
    $user = findUserByEmail($email);
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user;
        header('Location: project2shoes.php');
        exit();
    } else {
        $error = "Неверный email или пароль";
    }
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/css_shoes.css" />
    <title>Вход</title>
</head>
<body>
    <div class="login-container">
        <div class="login-container__wrapp">
            <form class="login-form" method="POST">
                <h2>Вход в аккаунт</h2>
                <?php if (isset($error)): ?>
                    <div style="color: red; margin-bottom: 15px;"><?= htmlspecialchars($error) ?></div>
                <?php endif; ?>
          
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Введите email" required />
          
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" placeholder="Введите пароль" required />
          
                <button type="submit">Войти</button>
          
                <div class="form-links">
                  <span>Нет аккаунта? <a href="regest_shoes.php">Регистрация</a></span>
                </div>
              </form>
        </div>
    </div>
</body>
</html>