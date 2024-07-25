const http = require('http')
const { calcSalario } = require('./carroSalario')
const porta = 3001

const contSalario = require('./carroSalario').calcSalario
// const carro = require('./carroSalario').carro

const servidor = http.createServer((requisicao,resposta) => {
    resposta.write(calcSalario(50,60))
    resposta.end()
}).listen(porta)

