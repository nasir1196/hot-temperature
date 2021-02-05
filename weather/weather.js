
// Create function for handler 
function weatherHandler() {
    const api = 'e6fe2b02335be3ae5bb685c9c51e70c1';
    const inputCity = document.getElementById('input-city').value;
    const showCity = document.getElementById('show-city').innerText = inputCity;
    getWeather(showCity, api);
}

// create function for get weather 
function getWeather(city, api) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${api}`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main;
            const tempValue = temperature.temp - 275;
            const tempNewValue = Math.round(tempValue);
            const cityTemp = document.getElementById('city-temp').innerText = tempNewValue;

            const newHaze = data.weather[0].description;
            const getHaze = document.getElementById('get-haze').innerText = newHaze;

            const changeImage = data.weather[0];
            const changeIcon = changeImage.icon;
            const updateIcon = document.getElementById('get-icon');
            updateIcon.src = `https://openweathermap.org/img/wn/${changeIcon}@2x.png`;
        })
    // .catch(error => console.log(error));
}
