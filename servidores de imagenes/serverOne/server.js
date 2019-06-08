var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var formidable = require('express-form-data');
var fs = require('fs');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidable.parse({ keepExtensions: true}));

app.post('/sendImg', function (req, res) {
    fs.rename(req.files.img.path, "img/" + req.files.img.originalFilename);
    res.send("ok");
});

app.post('/getImg', function (req, res) {
    var path = req.body.nameImg;
    fs.readFile('img/' + path, function (err, content) {
        if (err) {
            console.log("No existe");
            res.end("No existe");
        } else {
            console.log("existe");
            res.end(content);
        }
    });
});

app.listen(port, function () {
    console.log("Hemos iniciado nuestro servidor en el puerto " + port);
});