class Animal{
    //campos privados
    #especie
    #nome
    //metodo construtor
    constructor(especie,tamanho,cor,nome){
        this.#especie = especie
        this.tamanho = tamanho
        this.cor = cor
        this.#nome =nome

    }
    //metodos
    falar(){
        console.log(`O ${this.#nome} fez algum som`)
    }
    comer(){
        console.log(`O ${this.#nome} comeu`)
    }
    dormir(){
        console.log(`O ${this.#nome} dormiu`)
    }
    getNome(){
        return this.#nome
    }
    setNome(nome){
        this.#nome = nome
    }
}

const animal1 = new Animal('gato' ,'gordo', 'laranja','Cleitinho')

console.log(animal1.getNome())

const animal2 = new Animal('cachorro','pequeno','branca', 'belina')

module.exports = Animal