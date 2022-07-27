const express = require("express");

var app = express();

app.use("/user/:id", function(req, res, next) {
    console.log("URL que foi requisitada", req.url)
    next()

}, function(req, res, next) {
    console.log("Tipo de requisição:", req.method)
});

app.listen(3333);
console.log("Servidor escutando na porta: 3333");