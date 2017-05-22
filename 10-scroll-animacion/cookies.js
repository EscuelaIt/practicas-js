document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  if(Cookies.enabled) {
    if(Cookies.get('cookiesaceptadas') != 'aceptadas') {
      launchCookieAdvisor('Tienes que aceptar las cookies');
    }
  } else {
    launchCookieAdvisor('Tu navegador no acepta cookies, por favor activalo');
  }

  setTimeout(registerScrollEvent, 5000);
}

function registerScrollEvent() {
  window.addEventListener('scroll', hideCookiesMessage);
  function hideCookiesMessage() {
    console.log('voy a ocultar la capa');
    var capaCookies = document.getElementById('esteid');
    if(capaCookies) {
      fadeOut(capaCookies);
    }
    window.removeEventListener('scroll', hideCookiesMessage);
  }
}


function launchCookieAdvisor(msg) {
  var capaCookies = document.createElement('div');
  capaCookies.setAttribute('id', 'esteid');
  capaCookies.innerHTML = '<p>' + msg + ' <span>Aceptar</span></p>';
  capaCookies.classList.add('avisoCookies');
  var todosLosSpanEnDiv = capaCookies.getElementsByTagName('span');
  todosLosSpanEnDiv.item(0).addEventListener('click', function(e) {
    console.log(e);
    if(Cookies.enabled) {
      console.log('test')
      Cookies.set('cookiesaceptadas', 'aceptadas', {expires: 60 * 60 * 24 * 365 * 2})
    }
    //capaCookies.remove();
    //$(capaCookies).fadeOut(5000);
    fadeOut(capaCookies);
  });
  document.body.appendChild(capaCookies);
}

function fadeOut(el) {
  el.style.opacity = 1;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = el.style.opacity - (new Date() - last) / 1000;
    last = +new Date();

    if (+el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

//notación de objeto
//escribir objetos por sus valores, de manera literal
// var miObjeto = {
//   llave: 'valor',
//   edad: 34,
//   casado: true,
//   tituacion: {
//     universidad: 'upm',
//     ano: 2010,
//     lugar: 'Madrid'
//   }
// }
// // --- JSON ----
// // AJAX
