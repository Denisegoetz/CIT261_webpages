var titleString = "How-To Topics of Genealogy";
var strArray = titleString.split("");
var loopTimer;

function frameLooper() {
    
    if (strArray.length > 0) {
   
        document.getElementById("title-heading").innerHTML += strArray.shift();
    }else {
        
        clearTimeout(loopTimer);
    }
        
    loopTimer = setTimeout("frameLooper()", 70);
    
}

frameLooper();
