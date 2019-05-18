
//****   For Loop   ****//

function demoForLoop() {
        var loopMsg = "";
        for (var i = 1; i < 11; i++)
              loopMsg += i + " loop, ";

        document.getElementById('forLoop').innerHTML = loopMsg;

}

function forEachLoop() {
         var myArray = [10, 20, 30, 40, 50];
         var totalArray = 0;      
         myArray.forEach(function(item, index){
               totalArray = totalArray + item;
             }
            );
      document.getElementById('forEachLoop').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "for each total array = " + totalArray;                        
 }

function whileLoop() {
    var princess = ['Cinderella', 'Snow White', 'Rapunzel', 'Ariel', 'Belle', 'Jasmine'];
    
    // while loop- through princess array
    var j = 0;
    pList = "";
    while (j < princess.length) {
        if (princess[j] === 'Ariel'){
            princess[j] = princess[j].toLowerCase();
        }
        pList += princess[j] + ", ";
        j++;
    }
   document.getElementById('whileLoop').innerHTML = pList;
    
}
         
function doWhileLoop() {
        var cnt = 1;
        var loopMsg = "";
        do {
            
            loopMsg += "<p> " + cnt + "  Scoop(s) of ice cream </p>";
            cnt += 1;
        } while (cnt <= 5)
              
        document.getElementById('doWhileLoop').innerHTML = loopMsg;
}

//****   Conditional Statements portion   ****//

function ifElse() {
    var numberChosen = document.getElementById("numberInput").value;
    let message = "";
    
    if (numberChosen > 5) {
        
        message = "<p>Hey, your number is higher than 5. </p>"
    }else{
        message = "<p>Hey, your number between 1 and 5, or 5 itself.</p>"
    }
    document.getElementById('ifElse').innerHTML = message;
}



function ifElseif() {
    var visitor= document.getElementById("visitorInput").value;
    let message = "";
    
    if(visitor == "Mom"){
	message = "<p>Ready to go shopping?</p>";
    }else if(visitor == "Neighbor"){
	message = "<p>Want to borrow eggs?</p>";
    }else if(visitor == "Police"){
	message = "<p>Did my son call 911 again?</p>";
    } else {
	message = "<p>How do you do?</p>";
    }
    
    document.getElementById('ifElseif').innerHTML = message;
}


function switchFood() {
    var foodChoice= document.getElementById("foodInput").value;
    let message = "";
    
    switch (foodChoice) {  
       case "milk":        
       case "Milk":
                message = "Milk is a good choice. Approximate Price is $2.50.";
                break;
        case "eggs":
        case "Eggs":
                message = "Eggs are a great choice. They are cheap, and a protein. Approximate Price is $1.89.";
                break;
        case "bread":
        case "Bread":
                message = "Bread is an okay choice. It's cheap, but you'll be hungry soon. Approximate Price is $2.39.";
                break;
        case "cereal":
        case "Cereal":
        case "oatmeal":
        case "Oatmeal":
                message = "Cereal/Oatmeal is an okay choice depending on which type, but you'll be hungry soon. Approximate Price is $3.24.";
                break;
            
       default:
                message = "Don't buy junk food. It costs more and you'll be hungry fast.";
     }
            
      document.getElementById('switchChoice').innerHTML = message;
}


//****   Array portion   ****//

var places = ['Paris',
              'England - Big Ben’s mighty clock',
              'South Dakota - Admire Mount Rushmore',
              'New York - Statue of Liberty',
              'Arizona - Grand Canyon',
              'Chile - Easter Island',
              'Greece - Acropolis of Athens',
              'Russia - Saint Basil’s Cathedral & the Red Square',
              'England - Stonehenge',
              'China - Great Wall of China',
              'Rome, Italy - Visit the Colosseum',
              'Peru - Machu Picchu',
              'India - Taj Mahal',
              'Brasil - Hike to Christ the Redeemer',
              'Australia - Great Barrier Reef',
              'New York - Niagara Falls'];

function showChoices() {
        // Read the choices from the user.
        var choice1 = document.getElementById('firstChoice').value;
        var choice2 = document.getElementById('secondChoice').value;
        var choice3 = document.getElementById('thirdChoice').value;
    
        var textChoice1 = places[choice1 - 1];
        var textChoice2 = places[choice2 - 1];
        var textChoice3 = places[choice3 - 1];

        // Display choices to the user.
        document.getElementById('WantToGo1').innerHTML = textChoice1;
        document.getElementById('WantToGo2').innerHTML = textChoice2;
        document.getElementById('WantToGo3').innerHTML = textChoice3;
    }

function hideShowWords(id) {
    
// I thought I wanted the heading to toggle, but I just want it to appear when the button is pressed.
    
        var divelement = document.getElementById(id);
        divelement.style.display = 'block';

//         if(divelement.style.display == 'none')
//            divelement.style.display = 'block';
//         
//         else
//            divelement.style.display = 'none';
         
}


//****   ASSOCIATIVE Array portion   ****//
function AArray() {
    
  // create an object or an "associative array"
    let actor = {
    fname: "Chris",
    Lname: "Hemsworth", 
    actor: true,
    age: 35,
    features: ["Tall","Blond","Buff","Australian","Married"]
   };     

   var info = actor.fname + " " + actor["Lname"] + " is " + actor.age + " years old and " + actor.features[3] + "."; 
   document.getElementById('AArray').innerHTML = info;
    
}
    
//****   FUNCTION  portion   ****//

function ageYear(year, age){
    var currentYear = 2019;
    var yearDiff    = year - currentYear;
    var futureAge   = age + yearDiff;
    
    return futureAge;
    
}

function getYearInput() {
    var year = parseInt(document.getElementById("yearInput").value);
    var age = parseInt(document.getElementById("ageInput").value);
     
    if (!year || !age) {
            document.getElementById("outputAge").innerHTML = "Error: Please enter the (4 digit year) and your current age.";
    }else {
            var futureAge = ageYear(year, age);
            document.getElementById("outputAge").innerHTML = "You will be " + futureAge + " in the year " + year + ".";
    }
    
     
}


