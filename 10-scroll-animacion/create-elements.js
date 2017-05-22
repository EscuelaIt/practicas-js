var elementos = 0;
document.addEventListener("DOMContentLoaded", function() {
  var templateText = document.getElementById('template').innerHTML;
  var template = Handlebars.compile(templateText);
  var cuerpo = document.getElementById('cuerpo')

  document.getElementById('agregar').addEventListener('click', function() {
    var data = {
      numero: document.getElementById('numero').value,
      nombre: document.getElementById('nombre').value
    };
    var html = template(data);
    var elem = document.createElement('div');
    elem.innerHTML = html;
    cuerpo.appendChild(elem);
    elementos ++;
  });
});
