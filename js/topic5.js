//****   Try another API portion   ****//

var container = document.getElementById("jsonGet");


function jsonGetDemo() {
    
var myRequest = new XMLHttpRequest();
// SAVING THESE BECAUSE IT TOOK SO LONG TO FIND THEM
//myRequest.open('GET', 'https://www.boredapi.com/api/activity/');
//myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//myRequest.open('GET', 'https://www.metaweather.com/api/location/(woeid)/(date)/');
//myRequest.open('GET', 'https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback');
//myRequest.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699');
//myRequest.open('GET', 'https://swapi.co/api/starships/');

    
  myRequest.onreadystatechange = function() {
   //   console.log(myRequest.responseText);
      var htmlString = "";
      
      if (myRequest.readyState == 4 && myRequest.status == 200) {
         var myData = JSON.parse(myRequest.responseText);
         
         for (i=0; i < myData.results.length; i++){
        
         htmlString += "<p><b> " + myData.results[i].city + "</b>  &nbsp; Country= " + myData.results[i].country + " Count= " + myData.results[i].count + "</p>";
         } 
      };
      
      if (myRequest.status == 404) {
         htmlString += "Air Quality Data Resoucce NOT AVAILABLE - 404";
      };
      
    container.insertAdjacentHTML('beforeend', htmlString);
  }
myRequest.open('GET', 'https://api.openaq.org/v1/cities', true);      
myRequest.send();
    
}