// Set current date and time

var currentDate = new Date();

var dateElement = document.getElementById("date");
dateElement.innerText = currentDate.toDateString();

// fetch city and country from ip api

async function getCity() {
    const city = await fetch('https://ipapi.co/json');
    const data = await city.json();
    return data;
}

console.log(getCity());
