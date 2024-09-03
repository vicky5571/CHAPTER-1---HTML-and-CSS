// Menyiapkan Canvas
const mycanvas = document.querySelector('#mycanvas');

// Atur ukuran Canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Tentukan Context
const c = mycanvas.getContext('2d')



// Manipulasi Canvas

// Membuat Rectangle
c.fillStyle = 'pink';
c.strokeStyle = '#999';
c.lineWidth = '5';

c.rect(50, 50, 300, 300);
c.fill();
c.stroke();



// Membuat Lingkaran
c.fillStyle = 'lightgreen';
c.beginPath(); // Agar warna ganti
c.arc(550, 200, 150, 0, 2 * Math.PI);
c.fill();
c.stroke();



// Membuat Path (Segitiga)
c.fillStyle = 'lightblue';
c.beginPath();
c.moveTo(900, 50);
c.lineTo(1050, 350);
c.lineTo(750, 350);
c.closePath();
c.fill()
c.stroke();




