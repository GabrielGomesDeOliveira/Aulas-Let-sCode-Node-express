// mongoose ira ajudar a criar a modelagem
const mongoose = require("mongoose");

// Criando o schema
// schema: vai ser a estrutura da tabela do banco de dados

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        // para ser obrigadorio determinar o require como TRUE
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // Gravar a data que foi criado
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Gegistrar o schema(Propriedades) e atribuindo na tabela
// parametros, Nome do schema, o schema criado em si
mongoose.model("User", userSchema);