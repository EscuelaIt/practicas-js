document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("toplink").addEventListener("click", animateToTop);

  function animateToTop(e) {
    e.preventDefault();
    console.log('estoy en: ', window.scrollY);

    doScrollTop();
  }

  function doScrollTop() {
    var scrollActual = window.scrollY;
    var desplazamiento = (scrollActual / 20) + 2;
    window.scrollTo(0, scrollActual - desplazamiento);
    console.log('pasando por ', window.scrollY);
    if(window.scrollY > 0) {
      window.requestAnimationFrame(doScrollTop);
    }
  }


});