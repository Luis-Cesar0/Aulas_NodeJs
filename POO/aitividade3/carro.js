// ### Classe derivada - Carro:

// - número de portas
// - tipo de combustível


const veiculo = require('./veiculo')

class carro extends veiculo{
    constructor(marca, modelo, anoFabricacao, preco, portas, combustivel){
        super(marca,modelo,anoFabricacao,preco)
        this.portas = portas
        this.combustivel = combustivel
    }
    exibirInformacoesCarro(){
        super.exibirInformacoes()
        console.log(`Portas: ${this.portas}`)
        console.log(`Combustível: ${this.combustivel}`)
    }
}

const carro1 = new carro('fiat' ,'siena',2009,25000,4,'gazolina' )
carro1.exibirInformacoesCarro()