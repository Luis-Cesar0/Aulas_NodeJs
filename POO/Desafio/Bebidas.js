const Produto = require('./produto')

class Bebidas extends Produto{
    constructor(nome, preco, dataValidade, volume,EhAlcolico){
        super(nome, preco,dataValidade)
        this.volume = volume
        this.EhAlcolico = EhAlcolico
    }
    ExibirInfo(){
        super(this.ExibirInfo())
        console.log(`Volume: ${this.peso}g é Alcolico: ${this.EhAlcolico == true ? 'Sim': 'Não'}`)
    }
}

class Estoque{
    constructor(){
        this.produtos = []
    }
    adicionarProdutos(produto){
        this.produtos.push(produto)
    }
    exibirpoduto(){
        this.produtos.forEach(produto =>produto.exbirInformacoes() )
        
    }
}