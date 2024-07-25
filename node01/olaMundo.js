const http = require('http')
const porta = 3000

const servidor = http.createServer((requisicao,resposta) => {
    resposta.write('Hello Word,Luis Cesar')
    resposta.end()
}).listen(porta)

