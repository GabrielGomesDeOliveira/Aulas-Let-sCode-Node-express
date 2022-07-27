const express = require("express");

var app = express();
var rotas = express.Router(); // fazendo rotas através do express

rotas.use(function(req, res, next) {
    console.log("Data e Hora:", Date.now().toString());
    next();
});

rotas.use("/user/:id", function(req, res, next) {
    console.log("Url solicitada:", req.originalUrl);
    next();
}), function(req, res, next) {
    console.log("Tipo de requisição:", req.method);
    next();
}

rotas.get("/user/:id", function (req, res, next) {
    if (req.params.id === 0) next("route");
})


app.listen(3333);
console.log("servidor rodando na porta: 3333");