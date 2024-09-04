const canvas = document.getElementById('effectCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawEffect(x, y) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.fill();
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

document.addEventListener('mousemove', (event) => {
    drawEffect(event.clientX, event.clientY);
});

document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    drawEffect(touch.clientX, touch.clientY);
});
