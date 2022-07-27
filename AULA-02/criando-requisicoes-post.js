const https = require("https");

// GET no about.google
const opcao = {
    // algumas informações necessarias para fazer uma requisição
    hostname: "https://eoo7nq3hl2fpj4y.m.pipedream.net/", // URL base que eu quero fazer a requisição
    port: 443, // porta padrão para requisições, porta 80 http
    // path é a composição do hostname com o port
    path: "/", // rota de acesso após o hostname
    method: "POST",
    headers: {
        "content-Type": "application/json",
        "content-length": data.length
    },
};

const data = JSON.stringify({
    "test": "event",
    "nome": "Gabriel"
})

// fazer uma requisição dentro do arquivo
const req = https.request(opcao);
req.write(data);
req.on("error", (error) => {
    console.log(error)
})

req.end(); // finalizando a requisição