<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');
    $confirmPassword = trim($_POST['confirmPassword'] ?? '');

    $errors = [];

    if (empty($name)) $errors[] = "Имя обязательно для заполнения";
    if (empty($email)) $errors[] = "Email обязателен для заполнения";
    if (empty($password)) $errors[] = "Пароль обязателен для заполнения";
    if ($password !== $confirmPassword) $errors[] = "Пароли не совпадают";
    if (findUserByEmail($email)) $errors[] = "Пользователь с таким email уже существует";

    if (empty($errors)) {
        $userData = [
            'name' => $name,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT)
        ];
        
        saveUser($userData);
        $_SESSION['user'] = $userData;
        header('Location: project2shoes.php');
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/style_regest_shoes.css">
    <title>Регистрация</title>
</head>
<body>
    <div class="login-container">
        <div class="login-container__wrapp">
            <form class="login-form" method="POST">
                <h2>Регистрация</h2>
                <?php if (!empty($errors)): ?>
                    <div style="color: red; margin-bottom: 15px;">
                        <?php foreach ($errors as $error): ?>
                            <div><?= htmlspecialchars($error) ?></div>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
                
                <label for="name">Имя</label>
                <input type="text" id="name" name="name" placeholder="Введите ваше имя" required value="<?= htmlspecialchars($_POST['name'] ?? '') ?>">
                
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Введите email" required value="<?= htmlspecialchars($_POST['email'] ?? '') ?>">
                
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" placeholder="Введите пароль" required>
                
                <label for="confirmPassword">Подтверждение пароля</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Повторите пароль" required>
                
                <button type="submit">Зарегистрироваться</button>
                
                <div class="form-links">
                    <span>Уже есть аккаунт? <a href="account_shoes.php">Войти</a></span>
                </div>
            </form>
        </div>
    </div>
</body>
</html>