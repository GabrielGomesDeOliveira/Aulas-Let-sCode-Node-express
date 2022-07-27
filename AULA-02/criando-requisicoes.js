const https = require("https");

// GET no about.google
const opcao = {
    // algumas informações necessarias para fazer uma requisição
    hostname: "about.google", // URL base que eu quero fazer a requisição
    port: 443, // porta padrão para requisições, porta 80 http
    // path é a composição do hostname com o port
    path: "/stories/", // rota de acesso após o hostname
    method: "GET"
};

// fazer uma requisição dentro do arquivo
const req = https.request(opcao, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(`statusMessage: ${res.statusMessage}`)
    res.on("data", (d) => {
        process.stdout.write(d) // comandos para montar o html do resultado da requisição get que esta sendo feita
    }) // .on => é como se fosse o listener do servidor
});

req.on("error", (error) => {
    console.log("Estou no erro")
    console.log(error);
}); // listener só para casos de erro

req.end(); // finalizando a requisição