const { error } = require('console')
const fs = require('fs')
const caminhoArquivo1 = 'arquivo1.txt' 
const caminhoArquivo2 = 'arquivo2.txt' 
const codificacao = 'utf-8'
const novoArquivo = 'arquivoConcatenado.txt'



fs.readFile(caminhoArquivo1,codificacao,(erro,conteudo1)=>{
    fs.readFile(caminhoArquivo2,codificacao,(erro,conteudo2)=>{
        
        const conteudo = `juntei o conteudo do arquivo1: ${conteudo2}
                \n com conteudo do arquivo2: ${conteudo1}`

        fs.writeFile(novoArquivo,conteudo,(erro,conteudoNovo)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Deu certo')
            }
        })
    })
})