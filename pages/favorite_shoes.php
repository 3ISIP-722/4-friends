<?php require_once 'config.php'; ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Избранное</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="../styles/css_shoes.css">
</head>
<body>
    <header>      
        <div class="logo">
            <a href="project2shoes.html"><img src="../img/icon shoes.jpg"></a>
        </div>
        <div class="header-icons">
            <div class="search-bar">
                <input type="text" id="search-input" placeholder="Поиск товаров">
                <i class="fas fa-search"></i>
            </div>
            <a href="favorite_shoes.html"><i class="far fa-heart icon"></i></a>
            <a href="basket_shoes.html"><i class="fas fa-shopping-cart icon"></i></a>
            <a href="account_shoes.html" class="login-btn" target="_blank">Войти</a>
        </div>

        <button class="burger-menu" id="openMobileNav">
            <i class="fas fa-bars"></i>
        </button>
    </header>

    <div class="mobile-nav">
        <div class="mobile-nav__header">
            <div class="logo">
                <a href="project2shoes.html"><img src="../img/icon shoes.jpg"></a>
            </div>
            <button class="mobile-nav__btn" id="closeMobileNav">
                <img src="../img/nav-close.svg" alt="Close navigation">
            </button>
        </div>
        <div class="mobile-nav__body">
            <ul class="nav__list">
                <li class="nav__list-item">
                    <a href="project2shoes.html">Товары</a>
                </li>
                <li class="nav__list-item">
                    <a href="favorite_shoes.html">Избранные товары</a>
                </li>
                <li class="nav__list-item">
                    <a href="basket_shoes.html">Корзина</a>
                </li>
                <li class="nav__list-item">
                    <a href="account_shoes.html" target="_blank">Войти</a>
                </li>
            </ul>
        </div>
    </div>


    <main class="content">
        <h1 class="favourite-title">Избранные товары</h1>
        <div class="favorite-container">
            <div id="products-grid" class="favorite-grid"></div>
        </div>
    </main>

    <footer>
        <div class="footer-social">
            <p>Приходите к нам!</p>
            <div class="social-icons">
                <i class="fab fa-telegram"></i>
                <i class="fab fa-vk"></i>
                <i class="fab fa-whatsapp"></i>
            </div>
        </div>
        <div class="footer-contact">
            <p>+7(999)-999-99-99</p>
            <p>shoesmsk@mail.ru</p>
        </div>
    </footer>
    <script src="../scripts/cart-favorites.js"></script>
    <script src="../scripts/main_shoes.js"></script>
    <script src="../scripts/search_shoes.js"></script>
    <script src="../scripts/mobile-menu_shoes.js"></script>
</body>
</html>