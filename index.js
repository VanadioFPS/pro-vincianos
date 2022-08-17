var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/home');
});

app.get('/productos', function (request, response){
    response.render('pages/productos')
});

app.listen(3000);
console.log('3000 is the magic port');