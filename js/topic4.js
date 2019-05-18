//****   Star Wars portion   ****//

var container = document.getElementById("jsonGet");
function jsonGetDemo() {
    
var myRequest = new XMLHttpRequest();
//myRequest.open('GET', 'https://www.boredapi.com/api/activity/');
//myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//myRequest.open('GET', 'https://www.metaweather.com/api/location/(woeid)/(date)/');
//myRequest.open('GET', 'https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback');
//myRequest.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699');
//myRequest.open('GET', 'https://api.openaq.org/v1/cities');
myRequest.open('GET', 'https://swapi.co/api/starships/');


  myRequest.onload = function() {
   //   console.log(myRequest.responseText);
      var myData = JSON.parse(myRequest.responseText);
      var htmlString = "";

      for (i=0; i < myData.results.length; i++){
        
        htmlString += "<p> <b>" + myData.results[i].name + "</b> - &nbsp;" + myData.results[i].starship_class + " ship classifcation </p>";
      }
      container.insertAdjacentHTML('beforeend', htmlString);
    };
myRequest.send();
    
}

//****   STRINGIFY  ****//

function jsonStrDemo() {
    
    // create an object
    let actor = {
    fname: "Chris",
    Lname: "Hemsworth", 
    actor: true,
    age: 35,
    features: ["Tall","Blond","Buff","Australian","Married"],
    message: function() {return "You are my hero!";}
   };     
    // json stringify to convert actor
    Avenger = JSON.stringify(actor);

    document.getElementById('jsonStringify').innerHTML =  Avenger;
}

//*****   PARSE   *****//

function jsonParseDemo() {
    
    // actor = JSON string
    let actor = '{"fname":"Chris","Lname":"Hemsworth","actor":true,"age":35,"features":["Tall","Blond","Buff","Australian","Married"]}'
    
    // parse string
    actor = JSON.parse(actor);
   
    let actorObject = "";
    let key;
    
    for (key in actor) {
    actorObject += key + ": " + actor[key] + "<br>";
   }
document.getElementById('jsonParse').innerHTML =  actorObject;

    
}

