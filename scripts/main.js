// Все товары с указанием категории
const allProducts = [
    { id: 1, name: 'Анкерный болт 10x100', price: 45, image: '../img/ankerbolt.jpg', stock: true, category: 'Крепеж' },
    { id: 2, name: 'Дюбель-гвоздь 6x40', price: 12, image: '../img/dubelgvozd.jpg', stock: true, category: 'Крепеж' },
    { id: 3, name: 'Саморез по дереву 4.2x75', price: 8, image: '../img/samorez4.2x75.jpeg', stock: true, category: 'Крепеж' },
    { id: 4, name: 'Уголок стальной 40x40x3', price: 32, image: '../img/ugolok40x40x3.jpg', stock: true, category: 'Перфорированные крепежные элементы' },
    { id: 5, name: 'Пластина соединительная 40x100x2мм ПС этикетка', price: 28, image: '../img/plastinkasoed40x100x2mm.jpeg', stock: false, category: 'Перфорированные крепежные элементы' },
    { id: 6, name: 'Штукатурка гипсовая 25 кг', price: 320, image: '../img/shukaturka25kg.jpg', stock: true, category: 'Сухие смеси' },
    { id: 7, name: 'Шпаклевка финишная 20 кг', price: 450, image: '../img/shpaklevka20.jpeg', stock: true, category: 'Сухие смеси' },
    { id: 8, name: 'Knauf ГКЛ 1200x2500x12.5', price: 280, image: '../img/knaufgkl.jpg', stock: true, category: 'Гипсокартон' },
    { id: 9, name: 'Краска МА-15 белая 3 кг', price: 380, image: '../img/kraskama15.jpg', stock: true, category: 'Масляные краски' },
    { id: 10, name: 'Окно 1200x1500 мм', price: 8500, image: '../img/okno1200x1400.jpg', stock: true, category: 'Пластиковые окна' },
    { id: 11, name: 'Кирпич лицевой, рустированный, Разм.: 250х120х88 мм, шоколад', price: 8500, image: '../img/kirpich250x120x88.jpg', stock: true, category: 'Кирпичи' },
    { id: 12, name: 'Кирпич облицовочный 250x120x88мм "Красный"', price: 8500, image: '../img/redkirpich.jpg', stock: true, category: 'Кирпичи' },
    { id: 13, name: 'Кирпич белый 1,4НФ Rock Красная Гвардия 250х120х88', price: 8500, image: '../img/whitekirpich.jpg', stock: true, category: 'Кирпичи' },
    { id: 14, name: 'Розовый колотый кирпич 250*60*88', price: 8500, image: '../img/pinkkirpich.jpg', stock: true, category: 'Кирпичи' },
    { id: 15, name: 'Эмаль ПФ-115 Моя краска полуглянцевая (бежевый) 800 г', price: 8500, image: '../img/emal115.jpg', stock: true, category: 'Эмали' },
    { id: 16, name: 'Грунт-эмаль 3 в 1 «Моя краска»', price: 8500, image: '../img/gruntemal3v1.jpg', stock: true, category: 'Эмали' },
    { id: 17, name: 'Эмаль В-МС-278 М водоразбавляемая краска', price: 8500, image: '../img/emalbmc278.jpg', stock: true, category: 'Эмали' },
    { id: 18, name: 'Пена монтажная Момент Монтаж стандартная 750 мл', price: 8500, image: '../img/penamoment750ml.jpg', stock: true, category: 'Пены и герметики' },
    { id: 19, name: 'Герметик стекольный универсальный силиконовый KSK 22X KUDO KUSSIL280GP-X', price: 8500, image: '../img/germetic.jpg', stock: true, category: 'Пены и герметики' },
    { id: 20, name: 'Пена монтажная ПРОФИ 65л 950гр RICH', price: 8500, image: '../img/penaprofi.jpg', stock: true, category: 'Пены и герметики' },
    { id: 21, name: 'Валенсия розетка 1-местная с/з 16А белая с защ. штор. EKF PROxima', price: 8500, image: '../img/rozetka1mest.jpg', stock: true, category: 'Розетки и выключатели' },
    { id: 22, name: 'Выключатель клавишный 250В 20А (4с) ON-OFF красный с подсветкой REXANT', price: 8500, image: '../img/offred.jpg', stock: true, category: 'Розетки и выключатели' },
    { id: 23, name: 'Розетка 2-м ОП Blanca 16А IP20 250В с заземл. без защ. шторок с изолир. пластиной бел. Systeme Electric BLNRA010211', price: 8500, image: '../img/rozetka2.jpeg', stock: true, category: 'Розетки и выключатели' },
    { id: 24, name: 'Кабель Камкабель ВВГнг(А)-LS 4х2,5', price: 8500, image: '../img/kabelkam.jpeg', stock: true, category: 'Кабели и монтаж' },
    { id: 25, name: 'Кабель на 380 вольт 4 жильный на 15 квт', price: 8500, image: '../img/kabel380v.jpeg', stock: true, category: 'Кабели и монтаж' },
    { id: 26, name: 'PRN 0275 N акустический кабель', price: 8500, image: '../img/prnakus.jpg', stock: true, category: 'Кабели и монтаж' },
    { id: 27, name: 'Трехстворчатое окно 1750*1370 мм с двумя поворотными створками', price: 8500, image: '../img/3okno.jpeg', stock: true, category: 'Готовые окна' },
    { id: 28, name: 'Одностворчатое окно 800*1870 мм с фрамугой', price: 8500, image: '../img/1okno.jpeg', stock: true, category: 'Готовые окна' },
    { id: 29, name: 'Двухстворчатое окно 1300*1370 мм глухое+поворотно-откидное', price: 8500, image: '../img/2okno.jpeg', stock: true, category: 'Готовые окна' },
    { id: 30, name: 'Полотно москитной сетки 1800мм, 30м/Gr, серый HEB1800', price: 8500, image: '../img/masksetka1800.jpg', stock: true, category: 'Москитные сетки' },
    { id: 31, name: 'Полотно москитной сетки 1200мм, 30м/Gr, серый JWF1200', price: 8500, image: '../img/masksetka1200.jpg', stock: true, category: 'Москитные сетки' },
    { id: 32, name: 'Сетка москитная метражом в рулоне 1,0*30 м, белый MSN030RW', price: 8500, image: '../img/whitemasksetka.jpeg', stock: true, category: 'Москитные сетки' },
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