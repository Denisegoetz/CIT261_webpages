
let favColor = document.getElementById("favColor");
let favFood  = document.getElementById("favFood");
let favCandy = document.getElementById("favCandy");
let message  = " ";
let LsOutput = document.getElementById("LsOutput");



function doLocalStorage() {
    
    const color = favColor.value;
    const food  = favFood.value;
    const candy = favCandy.value;
 
    
    if (color && food && candy) {
        
        localStorage.setItem("favHue", color);
        localStorage.setItem("favGrub", food);
        localStorage.setItem("favSweets", candy);
        
//This reloads the page - right here!
        location.reload();
   } else {
       document.getElementById("message").innerHTML = "<b>Type in all three favorites, please.</b>";
        
   }
   console.log(localStorage);   
};

for (let i=0; i<localStorage.length; ++i) { 
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    LsOutput.innerHTML += key + ' ' + value + '<br>'; 
}


function clearLocalStorage() {
  //this clears everything out of localStorage    
    localStorage.clear();
 //This reloads the page - right here!
    location.reload();
}



function moreLocalStorage() {
//store an array
let colors = ['blue', 'orange', 'green', 'black'];
    localStorage.setItem('colors', JSON.stringify(colors));
// get array from local storage
const allColors = JSON.parse(localStorage.getItem('colors'));
    
// save associative array to local storage
let cars = {car: "Civic", minivan: "Odyssey", Truck: "Ford 150"};
localStorage.setItem('cars', JSON.stringify(cars));
const car = JSON.parse(localStorage.getItem('cars'));

let message2 = "";
    
 for (let j=0; j<localStorage.length; ++j) { 
    const key = localStorage.key(j);
    const value = localStorage.getItem(key);
    
    message2 += key + ' ' + value + '<br>'; 
  }   
    
  document.getElementById('message2').innerHTML = "Colors and Cars: <br>" + message2  + "<br>";  
}


  