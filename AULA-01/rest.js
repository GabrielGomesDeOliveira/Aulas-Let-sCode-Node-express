// rest recebe uma requisição processa e retorna, ele não espera o estado atual

// deleção lógica => muda apenas o status mas permanece no sistema
// deleção física => deleta o campo da tabela

// para ser um api rest necessita :
// *client-server
// *stateless =>
// *cacheable => cacheamento de dados, ajuda a melhorar a performace 
// *uniform interface => contato de comunicação entre o cliente e o servidor
// *layred system => o que foi alterado no client não necessita
// *code on demand => o cliente consegue determinar ou fazer alteraçoes no servidor


//  ########## rest #############
// um verbo ou método http : define que tipo de operação que o servidor irá realizar
// um header: é o cabeçalho da reuisições onde você vai passar as suas requisições
// um path: é o caminho da rota para o servidor
