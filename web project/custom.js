 var loggedin=localStorage.getItem('loggedIn'); 

    if (loggedin==1) {
        // change the text from Login to Logout
        $("#loginBtn").html("Logout");
      
    } else
    {
   
    } 

$("#loginBtn").button().click(function(){
        if (loggedin==1) {
            // set the flag so that user is not logged in
            localStorage.setItem('loggedIn',0);
            window.location.href = "login.html";
        }  else 
            window.location.href = "login.html";

    });       
      

$('form[name="login"]').submit(function(event ) {
        var email=$('input[name="email"]').val();
        var password =$('input[name="password"]').val();
        if (email=="test@email.com" && password=="123")  {   
            // successful login, user redirected to shop.html
            localStorage.setItem('loggedIn',1);    
            window.location.href = "index.html";  // redirect to shop page
          
            
        }
        else {
            // login unsuccessful, error message appears
            localStorage.setItem('loggedIn',0);
            document.getElementById("wrongLogin").style.backgroundColor="#f2503a";
            document.getElementById("wrongLogin").style.padding="3%";
            document.getElementById("wrongLogin").style.marginLeft="15%";
            document.getElementById("wrongLogin").style.marginRight="15%";
             document.getElementById("wrongLogin").style.color="white";
            document.getElementById("wrongLogin").innerHTML = "Wrong Login - Please try again!";   
        
        }
        return false;
    });  

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

   /* var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    } */

    var addToCartButtons = document.getElementsByClassName('buyBtn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

/*function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
    window.location.href = "checkout.html ";
  
    
} */



function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('card-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
   
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
        var cartRowContents = `
        <div class="cart-item cart-column">
            
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents 
    cartItems.append(cartRow) 
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
 
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
    localStorage.storeTotal = total;
}

function TotalCarryCart()
{
  var x = localStorage.getItem("storeTotal");
  document.getElementById("TotalCheckout").innerHTML = x;
    
    if (loggedin==1) 
    {
    document.getElementById('getFirstName').value="Max";
     document.getElementById('getLastName').value="Jo";
    document.getElementById('getAddress').value="11 walking street";
    }
    else
    {
        alert("You are not logged in!");
    }
}







function validateForm() {
  var cardName = document.forms["personalDetails"]["cardName"].value;
  var cardNum = document.forms["personalDetails"]["cardNumber"].value;
  var CVC = document.forms["personalDetails"]["cardName"].value;
  if (cardName=="123" && cardNum=="123" && CVC=="123") {
    alert("Thank you for the order!");
    window.location.href = "index.html";  
    return false;
  }
}







 

/*
var product1 = '{"name":"Daisy", "price":5 , "quantity":1}';
var product2 = '{"name":"Daisy", "price":5 , "quantity":1}';
var product3 = '{"name":"Daisy", "price":5 , "quantity":1}';
var product3 = '{"name":"Daisy", "price":5 , "quantity":1}';
var product4 = '{"name":"Daisy", "price":5 , "quantity":1}';

var countDaisy=0;
function buyDaisy()
{
    var DaisyPrice=5;
    var TotDaisyPrice =0;
    countDaisy++;
   TotDaisyPrice = DaisyPrice * countDaisy;
    localStorage.DTot = TotDaisyPrice;
    localStorage.Dcount = countDaisy;
    alert("count:" + countDaisy + "Total Price:" + TotDaisyPrice);
    
   
   
}

var countLily=0;
function buyLily()
{
    var LilyPrice =8;
    var TotLilyPrice =0;
    countLily++;
   TotLilyPrice = LilyPrice * countLily;
   localStorage.LTot = TotLilyPrice;
   localStorage.Lcount = countLily;
   alert("count:" + countLily + "Total Price:" + TotLilyPrice);
    
}


var countRose=0;
function buyRose()
{
   var RosePrice=7;
   var TotRosePrice =0;
   countRose++;
   TotRosePrice = RosePrice * countRose;
    localStorage.RTot = TotRosePrice;
   localStorage.Rcount = countRose;
   alert("count:" + countRose + "Total Price:" + TotRosePrice);
}

var countSunflower=0;
function buySunflower()
{
   var SFPrice=4;
   var TotSFPrice =0;
   countSunflower++;
   TotSFPrice = SFPrice * countSunflower;
   localStorage.STot = TotSFPrice;
   localStorage.Scount = countSunflower;
   alert("count:" + countSunflower + "Total Price:" + TotSFPrice);
}

var countCF=0;
function buyCF()
{
   var CFPrice=2;
   var TotCFPrice =0;
   countCF++;
   TotCFPrice = CFPrice * countCF;
   localStorage.CTot = TotCFPrice;
   localStorage.Ccount = countCF;
   alert("count:" */




 









