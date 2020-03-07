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
        this.con = document.getElementsByClassName("weather");
    }

    display(weather) {
        document.getElementById("not-found").style.display = "none";
        document.getElementById("vis").style.display = "block";

        this.city.textContent = weather.name;
        this.country.textContent = ", " + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.temperature.textContent = Math.floor(weather.main.temp - 273.15) +"°c ";
        this.humidity.textContent = weather.main.humidity + "%";
        this.wind.textContent = weather.wind.speed + "km/h";
        this.visibility.textContent = weather.visibility;
        this.icon_desc.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    }
    notFound() {
        this.city.textContent ="Not Found";
        this.country.textContent = "";
        this.desc.textContent = "";
        this.temperature.textContent = "";
        this.humidity.textContent = "";
        this.wind.textContent = "";
        this.visibility.textContent = "";
        this.icon_desc.src = "";

        // const element = `<h1 class="display-3 py-3 text-center text-warning">Not Found!!!</h1>`
        document.getElementById("vis").style.display = "none";

        document.getElementById("not-found").style.display = "block";

    }
}
