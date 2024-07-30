// ### Classe derivada - Moto:

// - cilindrada
// - tipo de partida

const veiculo = require('./veiculo')

class moto extends veiculo{
    constructor(marca, modelo, anoFabricacao, preco, cilindrada, partida){
        super(marca,modelo,anoFabricacao,preco)
        this.cilindrada = cilindrada
        this.partida = partida
    }
    exibirInformacoesMoto(){
        super.exibirInformacoes()
        console.log(`Cilindrada: ${this.cilindrada}`)
        console.log(`Partida: ${this.partida}`)
    }
}

const moto1 = new moto('Honda', 'Bros', 2020, 15000,160,'eletrica')
moto1.exibirInformacoesMoto()