// Construindo apenas o servidor usando http
const http = require("http");
// Definindo a porta do meu servidor
const porta = 3000;

// criando um listener, quem escuta e processa as requisições

const requestListener = function(req, res) {
    res.writeHead(200); // adicionando um método, e status
    res.end("Olá pessoal da turma 837!");
};

// Rodando o listener
const server = http.createServer(requestListener);
server.listen(porta, () => {
    console.log(`Servidor rodando em: http:localhost:${porta}`)
})