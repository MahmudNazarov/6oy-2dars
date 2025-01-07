document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".menu-item button").forEach((button) => {
        button.addEventListener("click", () => {
            const menuItem = button.closest(".menu-item");
            if (!menuItem) return;

            const itemName = menuItem.querySelector("p:first-of-type").textContent;
            const itemPriceText = menuItem.querySelector("p:nth-of-type(2)").textContent;
            const itemPrice = parseInt(itemPriceText.replace(/\f/g, ""), 10);

            const quantity = parseInt(prompt(`Сколько "${itemName}" вы хотите заказать?`), 10);
            if (isNaN(quantity) || quantity <= 0) {
                alert("Пожалуйста, введите корректное количество.");
                return;
            }

            const totalCost = itemPrice * quantity;
            const userConfirmation = confirm(`Вы заказали ${quantity} шт. "${itemName}". Общая сумма к оплате: ${totalCost} сум. Принять заказ?`);

            if (userConfirmation) {
                alert("Ваш заказ принят");
            } else {
                alert("Ваш заказ отменён");
            }
        });
    });
});
