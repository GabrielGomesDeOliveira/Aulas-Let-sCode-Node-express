const express = require("express");
const mongoose = require("mongoose"); // ira ajudar a manipular o mongoDB
// Faz a junção das informções que você determina na sua aplicação, como o require ou import
const requireDir = require("require-dir");

// iniciando o servidor
const app = express();

// determinar que o uso das requisições sejam atravéz do json
// tudo vai ser passado a nivel de json
app.use(express.json());

// conectando no banco de dados atravez do mongoose
mongoose.connect(
    "mongodb+srv://Gabriel:Gomes123@melevaai.l2dt9pq.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Fazendo a junção dos meu Schema de banco de dados 
requireDir('../src/models');

// consumingo a rota
// tudo que estiver no index.Router estara disponivel para uso na tora .../api/(rota)
app.use('/api', require("../src/routers/index.Router"))

app.listen(3001, () => {
    console.log(`Server rodando em: localhost:3001`);
});