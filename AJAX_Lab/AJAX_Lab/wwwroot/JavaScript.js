document.addEventListener('DOMContentLoaded', () => {
            load_weather();
        });

function load_weather(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://localhost:7200/WeatherForecast", true);
    request.send();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let weather = JSON.parse(this.responseText);
            draw_weather(weather);
        }
    }
}
function draw_weather(weather){
    let place = document.querySelector(".main-block");
    place.innerHTML = weather.map(forecast =>`
            <div class="weather-card" style="${show_color(forecast.temperatureC)}">
            <div class="location">
                <h1 class="city">Краснодар</h1>
                <p class="date">${forecast.date}</p>
            </div>
    
            <div class="weather-main">
                <div class="temperature">${forecast.temperatureC}°C</div>
            </div>
    
            <div class="weather-description">${forecast.summary}</div>
    
            <div class="weather-details">
                <div class="detail">
                    <span class="detail-value">${forecast.wind} км/ч</span>
                    <span class="detail-label">Ветер</span>
                </div>
                <div class="detail">
                    <i class="fas fa-tint"></i>
                    <span class="detail-value">${forecast.wet}%</span>
                    <span class="detail-label">Влажность</span>
                </div>
            </div>
        </div>
        `).join('');
}

function show_color(temperature){
    let color_string;
    if (temperature < -5) color_string = "background: rgba(105, 128, 255, 0.9);"
    else if (temperature >= -5 && temperature < 7) color_string = "background: rgba(151, 166, 249, 0.9);"
    else if (temperature >= 7 && temperature < 25) color_string = "background: rgba(255, 255, 161, 0.9);"
    else color_string = "background: rgba(255, 199, 80, 0.9);"
    return color_string
}

document.querySelector(".button-update").addEventListener('click', function(){
    let place = document.querySelector(".main-block");
    place.innerHTML = "";
    load_weather();
})