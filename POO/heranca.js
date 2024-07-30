// importe de classe animal

const Animal = require('./animal')

class AnimaisVoadores extends Animal{
    constructor(especie,tamanho ,cor ,nome,atdAsas){
        super(especie,tamanho,cor,nome)
        this.atdAsas = atdAsas
    }
    voar(){
        console.log(`${this.nome} está voando!`)
    }
}

class AnimaisNadadores extends Animal{
    constructor(especie,tamanho,cor,nome,qtdNadadeiras){
        super(especie,tamanho,cor,nome)
        this.qtdNadadeiras = qtdNadadeiras
    }
    nadar(){
        console.log(`${this.nome} está nadando!`)
    }
}
class AnimasiVoaAnda extends AnimaisVoadores{
    constructor(especie,tamanho,cor,nome,atdAsas,atdPernas){
        super(especie,tamanho,cor,nome,atdAsas)
    }
    andar(){
        console.log(`${this.nome} está andando!`)
    }
}

class voaNadaAnda extends AnimasiVoaAnda{
    constructor(especie,tamanho,cor,nome,atdAsas){
        super(especie,tamanho,cor,nome,atdAsas)
    }
    nadar(){
        console.log(`${this.nome} está nadando!`)
    }
}

const animal = new voaNadaAnda('pato','pequeno','preto','patolino',2)
console.log(animal)
animal.voar()
animal.nadar()
animal.andar()
animal.falar()
animal.comer()
console.log('\n')
console.log('\n')
const animal2 = new AnimaisVoadores('boboleta','pequeno','laranja' ,'Poti Poti',2)
console.log(animal2)
animal2.voar()
animal2.falar()
animal2.comer()
console.log('\n')
console.log('\n')
const animal3 = new AnimasiVoaAnda('pombo','pequeno','cinza','Osvaldo',2)
console.log(animal3)
animal3.voar()
animal3.andar()
animal3.falar()
animal3.comer()