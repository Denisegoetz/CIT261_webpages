//Awesome Accordian - my fav//

var accordions = document.getElementsByClassName("accordion2");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}



// Carousel javascript  //

const carouselSlide  = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons

const prevBtn   = document.querySelector('#prevBtn');
const nextBtn   = document.querySelector('#nextBtn');

//counter

let counter = 1;
const size  = carouselImages[0].clientWidth;


// position of x - size of image + 1 
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


// Button Listeners

nextBtn.addEventListener('click',function() {
    //the if is to correct a bug if a person clicks too fast and the transitionend listener can't keep up
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition  = "transform 0.4s ease-in-out"; 
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
                         
prevBtn.addEventListener('click',function() {
    //the if is to correct a bug if a person clicks too fast and the transitionend listener can't keep up
    if (counter <= 0) return;
    carouselSlide.style.transition  = "transform 0.4s ease-in-out"; 
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});                         
                      

carouselSlide.addEventListener('transitionend',function() {
    // after the click is done, determine where you are. if at the lastClone then take off the transition to reposition. Then
    // set the counter at the beginning slide. 
    
     if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition  = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
     }
    
     if(carouselImages[counter].id === 'first Clone'){
        carouselSlide.style.transition  = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
     }    
    
});






 