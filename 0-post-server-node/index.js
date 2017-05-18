var express = require('express');
var fs = require('fs');
var app = express();
var cors = require('cors');
var formidable = require('formidable');
var path = require('path');

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

https://gist.github.com/paambaati/db2df71d80f20c10857d
app.post('/upload', function(req, res) {
  var uploadDir = path.join(__dirname, '/uploads');
  var form = new formidable.IncomingForm();
  form.multiples = true;
  form.keepExtensions = true;
  form.uploadDir = uploadDir;
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: err })
    res.status(200).json({ uploaded: true })
  });
  form.on('fileBegin', function (name, file) {
    const [fileName, fileExt] = file.name.split('.')
    file.path = path.join(uploadDir, `${fileName}_${new Date().getTime()}.${fileExt}`)
  });
});


port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port);