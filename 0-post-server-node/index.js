var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/', function(req, res){
    console.log('POST /');
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<p>Recibido, mira el contenido del formulario en la consola de node.</p><p><a href="http://localhost:8080">Volver</a>');
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)