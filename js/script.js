const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const body = document.getElementById("body")


hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
  body.classList.toggle('bodyShow')
});

function Time() {
  var actualizarHora = function () {
    var fecha = new Date(),
      ampm,
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear();




    var pDia = document.getElementById('dia'),
      pMes = document.getElementById('mes'),
      pYear = document.getElementById('year');

    pDia.textContent = dia;
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    pMes.textContent = meses[mes];
    pYear.textContent = year;




  }

  actualizarHora();
};

Time();


var animation = bodymovin.loadAnimation({
  container: document.getElementById('logo'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '../js/logo.json'
})

var btn = document.getElementById('logo');
btn.addEventListener('mouseenter', function () {
  animation.play()
})

btn.addEventListener('mouseleave', function () {
  animation.stop()
})


var animationLupa = bodymovin.loadAnimation({
  container: document.getElementById('lupa'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '../js/lupa.json'
})

var btn = document.getElementById('lupa');
btn.addEventListener('mouseenter', function () {
  animationLupa.play()
})

btn.addEventListener('mouseleave', function () {
  animationLupa.stop()
})
