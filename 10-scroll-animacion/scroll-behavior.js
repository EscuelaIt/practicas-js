document.addEventListener("DOMContentLoaded", function() {
  var cuerpo = document.getElementById('cuerpo');

  // document.getElementById('derecha').addEventListener('click', function() {
  //   console.log('derecha: ', cuerpo.scrollLeft);
  //   cuerpo.scrollLeft = cuerpo.scrollLeft + 100;
  // });

  // document.getElementById('izquierda').addEventListener('click', function() {
  //   console.log('izquierda: ', cuerpo.scrollLeft);
  //   cuerpo.scrollLeft = cuerpo.scrollLeft - 100;
  // });

  document.getElementById('derecha').addEventListener('click', function() {
    console.log('derecha: ', cuerpo.scrollLeft);
    var target = cuerpo.scrollLeft + 265;
    function move() {
      console.log(cuerpo.scrollLeft, cuerpo.offsetWidth, elementos * 265 );
      console.log('me muevo a der');
      cuerpo.scrollLeft = cuerpo.scrollLeft + 10;
      if(cuerpo.scrollLeft <= target && cuerpo.scrollLeft + cuerpo.offsetWidth < (elementos * 265) ) {
        window.requestAnimationFrame(move);
      }
    }
    move();
  });

  document.getElementById('izquierda').addEventListener('click', function() {
    console.log('izquierda: ', cuerpo.scrollLeft);
    var target = cuerpo.scrollLeft - 265;
    function move() {
      console.log('me muevo a izq');
      cuerpo.scrollLeft = cuerpo.scrollLeft - 10;
      if(cuerpo.scrollLeft >= target && cuerpo.scrollLeft > 0) {
        window.requestAnimationFrame(move);
      }
    }
    move();
  });
});