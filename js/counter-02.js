window.addEventListener('click',function (event){

    let counter;
    /*if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.counter-wrapper');

         counter = counterWrapper.querySelector('[data-counter]');
    }*/
    const input  = document.querySelector('#basket');
  if(event.target.dataset.action === 'plus'){
        counter = input.value = Number(input.value)+1;


   }

  if(event.target.dataset.action === 'minus'){

      if(Number(input.value)>1){
          input.value = Number(input.value)-1;

      } else if(event.target.closest('.product') && Number(input.value) ===1 )
      {
          event.target.closest('.product').remove();
          /*toggleCartStatus();*/
          calcCartPriceAndDelivery();

      }

   }
  if(event.target.hasAttribute('data-action') && event.target.closest('.product'))
  {
      calcCartPriceAndDelivery();
  }
});
document.querySelector('.cart-remove').onclick = function(){
    document.querySelector('.product').remove();
}