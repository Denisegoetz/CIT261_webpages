
window.addEventListener("keypress", checkKeyPress, false);

const clickEmoji  = document.querySelector('#clickEmoji');
//listening - for doubleClick on emoji
clickEmoji.addEventListener('click', clickedEmoji); 

const dClickEmoji  = document.querySelector('#dClickEmoji');
//listening - for doubleClick on emoji
dClickEmoji.addEventListener('dblclick', dblClickedEmoji); 


function clickedEmoji(){

    document.getElementById("clicked").innerHTML = "Hey, you clicked on me!";
}


function dblClickedEmoji(){

    document.getElementById("stopclicking").innerHTML = "Hey, stop clicking on me!";
}




function checkKeyPress(key){
        
    switch (key.keyCode) {  
       case 65:        
       case 97:
              enterKeys.style.fontSize ='90px';
              enterKeys.innerHTML = "A is for 🍎";
                break;
        case 66:
        case 98:
              enterKeys.style.fontSize ='90px';
              enterKeys.innerHTML = "B is for 🍌";
                break;
        case 67:
        case 99:
              enterKeys.style.fontSize ='90px';
              enterKeys.innerHTML = "C is for 🐈";
                break;
        case 68:
        case 100:
              enterKeys.style.fontSize ='90px';
              enterKeys.innerHTML = "D is for 🐶";
                break;
            
        case 69:
        case 101:
              enterKeys.style.fontSize ='90px';
              enterKeys.innerHTML = "E is for 🐘";
                break;
        case 70:
        case 102:
              enterKeys.style.fontSize ='90px';
              enterKeys.innerHTML = "F is for 🦊";
                break;    
            
       default:
              enterKeys.style.fontSize ='70px';
              enterKeys.innerHTML = "What's that letter? 🧐 " + key.key + " ?";    
     }
    
}


// add mouseover and mouseout event that changes image
const food = document.getElementById('food');
food.addEventListener('mousedown', function() {
    food.src = 'meal.jpg';
});
food.addEventListener('mouseup', function() {
    food.src = 'groceries.jpg';
    
});




//touch events - touchstart, touchend, touchmove, touchcancel
//There is NO tap, doubletap, swipe, swipeleft, swiperight, rotate, pinch, or zoom
//You would have to create those events yourself by connecting to the touch events.
//work on devices that are touch capable
//No error on other devices because 'touchstart' is just a name like winlottery
//The event will probably just never happen on my laptop

document.querySelector('.box3').addEventListener('touchstart', colorTouch);
//document.querySelector('.box3').addEventListener('touchend', f);
//document.querySelector('.box3').addEventListener('touchmove', f);

let box = document.getElementById('box3');

function colorTouch(e){
 //   console.log( e.touches, e.type );
    
    let x = e.touches[0].clientX;
 //   let y = e.touches[0].clientY;
    let screenWidth = screen.width;
    
    console.log(screenWidth);
    
 //   console.log("x= " + x + "y= " + y);

    if (screenWidth < 768) {
    
        if (x <= 96) {
        box.style.backgroundColor = '#66cc00';
        }
        if (x >= 96) {
        box.style.backgroundColor = 'red';
        }
        if (x >= 160) {
        box.style.backgroundColor = 'blue';
        }
        if (x >= 240) {
        box.style.backgroundColor = 'magenta';
        }
   }else if(screenWidth >= 768) {
       if (x <= 318) {
        box.style.backgroundColor = '#66cc00';
        }
        if (x >= 318) {
        box.style.backgroundColor = 'red';
        }
        if (x >= 382) {
        box.style.backgroundColor = 'blue';
        }
        if (x >= 452) {
        box.style.backgroundColor = 'magenta';
        } 
    }
 
 }



 let width=100;
 let difference=2;
 let interveralID=0;
 //document.getElementById("img1").style.width=width;
 
 function increase() {
     
    clearInterval(interveralID);
    interveralID=setInterval(expand,10);
 }
 function decrease() {
    clearInterval(interveralID);
    interveralID=setInterval(shrink,10);
 }
 function expand() {
    if(width<200) {
       width = width+difference;
       document.getElementById("img1").width=width;
     //  console.log(width);
     } else  {
        clearInterval(interveralID);
     }
 }
 function shrink(){
    if (width>100) {
      width = width-difference;
      document.getElementById("img1").width=width;
    //  console.log(width);
    }else  {
       clearInterval(interveralID);
   } 
 }




