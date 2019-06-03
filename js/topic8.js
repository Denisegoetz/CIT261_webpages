const image = document.querySelector('.img-one');
const emoji = document.querySelector('#emoji');

//listening - for mouse over image
image.addEventListener('mouseover', borderAppear); 

//listening - for mouse out of image
image.addEventListener('mouseout', borderDisapper); 


function borderAppear(e) {
    image.style.border = '40px solid azure'   
}
function borderDisapper(e) {
    image.style.border = '40px solid transparent'
}


//😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃
// Emoji's are treated as text instead of image. Use emoji or codepoint for unicode of emoji.
// RESOURCE for emoji's   https://emojipedia.org/
//
// Emoji codes are referenced differently in HTML verses CSS verses JavaScript
// Codepoint= U+1F603   HTML="&#x1F603   CSS="\1F603"   JAVASCRIPT=String.fromCodePoint(0x1F603);  **put 0x before the code
//😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃
function emojiAppear() {
    
  let emotion = document.querySelector('#emotion').value;    
    
  switch (emotion) {         
       case "Happy":
//  emoji.innerHTML = String.fromCodePoint(0x1F603);
                emoji.innerHTML = "😃";
                break;
        case "Sad":
                emoji.innerHTML = "😥";
                break;
        case "Angry":
                emoji.innerHTML = "😠";
                break;
        case "Scared":
                emoji.innerHTML = "😮";
                break;
            
       default:
                emoji.innerHTML = "😃";
     }
    
    emoji.style.fontSize ='100px';
}


function h3ColorChange() {
    //Change one property with style rather than using cssText (chance of typing error probability)
     document.querySelector("h3").style.color = "red";

}


function h4MultiChange() {
     //Use cssText to change multiple properties at once.
     //You write a string of CSS as if in the style sheet itself
     document.querySelector("h4").style.cssText = "color: blue; font-size: 35px;";

}

//This changes all my li's but I ran into a problem.  It changed my nav li...not good. That's why I use the class in the odd case.
function liMultiChange() {
 var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
 var even= document.querySelectorAll('li:nth-child(even)');

     for(var i = 0; i < odd.length; i++){
       odd[i].style.backgroundColor = '#f4f4f4';
       odd[i].style.marginRight = '500px';
       even[i].style.backgroundColor = '#ccc';
       even[i].style.marginRight = '500px';
     }

}