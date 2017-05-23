document.addEventListener('DOMContentLoaded', prepareValidation);

//window.temporizador = null;

function prepareValidation() {

  if(document.forms.formulname) {
    //acceso al formulario por name
    var formul = document.forms.formulname;
    formul.addEventListener('submit', validar);
  }

  function validar(e) {
    //deleteFeedback();
    e.preventDefault();
    var f = this;

    var arrayErrores = [];

    //if(validateName(f.nombre.value)) {
    if(! validateName(f.nombre.value)) {
      arrayErrores.push('El nombre ' + f.nombre.value + ' no es válido');
    }
    //es que no me salí por el anterior return = el nombre sí era valido
    if(! validateEmail(f.email.value)) {
      arrayErrores.push('el email es inválido');
    }
    if(f.sexo.value == '') {
      arrayErrores.push('Por favor introduce el sexo XD');
    }
    //arrayErrores.push(typeof f.utilizacion.value)
    if(f.utilizacion.value === '0') {
      arrayErrores.push('indica tu utilización del servicio');
    }
    //if(f.privacidad.checked == false) {
    if(! f.privacidad.checked) {
      arrayErrores.push('no has aceptado...');
    }

    //comprobar si es correcto
    if(arrayErrores.length != 0) {
      feedbackSomeMessages(arrayErrores);
      return false;
    }

    //si el formulario es correcto
    //document.forms.formulname.submit();
    //formul.submit();
    //this.submit();
    f.submit();
  }


}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateName(name) {
  if(typeof name != 'string' || name.length < 2 || name.length > 50) {
    return false;
  }
  return true;
}

function feedbackMessage(msg) {
  if(window.temporizador) {
    clearTimeout(window.temporizador);
  }
  var msgElement = document.getElementById('message');
  msgElement.innerHTML = msg;
  msgElement.style.display = 'block';

  window.temporizador = setTimeout(function() {
    msgElement.style.display = 'none';
  }, 5000);

}

function feedbackSomeMessages(arrayErrores) {
  var cadenaErrores = '<ul>';
  for(var i in arrayErrores) {
    cadenaErrores += '<li>' + arrayErrores[i] + '</li>';
  }
  cadenaErrores += '</ul>';

  feedbackMessage(cadenaErrores);
}

function deleteFeedback() {
  var msgElement = document.getElementById('message');
  msgElement.style.display = 'none';
}
