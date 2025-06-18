<?php
require_once 'config.php';
redirectIfNotAdmin();

$users = getUsers();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Админ-панель</title>
    <link rel="stylesheet" href="../styles/css_shoes.css">
</head>
<body>
    <header>
        <div class="logo">
            <a href="project shoes.php"><img src="../img/icon shoes.jpg"></a>
        </div>
        <div class="header-icons">
            <a href="logout.php" class="login-btn">Выйти</a>
            <a href="project2shoes.php" class="login-btn">На сайт</a>
        </div>
    </header>

    <div class="container">
        <h1>Админ-панель</h1>
        <h2>Зарегистрированные пользователи</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th style="padding: 10px; border: 1px solid #ddd;">Имя</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Email</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><?= htmlspecialchars($user['name']) ?></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"><?= htmlspecialchars($user['email']) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html>