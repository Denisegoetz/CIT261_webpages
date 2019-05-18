//****   Try another API portion   ****//

var container = document.getElementById("jsonGet");


function jsonGetDemo() {
    
var myRequest = new XMLHttpRequest();
//myRequest.open('GET', 'https://www.boredapi.com/api/activity/');
//myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//myRequest.open('GET', 'https://www.metaweather.com/api/location/(woeid)/(date)/');
//myRequest.open('GET', 'https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback');
//myRequest.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699');
myRequest.open('GET', 'https://api.openaq.org/v1/cities');
//myRequest.open('GET', 'https://swapi.co/api/starships/');


  myRequest.onload = function() {
   //   console.log(myRequest.responseText);
      var myData = JSON.parse(myRequest.responseText);
      var htmlString = "";
      console.log(myData);

      for (i=0; i < myData.results.length; i++){
        
        htmlString += "<p><b> " + myData.results[i].city + "</b>  &nbsp; Country= " + myData.results[i].country + " Count= " + myData.results[i].count + "</p>";
      }
      container.insertAdjacentHTML('beforeend', htmlString);
    };
myRequest.send();
    
}