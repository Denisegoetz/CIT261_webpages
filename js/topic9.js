//This code figures out if user scrolled to the bottom of the page.
//window.addEventListener(scroll, () => {
//    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//    const scrolled = window.scrollY;
//    
//    if (Math.ceil(scrolled) === scrollable) {
//        
//        console.log(" at the bottom now.");
//    }
//    
//    
//});

window.addEventListener('scroll', scrollAppear);

function scrollAppear(){
    let hideText = document.querySelector('.hideText');
    let textPositiion = hideText.getBoundingClientRect().top;
     //use window.innerheight because it will adapt to whatever screen size the user has. Gets how big the screen is.
    let screenPosition = window.innerHeight / 2;
    
    
    if (textPositiion < screenPosition){
        
        hideText.classList.add('showText'); 
    }else{
        
        hideText.classList.remove('showText');
    }
    
}

//These 7 lines code are set off by an onclick listener on the button. Then it causes a slide animation to come in. 
const btn    = document.getElementById('btn');
const sEmoji = document.getElementById('slideEmoji');

function slideIn() {
    
    slideEmoji.innerHTML = "😃";
    slideEmoji.style.fontSize ='100px';
    
    sEmoji.classList.add("slideEmoji");
    
}

// This is a reset to the animation using the animation listener. It will listen for the animation to end, then I can remove my class, resetting 
//  to be able to run again. 
sEmoji.addEventListener('animationend', animationReset);

function animationReset(e) {
sEmoji.classList.remove('slideEmoji');
}


