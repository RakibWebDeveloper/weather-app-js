// Set current date and time
var currentDate = new Date();
var dateElement = document.getElementById("date");
dateElement.innerText = currentDate.toDateString();

// init UI
const ui = new UI();

// fetch city and country from ip api
// Select city and country

async function getCity() {
    const city = await fetch('https://ipapi.co/json');
    const data = await city.json();

    return data;
}

getCity().then(data => {
    // city.innerText = data.city;
    // country.innerText = data.country;
    const weather = new Weather(data.city);
    weather.getWeather().then(data => {
        ui.display(data)
    }).catch(err => {
        console.log(err)
        ui.notFound();
    });
});

// change city

document.getElementById("w-change-btn").addEventListener("click", function () {
    const city = document.getElementById("w-city").value;
    // console.log(city)
    if (city === "") {
        alert("At least type something lazy man 😡😡 ")
    } else {
        const weather = new Weather(city);
        weather.getWeather().then(data => {
            ui.display(data)
        }).catch(err => {
            console.log(err)
            ui.notFound();
        });
    }
})