class UI {
    constructor() {
        this.city = document.getElementById("city");
        this.country = document.getElementById("country");
        this.desc = document.getElementById("description");
        this.temperature = document.getElementById("temperature");
        this.icon_desc = document.getElementById("icon-desc");
        this.humidity = document.getElementById("humidity");
        this.wind = document.getElementById("wind");
        this.visibility = document.getElementById("visibility");
    }

    display(weather) {
        this.city.textContent = weather.name;
        this.country.textContent = weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.temperature.textContent = Math.floor(weather.main.temp - 273.15) +" ";
        this.humidity.textContent = weather.main.humidity + "%";
        this.wind.textContent = weather.wind.speed + "km/h";
        this.visibility.textContent = weather.visibility;
    }
}