var x=document.querySelector(".change");
let shopButton=document.querySelector("#shopnow");
function generateRandomColor() {
   console.log("used");
   const randomRed = Math.floor(Math.random() * 256);
   const randomGreen = Math.floor(Math.random() * 256);
   const randomBlue = Math.floor(Math.random() * 256);
   const redHex = randomRed.toString(16).padStart(2, '0');
   const greenHex = randomGreen.toString(16).padStart(2, '0');
   const blueHex = randomBlue.toString(16).padStart(2, '0');
   const randomColor = `#${redHex}${greenHex}${blueHex}`;
   document.getElementById('randomColor').textContent = `Random Color: ${randomColor}`;
   document.documentElement.style.setProperty('--rand-color', randomColor);
};
        window.addEventListener("scroll",function()
        {
            if(window.scrollY>=100)
           {
            x.classList.add("navbar-scrolled");
            }
            else if(window.scrollY<100)
             {
                x.classList.remove("navbar-scrolled");
             }
        });
if(shopButton){
shopButton.addEventListener("click",()=>{

});
}
let cartIcon =document.querySelector("#cart-bag");
let cart= document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");
if(cartIcon){
   cartIcon.addEventListener("click",()=>{
      cart.classList.add("active");
      });
};
if(closeCart){
   closeCart.addEventListener("click",()=>{
      cart.classList.remove("active");
      });
};

if (document.readyState=="loading"){
   document.addEventListener("DOMContentLoaded",ready);
}
else{
   ready();
}
function ready(){
   var removeCartButtons=document.getElementsByClassName("cart-remove");
   console.log(removeCartButtons);
   for(var i=0;i<removeCartButtons.length;i++){
      var button=removeCartButtons[i];
      button.addEventListener("click",removeCartItem);
   }

   var quantityInputs=document.getElementsByClassName("cart-quantity");
   for(var i=0;i<quantityInputs.length;i++){
      var input=quantityInputs[i];
      input.addEventListener("change",quantityChanged);
   }

   var addCart=document.getElementsByClassName("add-cart");
   for(var i=0;i<addCart.length;i++){
      var button=addCart[i];
      button.addEventListener("click",addCartClicked);
   }
if(cartIcon){
   document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked);
};
   

}
function buyButtonClicked(){
   alert("Your order is placed");
   var cartContent=document.getElementsByClassName("cart-content")[0];
   while(cartContent.hasChildNodes()){
      cartContent.removeChild(cartContent.firstChild);
   }
   updatetotal();
}
function removeCartItem(event){
   var buttonClicked=event.target;
   buttonClicked.parentElement.remove();
   updatetotal();
}
function quantityChanged(event){
var input=event.target;
if(isNaN(input.value)||input.value<=0){
   input.value=1;
}
updatetotal();
}
function addCartClicked(event){
var button=event.target;
var shopProducts=button.parentElement;
var title=shopProducts.getElementsByClassName("product-title")[0].innerText;
var price=shopProducts.getElementsByClassName("price")[0].innerText;
var productImg=shopProducts.getElementsByClassName("product-image")[0].src;
addProductToCart(title,price,productImg);
updatetotal();
}

function addProductToCart(title, price,productImg){
   var cartShopBox=document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems=document.getElementsByClassName("cart-content")[0];
  var cartItemsNames=cartItems.getElementsByClassName("cart-product-title");
  for(var i=0;i<cartItemsNames.length;i++){
   if(cartItemsNames[i].innerText==title){
   alert("You have already add this item to cart");
   return;
   }
  }
  var cartBoxContent=`
<img src="${productImg}" alt="" class="cart-img">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">
</div>
<i class="bx bxs-trash cart-remove"></i>
`;
cartShopBox.innerHTML=cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);
}




function updatetotal(){
   var cartContent=document.getElementsByClassName("cart-content")[0];
   var cartBoxes=cartContent.getElementsByClassName("cart-box");
   var total=0;
   var totalItems = 0;
   for(var i=0;i<cartBoxes.length;i++){
      var cartBox=cartBoxes[i];
      var priceElement=cartBox.getElementsByClassName("cart-price")[0];
      var quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
      var price=parseFloat(priceElement.innerText.replace("$",""));
      var quantity=quantityElement.value;
      total=total+(price*quantity);
      totalItems=totalItems+parseInt(quantity);
   }
      total=Math.round(total*100)/100;
      document.getElementsByClassName("total-price")[0].innerText="$"+total;
      document.getElementById("total-items-display").innerText=""+totalItems;
   
};

var shopnowbtn = document.getElementById("shopnow");
if(shopnowbtn){
   shopnowbtn.addEventListener('click', ()=> {
     scrollToElement("shopsection");
   });
};

var applynowbtn=document.getElementById("applynow");
if(applynowbtn){
   applynowbtn.addEventListener('click',()=>{
      scrollToElement("formstart");
   });
};

var discoverbtn=document.getElementById("discover");
if(discoverbtn){
   discoverbtn.addEventListener('click',()=>{
      scrollToElement("discoversection");
   });
};

var discovermbtn=document.getElementById("discoverm");
if(discovermbtn){
   discovermbtn.addEventListener('click',()=>{
      scrollToElement("discoverhead");
   });
};

var discoverobtn=document.getElementById("discoverour");
if(discoverobtn){
   discoverobtn.addEventListener('click',()=>{
      scrollToElement("discoverourhead");
   });
};

 function scrollToElement(elementId) {
   var element = document.getElementById(elementId);
   if (element) {
     // Scroll to the element
     element.scrollIntoView({ behavior: 'smooth' });
   };
 };

var applysubmit =document.getElementById("Applyform");
if(applysubmit){
applysubmit.addEventListener('click',()=>{
alert("Submitted");
});
};
function login() {
   var username = document.getElementById('loginUsername').value;
   var password = document.getElementById('Password').value;

   console.log('Login:', username, password);
   alert('Login:  '+ "username: "+ username+"  "+"password: "+ password);
   window.location.href = 'index.html';
}

function signup() {
   var username = document.getElementById('signupUsername').value;
   var password = document.getElementById('Password').value;
   var passwordr = document.getElementById('Passwordr').value;
   if(password==passwordr){
      console.log('Sign Up:', username, password, passwordr);
      alert('Login:  '+ "username: "+ username+"  "+"password: "+ password+"  "+"Re-password: "+ passwordr);
      window.location.href = 'login.html';
   }else{
      alert("Password mismatch");
   }
   
};

var showPasswordCheckbox = document.getElementById('showPassword');
var passwordInput = document.getElementById('Password');
var passre=document.getElementById("Passwordr");

if(showPasswordCheckbox){
   showPasswordCheckbox.addEventListener('change', ()=> {
      passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
      passre.type = showPasswordCheckbox.checked ? 'text' : 'password';
  });
};


