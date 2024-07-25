const fs = require('fs')
const codificacao = 'utf-8'
const nomeArquivo ="receita.txt"
const conteudo = `Bolo de Cenoura Clássico

                \n Ingredientes (para 8 porções):
                \n - 1/2 xícara (chá) de óleo
                \n - 3 cenouras médias raladas
                \n - 4 ovos
                \n - 2 xícaras (chá) de açúcar
                \n - 2 e 1/2 xícaras (chá) de farinha de trigo
                \n - 1 colher (sopa) de fermento em pó

                \n Modo de Preparo:
                \n 1. No liquidificador, bata a cenoura, os ovos e o óleo até obter uma mistura homogênea.
                \n 2. Em uma tigela (ou na batedeira), adicione a farinha de trigo e misture bem.
                \n 3. Acrescente o açúcar e continue misturando.
                \n 4. Por último, adicione o fermento e misture delicadamente com uma colher.
                \n 5. Despeje a massa em uma forma untada com margarina e farinha.
                \n 6. Asse em forno preaquecido a 180°C por aproximadamente 40 minutos.

                \n Cobertura:
                \n 1. Em uma tigela, misture a manteiga, o chocolate em pó, o açúcar e o leite.
                \n 2. Leve essa mistura ao fogo e mexa até obter uma consistência cremosa.
                \n 3. Despeje a calda por cima do bolo já assado.

                /nBom apetite!
`
fs.writeFile(nomeArquivo,conteudo,(err,dado)=>{
    if(err){
        console.log(err)
    }
	console.log('O arquivo foi salvo com sucesso!')
})
