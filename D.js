// ...existing code...
const lastSeen = new Date('2025-08-27T12:22:00'); // change to your date

function updateCounter() {
    const now = new Date();
    let diff = now - lastSeen;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById('counter').textContent = 
        `${days} Days ${hours} Hours ${minutes} minutes ${seconds} seconds`;
}

// update every second only
setInterval(updateCounter, 1000);
updateCounter(); // initial call

// ...existing code...
// update every minute
setInterval(updateCounter, 60000);
updateCounter(); // initial call

// Gradient follows cursor
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #94043eff 1%, #010000ff 7%)`;
});
document.addEventListener('click', (e) => {
    // Create ripple
    const ripple = document.createElement('div');
    ripple.className = 'ripple-gradient';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    // Remove ripple after 3 seconds
    setTimeout(() => {
        ripple.remove();
    }, 5000);
});
document.addEventListener('click', (e) => {
    const audio = document.getElementById('clickSound');
    audio.currentTime = 0; // rewind
    audio.play().catch(err => console.log('Audio blocked:', err));
});