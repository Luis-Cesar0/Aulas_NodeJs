const fs = require('fs')
const caminhoJson = 'funcionarios.json'
const codi = 'utf-8'


// const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));
fs.readFile(caminhoJson,(erro,dados)=>{
    if(erro){
        console.log(erro)
    }
    let pessoas = JSON.parse(dados)

    let pessoasFiltradas = pessoas.filter(pessoa => pessoa.cargo =='Desenvolvedor Front-end')
       
       console.log(pessoasFiltradas)
       
})
