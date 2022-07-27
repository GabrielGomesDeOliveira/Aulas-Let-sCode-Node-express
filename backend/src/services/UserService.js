// Chamando o mongoose
// Fazendo o uso da tabela(schema) de usuário atravéz do mongoose
const mongoose = require("mongoose");
// Tendo acesso a tabela(Schema) de usuário
const User = mongoose.model("User");

// jogando os dados do usuário no banco de dados
const createUser = async (user) => {
    // Acessando as informações da tabela de usuário
    return await User.create(user);
}

// Deixando os métodos disponiveis para uso
module.exports = {
    createUser
}