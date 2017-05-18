var validateHelper = {

  validateName: function(name) {
    if(name.length && name.length > 2) {
      return true;
    }
    return false;
  },

  validateEmail: function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  validateFileType: function(type) {
    var tipos = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if(tipos.indexOf(type) != -1) {
      return true;
    }
    return false;
  },

  validateMaxFileSize: function(size) {
    if(size > 100 * 1024) {
      return false;
    }
    return true;
  }
}