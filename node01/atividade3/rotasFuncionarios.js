const http = require('http')
const porta = 8080
const objFuncionarios = require('./funcionarios.js')
const todosDev = objFuncionarios
const Devs = todosDev.filter(funcionarios => funcionarios.cargo == 'Desenvolvedor Front-end' || funcionarios.cargo == "Desenvolvedor Back-end" || funcionarios.cargo == "Desenvolvedor Full-stack" )



const servidor = http.createServer((req,res)=>{
    res.setHeader('content-type','application/json; charset = utf-8')

    if(req.url == '/'){
        res.statusCode = 200
        res.write(JSON.stringify({Name: 'Api Dev 1.0', Autor: 'Luis César'}))
    }else if (req.url == '/funcionarios'){
        res.statusCode = 200
        res.write(JSON.stringify(todosDev))
    }else if (req.url == '/funcionarios/desenvolvedores'){
        res.statusCode = 200
        res.write(JSON.stringify(Devs))
    }else{
        res.statusCode = 404
        res.write(JSON.stringify({erro: 'Página não encontrada'}))
    }
    
    res.end()
})

servidor.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))
