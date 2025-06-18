// Все товары с указанием категории
const allProducts = [
    { id: 1, name: 'Черные мужские кроссовки', price: 4390, image: '../img/black shoes.jpg', stock: true, category: 'Кроссовки для него' },
    { id: 2, name: 'Черные мужские кроссовки', price: 5100, image: '../img/black 2.jpg', stock: false, category: 'Кроссовки для него' },
    { id: 3, name: 'Черные мужские кроссовки', price: 8000, image: '../img/black 3.jpg', stock: false, category: 'Кроссовки для него' },
    { id: 4, name: 'Молочные женские кроссовки', price: 3200, image: '../img/беж крос.jpg', stock: true, category: 'Кроссовки для неё' },
    { id: 5, name: 'Молочные женские кроссовки с серебряными вставками', price: 2800, image: '../img/беж крос 2.jpg', stock: false, category: 'ПКроссовки для неё' },
    { id: 6, name: 'Молочные женские кроссовки', price: 5200, image: '../img/крос беж 3.jpg', stock: true, category: 'Кроссовки для неё' },
    { id: 7, name: 'Синие мужские велюровые лоферы', price: 5400, image: '../img/лоф 1.jpg', stock: true, category: 'Лоферы для него' },
    { id: 8, name: 'Оливковые мужские лоферы с перфорацией', price: 6300, image: '../img/лоф 2.jpg', stock: true, category: 'Лоферы для него' },
    { id: 9, name: 'Коричневые мужские лоферы из натуральной кожи', price: 3800, image: '../img/лоф 4.jpg', stock: true, category: 'Лоферы для него' },
    { id: 10, name: 'Бежевые женские лоферы', price: 8500, image: '../img/лоф жен.jpg', stock: true, category: 'Лоферы для неё' },
    { id: 11, name: 'Темно-бежевые женские лоферы', price: 9900, image: '../img/лоф жен 2.jpg', stock: true, category: 'Лоферы для неё' },
    { id: 12, name: 'Серые женские лоферы на рельефной подошве', price: 6500, image: '../img/лоф жен 3.jpg', stock: true, category: 'Лоферы для неё' },
    { id: 13, name: 'Черные мужские мокасины', price: 5500, image: '../img/мок 1.jpg', stock: false, category: 'Мокасины для него' },
    { id: 14, name: 'Молочные мужские мокасины с перфорацией', price: 8500, image: '../img/мок 2.jpg', stock: true, category: 'Мокасины для него' },
    { id: 15, name: 'Молочные мужские мокасины из кожи', price: 7500, image: '../img/мок 3.jpg', stock: true, category: 'Мокасины для него' },
    { id: 16, name: 'Молочные лакированные женские мюли', price: 8500, image: '../img/мюли 1.jpg', stock: true, category: 'Мюли для неё' },
    { id: 17, name: 'Женские мюли на прозрачном каблуке', price: 5600, image: '../img/мюли 2.jpg', stock: false, category: 'Мюли для неёи' },
    { id: 18, name: 'Молочные велюровые женские мюли', price: 8506, image: '../img/мюли 3.jpg', stock: true, category: 'Мюли для неё' },
    { id: 19, name: 'Черные мужские сабо', price: 4500, image: '../img/сабо 1.jpg', stock: true, category: 'Сабо для него' },
    { id: 20, name: 'Черные мужские кожаные сабо', price: 5400, image: '../img/сабо 2.jpg', stock: false, category: 'Сабо для него' },
    { id: 21, name: 'Черные мужские сабо', price: 3400, image: '../img/сабо 3.jpg', stock: true, category: 'Сабо для него' },
    { id: 22, name: 'Белые женские сабо', price: 4500, image: '../img/сабо жен.jpg', stock: true, category: 'Сабо для неё' },
    { id: 23, name: 'Розовые женские сабо', price: 3500, image: '../img/сабо жен 2.jpg', stock: true, category: 'Сабо для неё' },
    { id: 24, name: 'Белые женские сабо', price: 5500, image: '../img/сабо жен 3.jpg', stock: true, category: 'Сабо для неё' }
];






let currentCategory = null;
let cart = [];

// Элементы
const productsGrid = document.getElementById('products-grid');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');

// При загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    const path = window.location.pathname;

    if (productsGrid) {
        if (path.includes('favorite.html')) {
            showFavoriteProducts();
        } else {
            showAllProducts();
        }
    }

    if (cartItemsContainer && totalPriceEl) {
        renderCart();
    }
});

// Показ/скрытие подкатегорий
function toggleSubcategories(element) {
    const subcategories = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    if (subcategories.style.display === 'block') {
        subcategories.style.display = 'none';
        arrow.textContent = '▼';
    } else {
        subcategories.style.display = 'block';
        arrow.textContent = '▲';
    }
}

// Показ всех товаров
function showAllProducts() {
    currentCategory = null;
    renderProducts(allProducts);
    document.querySelectorAll('.subcategory').forEach(el => el.classList.remove('active'));
}

