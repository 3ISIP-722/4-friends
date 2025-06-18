<?php require_once 'config.php'; ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин обуви</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="../styles/css_shoes.css">
</head>
<body>
    <header>
        <div class="logo">
            <a href="project shoes.php"><img src="../img/icon shoes.jpg"></a>
        </div>
        <div class="header-icons">
            <div class="search-bar">
                <input type="text" id="search-input" placeholder="Поиск товаров">
                <i class="fas fa-search"></i>
            </div>
            <a href="favorite_shoes.php"><i class="far fa-heart icon"></i></a>
            <a href="basket_shoes.php"><i class="fas fa-shopping-cart icon"></i></a>
            <?php if (isLoggedIn()): ?>
                <a href="account_shoes.php" class="login-btn"><?= htmlspecialchars($_SESSION['user']['name']) ?></a>
                <a href="logout.php" class="login-btn">Выйти</a>
                <?php if (isAdmin()): ?>
                    <a href="admin.php" class="login-btn">Админ</a>
                <?php endif; ?>
            <?php else: ?>
                <a href="account_shoes.php" class="login-btn">Войти</a>
            <?php endif; ?>
        </div>
        <button class="burger-menu" id="openMobileNav">
            <i class="fas fa-bars"></i>
        </button>
    </header>

    <div class="mobile-nav">
        <div class="mobile-nav__header">
            <div class="logo">
                <a href="project shoes.php"><img src="../img/icon.png"></a>
            </div>
            <button class="mobile-nav__btn" id="closeMobileNav">
                <img src="../img/nav-close.svg" alt="Close navigation">
            </button>
        </div>
        <div class="mobile-nav__body">
            <ul class="nav__list">
                <li class="nav__list-item">
                    <a href="project shoes.php">Товары</a>
                </li>
                <li class="nav__list-item">
                    <a href="favorite_shoes.php">Избранные товары</a>
                </li>
                <li class="nav__list-item">
                    <a href="basket_shoes.php">Корзина</a>
                </li>
                <li class="nav__list-item">
                    <?php if (isLoggedIn()): ?>
                        <a href="account_shoes.php"><?= htmlspecialchars($_SESSION['user']['name']) ?></a>
                    <?php else: ?>
                        <a href="account_shoes.php">Войти</a>
                    <?php endif; ?>
                </li>
            </ul>
        </div>
    </div>

    <div class="main-content">
        <div class="container">
            <aside class="sidebar">
                <h2>Категории товаров</h2>
                
                <div class="all-categories" onclick="showAllProducts()">Все товары</div>
                
                <div class="category">
                    <div class="category-title" onclick="toggleSubcategories(this)">
                        Кроссовки
                        <span class="arrow">▼</span>
                    </div>
                    <div class="subcategories">
                        <div class="subcategory" onclick="filterProducts('Кроссовки для него')">Кроссовки для него</div>
                        <div class="subcategory" onclick="filterProducts('Кроссовки для неё')">Кроссовки для неё</div>
                    </div>
                </div>
                
                <div class="category">
                    <div class="category-title" onclick="toggleSubcategories(this)">
                        Лоферы
                        <span class="arrow">▼</span>
                    </div>
                    <div class="subcategories">
                        <div class="subcategory" onclick="filterProducts('Лоферы для него')">Лоферы для него</div>
                        <div class="subcategory" onclick="filterProducts('Лоферы для неё')">Лоферы для неё</div>
                    </div>
                </div>
                
                <div class="category">
                    <div class="category-title" onclick="toggleSubcategories(this)">
                        Мокасины
                        <span class="arrow">▼</span>
                    </div>
                    <div class="subcategories">
                        <div class="subcategory" onclick="filterProducts('Мокасины для него')">Мокасины для него</div>
                        <div class="subcategory" onclick="filterProducts('Мюли для неё')">Мюли для неё</div>
                    </div>
                </div>
                
                <div class="category">
                    <div class="category-title" onclick="toggleSubcategories(this)">
                        Сабо
                        <span class="arrow">▼</span>
                    </div>
                    <div class="subcategories">
                        <div class="subcategory" onclick="filterProducts('Сабо для него')">Сабо для него</div>
                        <div class="subcategory" onclick="filterProducts('Сабо для неё')">Сабо для неё</div>
                    </div>
                </div>
            </aside>
            
            <main class="content content-bg-white">
                <div id="products-grid" class="products-grid">
                </div>
            </main>
        </div>
    </div>
    
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

    <script src="../scripts/main_shoes.js"></script>
    <script src="../scripts/search_shoes.js"></script>
    <script src="../scripts/mobile-menu_shoes.js"></script>
</body>
</html>