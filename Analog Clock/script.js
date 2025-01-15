const hourHand = document.querySelector('.hrs');
const minuteHand = document.querySelector('.min');
const secondHand = document.querySelector('.sec');

function updateClock() {
    const now = new Date();

    // Get the current hours, minutes, and seconds
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate the rotation for each hand
    const secondRotation = (seconds / 60) * 360;
    const minuteRotation = (minutes / 60) * 360 + (seconds / 60) * 6; // Minute hand moves slightly with seconds
    const hourRotation = (hours % 12 / 12) * 360 + (minutes / 60) * 30; // Hour hand moves slightly with minutes

    // Apply the rotation to the needles
    secondHand.style.setProperty('--rotation', secondRotation);
    minuteHand.style.setProperty('--rotation', minuteRotation);
    hourHand.style.setProperty('--rotation', hourRotation);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
