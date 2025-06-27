function toggleMenu() {
const sidebar = document.getElementById('sidebar');
sidebar.classList.toggle('show-on-mobile');
}
const slides = document.querySelectorAll('#slider img');
const indicators = document.getElementById('indicators');
let index = 0;
function showSlide(i) {
slides.forEach((img, idx) => {
img.classList.remove('active');
if (i === idx) img.classList.add('active');
});
Array.from(indicators.children).forEach((dot, idx) => {
dot.classList.remove('active');
if (i === idx) dot.classList.add('active');
});
}
slides.forEach((_, i) => {
const dot = document.createElement('span');
if (i === 0) dot.classList.add('active');
dot.addEventListener('click', () => {
index = i;
showSlide(index);
});
indicators.appendChild(dot);
});
setInterval(() => {
index = (index + 1) % slides.length;
showSlide(index);
}, 3000);