// Produto
// ---nome
// ---#preço
// ---dataValidade
// ---ExibirInformações()
// ---GetPreço()
// ---SetPreco()

class Produto{
    #preco
    constructor(nome, preco, dataValidade){
        this.nome = nome
        this.#preco = preco
        this.dataValidade = dataValidade
    }
    ExibirInfo(){
        console.log(`Nome: ${this.nome}, Preço: ${this.#preco}, Data de validade ${this.dataValidade}`)
    }
    getPreco(){
        return this.#preco
    }
    SetPreco(preco){
        this.#preco = preco
    }
}
module.exports = Produto