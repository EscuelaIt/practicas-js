var express = require('express');
var fs = require('fs');
var app = express();
var cors = require('cors');

app.use(cors());

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/', function(req, res){
    console.log('POST /');
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    setTimeout(function() {
        res.end('<p>Respuesta del servidor.</p><p>Recibimos estos datos por POST: ' + JSON.stringify(req.body) + '</p>');
    }, 3000);
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port);