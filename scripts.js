const txt = '{"name":"John Coltrane", "email": "Sincere@april.biz", "phone":"444-777-7777", "city":"New York", "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998", "provincia": "Greihen Burhge"}'
const obj = JSON.parse(txt);
document.getElementById("nombre").innerHTML = obj.name;
document.getElementById("nombre-presentacion").innerHTML = obj.name;
document.getElementById("email").innerHTML = obj.email;
document.getElementById("tel").innerHTML = obj.phone;
document.getElementById("calle").innerHTML = obj.street+", "+obj.suite;
document.getElementById("ciudad").innerHTML = obj.city;
document.getElementById("cp").innerHTML = obj.zipcode;
document.getElementById("provincia").innerHTML = obj.provincia;

document.getElementById("boton-perfil").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'block';
    document.getElementById("sect-exp").style.display = 'none';
    document.getElementById("sect-estudios").style.display = 'none';
    document.getElementById("sect-info").style.display = 'none';
    document.getElementById("sect-contacto").style.display = 'none';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-exp").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'none';
    document.getElementById("sect-exp").style.display = 'block';
    document.getElementById("sect-estudios").style.display = 'none';
    document.getElementById("sect-info").style.display = 'none';
    document.getElementById("sect-contacto").style.display = 'none';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-estudios").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'none';
    document.getElementById("sect-exp").style.display = 'none';
    document.getElementById("sect-estudios").style.display = 'block';
    document.getElementById("sect-info").style.display = 'none';
    document.getElementById("sect-contacto").style.display = 'none';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-info").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'none';
    document.getElementById("sect-exp").style.display = 'none';
    document.getElementById("sect-estudios").style.display = 'none';
    document.getElementById("sect-info").style.display = 'block';
    document.getElementById("sect-contacto").style.display = 'none';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-contacto").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'none';
    document.getElementById("sect-exp").style.display = 'none';
    document.getElementById("sect-estudios").style.display = 'none';
    document.getElementById("sect-info").style.display = 'none';
    document.getElementById("sect-contacto").style.display = 'block';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-perfil-fix").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'block';
    document.getElementById("sect-exp").style.display = 'none';
    document.getElementById("sect-estudios").style.display = 'none';
    document.getElementById("sect-info").style.display = 'none';
    document.getElementById("sect-contacto").style.display = 'none';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-exp-fix").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'none';
    document.getElementById("sect-exp").style.display = 'block';
    document.getElementById("sect-estudios").style.display = 'none';
    document.getElementById("sect-info").style.display = 'none';
    document.getElementById("sect-contacto").style.display = 'none';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-estudios-fix").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'none';
    document.getElementById("sect-exp").style.display = 'none';
    document.getElementById("sect-estudios").style.display = 'block';
    document.getElementById("sect-info").style.display = 'none';
    document.getElementById("sect-contacto").style.display = 'none';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-info-fix").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'none';
    document.getElementById("sect-exp").style.display = 'none';
    document.getElementById("sect-estudios").style.display = 'none';
    document.getElementById("sect-info").style.display = 'block';
    document.getElementById("sect-contacto").style.display = 'none';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

document.getElementById("boton-contacto-fix").addEventListener('click', function () {
    document.getElementById("sect-perfil").style.display = 'none';
    document.getElementById("sect-exp").style.display = 'none';
    document.getElementById("sect-estudios").style.display = 'none';
    document.getElementById("sect-info").style.display = 'none';
    document.getElementById("sect-contacto").style.display = 'block';
    $('body,html').animate({
        scrollTop:200
    },1000)
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 340 || document.documentElement.scrollTop > 340) {
    document.getElementById("nav-fixed").style.top = "0";
  } else {
    document.getElementById("nav-fixed").style.top = "-50px";
  }
}