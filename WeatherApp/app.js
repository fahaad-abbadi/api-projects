let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


//fetching weather details
let getWeather = () => {
    let cityValue = cityRef.value;

    //if input field is empty
    if(cityValue.length == 0)
    {
        result.innerHTML = `<h3 class = "msg">Please enter a city name</h3>`
    }
    else{
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`
        
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);

        result.innerHTML = `
        <h2 class = "city">${data.name}</h2>
        <h4 class = "weather">${data.weather[0].description}</h4>
        
        <h1 class = "temp-1">${data.main.temp} &#176;</h1>
        
        
        <div class="temp-container">
        <div>
            <h4 class="title">
                min
            </h4>

            <h4 class="temp-max">
                ${data.main.temp_min}
            </h4>
        </div>

        <div>
            <h4 class="title">max</h4>
            <h4 class="temp-min">
                ${data.main.temp_max}
            </h4>
        </div>
    </div>`
        })
        .catch(() => {
            result.innerHTML = `
            <div class = "error">Enter a valid city name</div>`
        })
    }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);