var soap = require("soap");
var url = "link da api"


soap.createClient(url, function(err, client) {
    if(err) return console.log("Erro:" + err);
    var response = client.wsdl
    console.log(response);
});