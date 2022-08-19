var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/home');
});

app.get('/chat', function (request, response){
    response.render('pages/chat')
});

app.get('/coaching', function (request, response){
    response.render('pages/coaching')
});

app.get('/fixture', function (request, response){
    response.render('pages/fixture')
});

app.get('/guias', function (request, response){
    response.render('pages/guias')
});

app.get('/lineups', function (request, response){
    response.render('pages/lineups')
});

app.get('/composiciones', function (request, response){
    response.render('pages/composiciones')
});

app.get('/agentes', function (request, response){
    response.render('pages/agentes')
});

app.get('/diccionario', function (request, response){
    response.render('pages/diccionario')
});

app.listen(3000);
console.log('3000 is the magic port');