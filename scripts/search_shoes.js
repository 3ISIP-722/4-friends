// Поиск товаров
document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();

    let filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    // Если выбрана категория — дополнительно фильтруем по ней
    if (currentCategory) {
        filtered = filtered.filter(product => product.category === currentCategory);
    }

    renderProducts(filtered);
});