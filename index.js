const racingElement = document.getElementById("racing");

function raceJeffGordon() {
    console.log("Racing with Jeff Gordon!");
}

document.addEventListener("DOMContentLoaded", () => {
    startCountdown();

    fetch("http://localhost:3000/raceJeffGordon")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);
           
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
        let addr = new URL("https://racingmadmods/winbig-racingwheels.com/API/URL_API");

});

