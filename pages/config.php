<?php
session_start();

define('USERS_FILE', 'users.txt');
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD', 'admin123');

function saveUser($userData) {
    $users = getUsers();
    $users[] = $userData;
    file_put_contents(USERS_FILE, serialize($users));
}

function getUsers() {
    if (!file_exists(USERS_FILE)) return [];
    $content = file_get_contents(USERS_FILE);
    return $content ? unserialize($content) : [];
}

function findUserByEmail($email) {
    $users = getUsers();
    foreach ($users as $user) {
        if ($user['email'] === $email) {
            return $user;
        }
    }
    return null;
}

function isLoggedIn() {
    return isset($_SESSION['user']);
}

function isAdmin() {
    return isset($_SESSION['user']) && $_SESSION['user']['email'] === ADMIN_USERNAME;
}

function redirectIfNotLoggedIn() {
    if (!isLoggedIn()) {
        header('Location: account_shoes.php');
        exit();
    }
}

function redirectIfNotAdmin() {
    if (!isAdmin()) {
        header('Location: account_shoes.php');
        exit();
    }
}
?>