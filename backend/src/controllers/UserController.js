// aqui iremos chamar o metodo criado na service para poder criar o usuario

const vehicleService = require("../services/UserService");

// iremos instanciar a service porque a controlle vai ser chamada pelo rota
// quem trata as requisições para o banco de dados é a controller

// recebendo a requisição
const postUsuario = async (req, res) => {
    // payload: vai receber todos os metodos que vem da requisição(name, password...)
    const payload = req.body;
    // passando o que precisa da requisição para o serviço
    const user = await vehicleService.createUser(payload);
    // devolve a resposta ao usuário
    return res.status(200).json(user)
}

module.exports = {
    postUsuario
}