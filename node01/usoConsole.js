// let num1 = 10
// let num2 = 2

// const somar = require('./somar')
// const sub = require('./subtrair')
// console.log(somar(num1,num2))
// console.log(sub(num1,num2))

const fs = require('fs')
const caminho = './teste.txt'
const codificacao = 'utf-8'

fs.readFile(caminho,codificacao,(erro,conteudo) =>{
    console.log(`${conteudo} \n Luis César (2024)`)
} )