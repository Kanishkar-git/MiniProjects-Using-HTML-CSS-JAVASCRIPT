// Select elements to update using querySelector
const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

// Function to calculate the next New Year's Day
function getNextNewYear() {
    const currentYear = new Date().getFullYear();
    return new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
}

// Initialize the target date
let targetDate = getNextNewYear();

// Update the countdown every second
function updateCountdown() {
    const currentDate = new Date().getTime(); // Get current time
    const remainingTime = targetDate - currentDate; // Calculate remaining time

    if (remainingTime <= 0) {
        // Set target date to the next year's New Year
        targetDate = getNextNewYear();
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the HTML
    daysElement.innerText = days < 10 ? "0" + days : days;
    hoursElement.innerText = hours < 10 ? "0" + hours : hours;
    minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Start the countdown
updateCountdown(); // Call immediately to avoid delay
setInterval(updateCountdown, 1000); // Update every second
