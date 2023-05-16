function calcCartPriceAndDelivery() {
    /*const cartWrapper = document.querySelector('.product');*/
    const priceElements= document.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');


    // Общая стоимость товаров
    let priceTotal = 0;

    // Обходим все блоки с ценами в корзине
    priceElements.forEach(function (item) {
        // Находим количество товара
        //const amountEl = item.querySelector('#form1');
        const input  = document.querySelector('#basket');
        // Добавляем стоимость товара в общую стоимость (кол-во * цену)
        priceTotal += parseInt(item.innerText) * (input.value);

        console.log(priceTotal);
    });

    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;

    // Скрываем / Показываем блок со стоимостью доставки
  /*  if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    // Указываем стоимость доставки
    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }*/
}