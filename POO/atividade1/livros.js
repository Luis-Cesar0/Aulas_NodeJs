class livro{
    #status
    constructor(titulo,autor,anoPubli,status){
        this.titulo = titulo
        this.autor = autor
        this.anoPubli = anoPubli
        this.#status = status
    }
    getStatus(){
        return this.#status
    }
    setStatus(status){
        this.#status = status
        
    }
}

class biblioteca{
    constructor(){
        this.livros = []
    }
    addlivos(livro){
        if(livro !== undefined){this.livros.push(livro)}
        else{
            console.log('Não pode ser adicionado um livro')
        }
        
    }
    emprestarLivro(nomeLivro){
        this.livros.forEach(livro =>{
            if (livro.titulo == nomeLivro){
                if(livro.getStatus() == 'disponíveis'){
                    livro.setStatus('emprestado')
                }else{
                    console.log('livro já foi emprestado')
                }
            }
        })
    }
    devolverLivro(nomeLivro){
        this.livros.forEach(livro =>{
            if (livro.titulo == nomeLivro){
                if(livro.getStatus() == 'emprestado'){
                    livro.setStatus('disponíveis')
                }else{
                    console.log('livro já foi devlvido')
                }
            }
        })
    }
    listLivros(){
        this.livros.forEach((livro)=>{
            if(livro.getStatus() == 'disponíveis'){
                console.log(livro.titulo)
            }
        })
    }
}
const livro1 = new livro('teste livro1','eu1',2000,'disponíveis')
const livro2 = new livro('teste livro2','eu2',2012,'emprestado')
const livro3 = new livro('teste livro3','eu3',2003,'disponíveis')
const livro4 = new livro('teste livro4','eu4',2014,'emprestado')
const livro5 = new livro('teste livro5','eu5',2002,'disponíveis')

const biblioteca1 = new biblioteca()

biblioteca1.addlivos(livro1)
biblioteca1.addlivos(livro2)
biblioteca1.addlivos(livro3)
biblioteca1.addlivos(livro4)
biblioteca1.addlivos(livro5)

biblioteca1.emprestarLivro('teste livro1')
biblioteca1.devolverLivro('teste livro4')
console.log(livro4.getStatus())

biblioteca1.listLivros()