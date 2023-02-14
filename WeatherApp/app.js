let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


//fetching weather details
let getWeather = () => {
    let cityValue = cityRef.value;

    //if input field is empty
    if(cityValue.length == 0)
    {
        result.innerHTML = `<h3>Please enter a city name</h3>`
    }
    else{
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`
        
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weahter[0].main);
            console.log(data.weahter[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
        })
        .catch(() => {
            
        })
    }
};

window.addEventListener("load", getWeather);