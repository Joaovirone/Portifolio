function showCategory(categoryId) {
    const menuList = document.getElementById('menuList');
    const categories = ['salgados', 'doces', 'gelados', 'bebidas'];

    document.querySelectorAll('.menu-category').forEach(category => {
        category.classList.remove('show');
    });

    const selectedCategoryIndex = categories.indexOf(categoryId);
    const selectedCategory = categories.splice(selectedCategoryIndex, 1)[0];

    const reorderedCategories = [selectedCategory, ...categories];

    reorderedCategories.forEach((category, index) => {
        const categoryElement = document.getElementById(category);
        if (categoryElement) {
            menuList.appendChild(categoryElement);

            setTimeout(() => {
                categoryElement.classList.add('show');
            }, 100 * index);
        }
    });
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
