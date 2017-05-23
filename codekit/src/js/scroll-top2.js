var topElement;
document.addEventListener("DOMContentLoaded", function() {
  topElement = document.getElementById('top');

  document.getElementById("toplink").addEventListener("click", animateToTop);

  function animateToTop(e) {
    e.preventDefault();
    //console.log('estoy en: ', window.scrollY);

    doScrollTop();
  }

  function doScrollTop() {
    var scrollActual = window.scrollY;
    var desplazamiento = (scrollActual / 20) + 2;
    window.scrollTo(0, scrollActual - desplazamiento);
    //console.log('pasando por ', window.scrollY);
    if(window.scrollY > 0) {
      window.requestAnimationFrame(doScrollTop);
    }
  }
});


window.addEventListener('scroll', gestionaVisualizacionTop);
function gestionaVisualizacionTop() {
  ////console.log('topElement.style.display', topElement.style.display, window.scrollY);
  if (window.scrollY > 200 && (topElement.style.display == '' || topElement.style.display == 'none')) {
    //console.log('mostrar...');
    topElement.style.display = 'block';
  } else if(window.scrollY < 200 && topElement.style.display == 'block'){
    //console.log('ocultar...');
    topElement.style.display = '';
  }
}


