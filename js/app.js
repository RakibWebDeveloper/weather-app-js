// Set current date and time
var currentDate = new Date();
var dateElement = document.getElementById("date");
dateElement.innerText = currentDate.toDateString();


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
    console.log(data.city);
    
});