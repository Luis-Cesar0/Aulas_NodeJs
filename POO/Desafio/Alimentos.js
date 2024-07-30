const Produto = require('./produto')

class Alimentos extends Produto{
    constructor(nome, preco, dataValidade, peso,EhPerecivel){
        super(nome, preco,dataValidade)
        this.peso = peso
        this.EhPerecivel = EhPerecivel
    }
    ExibirInfo(){
        super(this.ExibirInfo())
        console.log(`Peso: ${this.peso}g é Perecivel: ${this.EhPerecivel == true ? 'Sim': 'Não'}`)
    }
}