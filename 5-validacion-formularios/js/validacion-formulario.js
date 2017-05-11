document.addEventListener('DOMContentLoaded', prepareValidation);

//window.temporizador = null;

function prepareValidation() {

  //acceso al formulario por name
  var formul = document.forms.formulname;

  formul.addEventListener('submit', validar);

  function validar(e) {
    //deleteFeedback();
    e.preventDefault();
    var f = this;

    //if(validateName(f.nombre.value)) {
    if(! validateName(f.nombre.value)) {
      feedbackMessage('El nombre no es válido');
      return false;
    }
    //es que no me salí por el anterior return = el nombre sí era valido
    if(! validateEmail(f.email.value)) {
      feedbackMessage('el email es inválido');
      return false;
    }
    if(f.sexo.value == '') {
      feedbackMessage('Por favor introduce el sexo XD');
      return false;
    }
    //feedbackMessage(typeof f.utilizacion.value)
    if(f.utilizacion.value === '0') {
      feedbackMessage('indica tu utilización del servicio');
      return false;
    }
    //if(f.privacidad.checked == false) {
    if(! f.privacidad.checked) {
      feedbackMessage('no has aceptado...');
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
  if(typeof name != 'string' || name.length < 2 ) {
    return false;
  }
  return true;
}

function feedbackMessage(msg) {
  if(window.temporizador) {
    clearTimeout(window.temporizador);
  }
  var msgElement = document.getElementById('message');
  msgElement.textContent = msg;
  msgElement.style.display = 'block';

  window.temporizador = setTimeout(function() {
    msgElement.style.display = 'none';
  }, 5000);

}

function deleteFeedback() {
  var msgElement = document.getElementById('message');
  msgElement.style.display = 'none';
}