// Фильтрация по категории
function filterProducts(category) {
    currentCategory = category;
    const filteredProducts = allProducts.filter(product => product.category === category);
    renderProducts(filteredProducts);

    document.querySelectorAll('.subcategory').forEach(el => el.classList.remove('active'));
    if (event?.target) {
        event.target.classList.add('active');
    }
}

// Добавление в корзину
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    const cartItem = cart.find(p => p.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
        showNotification(`Товар "${product.name}" обновлен в корзине (${cartItem.quantity} шт.)`);
    } else {
        cart.push({ ...product, quantity: 1 });
        showNotification(`Товар "${product.name}" добавлен в корзину`);
    }

    saveCartToStorage();
    if (cartItemsContainer && totalPriceEl) renderCart();
}
// Удаление из корзины
function removeFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    saveCartToStorage();
    if (cartItemsContainer && totalPriceEl) renderCart();
}

// Изменение количества
function changeQuantity(productId, delta) {
    const item = cart.find(p => p.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        if (cartItemsContainer && totalPriceEl) renderCart();
    }
}

// Сохранение корзины
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Отрисовка корзины
function renderCart() {
    if (!cartItemsContainer || !totalPriceEl) return;

    const cartTitle = document.getElementById('cart-title');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartTitle.textContent = 'Корзина пуста';
        totalPriceEl.textContent = '0';
        return;
    } else {
        cartTitle.textContent = 'Корзина';
    }

    cart.forEach(item => {
        total += item.price * item.quantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <div class="item-info">
                    <div>${item.name}</div>
                    <div>${item.price} ₽/шт</div>
                </div>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <div class="quantity">${item.quantity}</div>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="cart-price">${item.price * item.quantity} ₽</div>
                <div class="remove-btn" onclick="removeFromCart(${item.id})">✕</div>
            </div>
        `;
    });

    totalPriceEl.textContent = total;
}

/* --------------------- ИЗБРАННОЕ --------------------- */
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorite')) || [];
}

function saveFavorites(favs) {
    localStorage.setItem('favorite', JSON.stringify(favs));
}

function addToFavorites(productId, event) {
    event.stopPropagation();
    let favs = getFavorites();
    const index = favs.indexOf(productId);

    if (index === -1) {
        favs.push(productId);
    } else {
        favs.splice(index, 1);
    }

    saveFavorites(favs);
    toggleHeartIcon(event.currentTarget, index === -1);
}

function toggleHeartIcon(iconElement, isNowActive) {
    iconElement.querySelector('img').src = isNowActive
        ? '../img/heart-icon-red.svg'
        : '../img/heart-icon.svg';
}

/* ------------------ РЕНДЕР ТОВАРОВ ------------------ */
function renderProducts(products) {
    if (!productsGrid) return;
    const favs = getFavorites();

    if (products.length > 0) {
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="favorite-icon" onclick="addToFavorites(${product.id}, event)">
                    <img src="${favs.includes(product.id)
                        ? '../img/heart-icon-red.svg'
                        : '../img/heart-icon.svg'}" alt="Избранное" class="heart-icon">
                </div>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-title">${product.name}</div>
                <div class="product-price">${product.price} ₽</div>
                <div class="add-btn">
                    <div class="product-stock ${!product.stock ? 'out' : ''}">
                    ${product.stock ? 'В наличии' : 'Нет в наличии'}
                    </div>
                    <button class="add-to-cart" ${!product.stock ? 'disabled' : ''} onclick="addToCart(${product.id})">
                    ${product.stock ? 'В корзину' : 'Нет в наличии'}
                    </button>
                </div>
            </div>
        `).join('');
    } else {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center;">Товары в этой категории отсутствуют</div>';
    }
}

// Отправление товаров в избранное

function showFavoriteProducts() {
    const favs = getFavorites();
    const favoriteProducts = allProducts.filter(product => favs.includes(product.id));
    
    if (!productsGrid) return;
    
    if (favoriteProducts.length > 0) {
        productsGrid.innerHTML = favoriteProducts.map(product => `
            <div class="product-card favorite-card">
                <button class="remove-favorite-btn" onclick="removeFromFavorites(${product.id})">✕</button>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-title">${product.name}</div>
                <div class="product-price">${product.price} ₽</div>
                <div class="add-btn">
                    <div class="product-stock ${!product.stock ? 'out' : ''}">
                        ${product.stock ? 'В наличии' : 'Нет в наличии'}
                    </div>
                    <button class="add-to-cart" ${!product.stock ? 'disabled' : ''} onclick="addToCart(${product.id})">
                        ${product.stock ? 'В корзину' : 'Нет в наличии'}
                    </button>
                </div>
            </div>
        `).join('');
    } else {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center;">У вас пока нет избранных товаров</div>';
    }
}

function removeFromFavorites(productId) {
    let favs = getFavorites();
    favs = favs.filter(id => id !== productId);
    saveFavorites(favs);

    if (window.location.pathname.includes('favorite.html')) {
        showFavoriteProducts();
    }

    showNotification('Товар удален из избранного');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}