const butterfly = document.getElementById('butterfly');
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
let targetX = Math.random() * window.innerWidth;
let targetY = Math.random() * window.innerHeight;
let speed = 1.5;

function updateButterfly() {
    let dx = targetX - posX;
    let dy = targetY - posY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 50) {
        targetX = Math.random() * (window.innerWidth - 100);
        targetY = Math.random() * (window.innerHeight - 100);
    }

    posX += (dx / dist) * speed;
    posY += (dy / dist) * speed;

    let scaleX = dx < 0 ? -1 : 1;
    butterfly.style.transform = `translate(${posX}px, ${posY}px) scaleX(${scaleX})`;
    requestAnimationFrame(updateButterfly);
}

updateButterfly();