const apiKey = "24fb8f0b0a52a095cc7c5483fdd61cfe" ;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector('.weather-icon') 


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`) ;

    if(!response.ok){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';

        return ;
    }

    var data = await response.json() ;

    console.log(data)
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".description").innerHTML = data.weather[0].main
    document.querySelector(".country").innerHTML = data.sys.country


    if((data.weather[0].main == 'Clouds' && data.main.temp > 10) || data.weather[0].main == 'Smoke'){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == 'Haze'){
        weatherIcon.src = "images/haze.png"
    }
    else {
        weatherIcon.src = "images/snow.png"
    }

    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = "block"
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value) ;
})