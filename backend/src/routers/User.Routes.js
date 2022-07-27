const express = require("express")
const routersUsers = express.Router()

const userController = require("../controllers/UserController");

// criando a rota do método post
routersUsers.post("", userController.postUsuario);

module.exports = routersUsers