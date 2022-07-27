// auqi é onde vamos indexar todas as rotas

const userRouters = require("../routers/User.Routes")
const express = require("express")
const routers = express.Router()

routers.use("/user", userRouters);

module.exports = routers