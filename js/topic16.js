var titleString = "Your Family Tree is Waiting";
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

//**************************************************************
// The following code is for the Weather app
//



let appId = 'a1365cd7f2e4b60fe312d34355ada617';
let units = 'imperial';
let searchMethod;

function getSearchMethod(searchTerm) {

    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else
        searchMethod = 'q';
      
}


function searchWeather(searchTerm){
    getSearchMethod(searchTerm);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {return result.json();}).then(result => { init(result); })
    
    
}


function init(resultFromServer ) {
    console.log(resultFromServer);
    
    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');
    
    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';
    
    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
    
    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
    
    windSpeedElement.innerHTML = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + 'm/s';
    
    cityHeader.innerHTML = resultFromServer.name;
    
    humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%'; 
    
    
}


   
document.getElementById('searchBtn').addEventListener('click', () => {    let searchTerm = document.getElementById('searchInput').value;
   if(searchTerm) {
       searchWeather(searchTerm);
       }
})
                                                                      
                                                            







