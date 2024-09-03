// Menyiapkan Canvas
const mycanvas = document.querySelector('#mycanvas');

// Atur ukuran Canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Tentukan Context
const c = mycanvas.getContext('2d')


// Membuat Animasi Canvas Lingkaran
let x = 200;
let y = 550;
let speedX = 5;
let speedY = 5;
let radius = 150;

function draw() {
    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.fillStyle = 'lightgreen';
    c.beginPath(); // Agar warna ganti
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

    if(x + radius > innerWidth || x - radius < 0) {
        speedX = -speedX;
    }

    if(y + radius > innerHeight || y - radius < 0) {
        speedY = -speedY;
    }

    x += speedX;
    y += speedY;
}

draw();