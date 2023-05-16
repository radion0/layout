const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 0;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

$(function() {

	$('.open-search').click(function(e) {
		e.preventDefault();
		$('#search').addClass('active');
	});

	$('.close-search').click(function() {
		$('#search').removeClass('active');
	});

});
const  tabs = document.querySelectorAll('.tab_btn');
const  all_content = document.querySelectorAll('.content__tab');

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        var line =document.querySelector('.line');
        line.style.width = e.target.offsetWidth+"px";
        line.style.left = e.target.offsetLeft+"px";
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    });

});
/*const container = document.querySelector('rating');
const items = container.querySelectorAll('rating-item')
container.onclick = e => {
const elClass = e.target.classList;
// change the rating if the user clicks on a different star
if (!elClass.contains('active')) {
items.forEach( // reset the active class on the star
item => item.classList.remove('active')
);
console.log(e.target.getAttribute("data-rate"));
elClass.add('active'); // add active class to the clicked star
}
};*/
const deleteProducts = (productParent) => {
	let id = productParent.querySelector('.product').dataset.id;
	document.querySelector('.delete');
	
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.product').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();

	printQuantity();
};

$(function (){
   $('input[type="number"]').niceNumber();
});
/*var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');
smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}*/
/*
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}
*/
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');


// Cart Working

if(document.readyState =='loading'){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}
function ready() {
    // Remove Items From Cart
    var reomveCartButtons = document.getElementsByClassName('cart-remove');
    console.log(reomveCartButtons);
    for (var i = 0; i <reomveCartButtons.length; i++) {
        var button = reomveCartButtons[i];
        button.addEventListener("click",reomveCartItem);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i <quantityInputs.length; i++)
    {
        var input =quantityInputs[i];
        input.addEventListener("change",quantityChanged);
    }
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i <addCart.length; i++)
    {
        var button = addCart[i];
        button.addEventListener('click',addCartClicked);
    }
}
function reomveCartItem(event)
{
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
function quantityChanged(event)
{
    var input = event.target;
    if(isNaN(input.value) || input.value <=0)
    {
        input.value=1;
    }
    updatetotal();
}
/// Add To cart
function addCartClicked(event)
{
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName('product-title')[0].innerText;
    var price = shopProduct.getElementsByClassName('price')[0].innerText;
    var productImg = shopProduct.getElementsByClassName('product-img')[0].src;

    addProductToCart(title,price,productImg);
    updatetotal();
}
function addProductToCart(title,product,productImg)
{
    var cartShopBox = document.createElement("div");
    //cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length;i++)
    {
        alert("You have already");
    }
}
var cartBoxContent = `
 <img src="assets/img/product.png" alt="" class="cart-img">
            <div class="detail-box">
              <div class="cart-product-title">Earbuds</div>
              <div class="cart-price">$25.5</div>
              <input type="number" value="1" class="cart-quantity">
            </div>
            <!-- Remove Cart -->
            <i class='bx bxs-trash-alt cart-remove'></i>
`;
/*cartShop*/
//Update Total
function updatetotal()
{
    var total=0;
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    for (var i = 0; i <cartBoxes.length; i++)
    {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement =cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total +price*quantity;

        total = Math.round(total*100)/100;

        document.getElementsByClassName("total-price")[0].innerText = "$"+ total;

    }
}