
const carro= {
    modelo: ' Toyota Corolla',
    VolumeCarga: '400l',
    EstilosCarroceria: 'Sedan',
    descCarro: () =>{
        return `Carro ${carro.modelo} com a porta malas de ${carro.VolumeCarga} e carroceria ${carro.EstilosCarroceria}`
    }

}



const calcSalario= (valorHora,horasTrabalho) => {
    `o valor do Salário é ${valorHora * horasTrabalho}`
}

module.exports = {carro, calcSalario}