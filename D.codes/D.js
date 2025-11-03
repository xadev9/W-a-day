// Set the last time you saw her
const lastSeen = new Date('2025-07-13T12:00:00'); // change to your date

function updateCounter() {
    const now = new Date();
    let diff = now - lastSeen;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    const seconds = diff %60;

    document.getElementById('counter').textContent = 
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// update every second now
setInterval(updateCounter, 1000);
updateCounter(); // initial call

// update every minute
setInterval(updateCounter, 60000);
updateCounter(); // initial call

// Gradient follows cursor
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #2c2c54, #1e1e2f)`;
});
