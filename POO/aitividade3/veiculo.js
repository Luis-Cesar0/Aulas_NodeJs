
// ### Classe base - Veiculo:

// - Marca
// - Modelo
// - Ano de Fabricação
// - Preço
// - Exibir informações


class Veiculo{
    #preco
    constructor(marca, modelo, anoFabricacao, preco){
        this.marca = marca;
        this.modelo = modelo
        this.anoFabricacao = anoFabricacao
        this.#preco = preco
    }
    
    exibirInformacoes(){
        console.log(`Marca: ${this.marca} 
            \nModelo: ${this.modelo} 
            \nAno de fabricação ${this.anoFabricacao}
            \npreço ${this.#preco}`)
    }
    setPreco(preco){
        this.#preco = preco
    }
    
}
module.exports = Veiculo


