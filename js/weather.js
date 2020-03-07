class Weather {
    constructor(city) {
        this.city = city;
        this.app_id = "9f6b320e69f581c2f71c5b467de136a2";

    }
    // fetch weather info from api
    async getWeather() {
        const resultWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.app_id}`);
        const data = await resultWeather.json();
        return data;
    }

}