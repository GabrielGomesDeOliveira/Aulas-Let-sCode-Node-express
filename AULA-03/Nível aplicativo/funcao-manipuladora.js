const express = require("express");

var app = express();

// A função está sendo executada para qualquer verbo
// é arepresentação do que o createServer do http/https
app.use("/user/:id", function(req, res, next) {
    console.log("Tipo de requisição", req.method)
    next()
});

app.get("/user/:id", function(req, res, next) {
    res.send("Estou na rota de usuário!")
})

app.listen(3333);
console.log("servidor rodando na porta: 3333");