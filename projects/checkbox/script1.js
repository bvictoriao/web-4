function calculateTotal() {
    // Получаем все чекбоксы с классом 'product-checkbox'
    const checkboxes = document.querySelectorAll('.product-checkbox');
    let total = 0;

    // Проходим по всем чекбоксам и суммируем значения от выбранных
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            total += parseInt(checkbox.value);
        }
    });

    // Обновляем текст с общей стоимостью
    document.getElementById('totalCost').innerText = total;
}