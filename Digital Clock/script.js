function updateTime() {
    const clock = document.querySelector('.clock');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour format for 0 hours
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours} : ${minutes} : ${seconds} ${ampm}`;
    clock.textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize the clock immediately
updateTime();
