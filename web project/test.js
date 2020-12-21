





/* function myFunction()
{
 carName = "Volvo";

}

function abc()
{
    
    myFunction();
    document.getElementById("demo").innerHTML = carName;
} */


$('form[name="basket"]').submit(function(event ) {
    alert("cat");

const deletButton = document.getElementById('delet');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

//const inputField2 = document.getElementById('input2');





minusButton.addEventListener('click', event => {
    alert("minus");
  event.preventDefault();
  const currentValue = Number(inputField.value) ||0;
  inputField.value = currentValue - 1;
  inputField2.value = currentValue - 1;
    

});

plusButton.addEventListener('click', event => {
    alert("add");
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
inputField2.value = currentValue + 1;
   
  
   
});
    

deletButton.addEventListener('click', event => {
    alert("delete");
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue == 0;
  inputField2.value = currentValue == 0;

    
    
});


/*function createItem() {
    alert("1");
    
  localStorage.mytime = inputField;
}

function myFunction() {
    alert("2");
  var x = localStorage.getItem("mytime");
  document.getElementById("demo").innerHTML = x;
} */





 
            localStorage.setItem(inputField); 
             document.getElementById("demo").innerHTML = x;
            //window.location.href = "index.html";  // redirect to shop page
          
            
        }



    

    
   /*   var clicks = 0;
    function More() {
        
        clicks += 1;
        
    let product1 = {
  name: "Lily",
  age: 8,
  quantity:clicks,

  toString() {
    return `{name: "${this.name}", age: ${this.age} , quantity: ${this.quantity}}`;
  }
};

alert(product1); // {name: "John", age: 30}

    
    } */

        
    /*    alert("cat");
        clicks += 1;
        localStorage.mytime = clicks;
        var x = localStorage.getItem("mytime");
        var num1 = parseInt(x);
    
//var product1 = '{"name":"Daisy", "price":5 , "quantity":x}';
var product2 = '{"name":"Lily", "price":8 , "quantity":1}';
var product3 = '{"name":"Rose", "price":7 , "quantity":1}';
var product3 = '{"name":"Sunflower", "price":4 , "quantity":1}';
var product4 = '{"name":"Cornflower", "price":2 , "quantity":1}';
    
  //  var myObj = JSON.parse(product1);
// document.getElementById("demo").innerHTML = myObj.quantity;
    
    var myObj2 = JSON.parse(product2);
document.getElementById("demo1").innerHTML = myObj2.quantity;
    
    }; */

  
