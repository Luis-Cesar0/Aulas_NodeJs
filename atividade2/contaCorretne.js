class contaCorrente{
    #saldo
    #limiteEmprest
    #limiteTranf
        constructor(titular,ag,numConta,senha,saldo,limiteEmprest,temEmprest,limiteTranf){
            this.titular = titular;
            this.ag = ag;
            this.numConta =numConta
            this.senha = senha;
            this.#saldo = saldo;
            this.#limiteEmprest = limiteEmprest;
            this.temEmprest = temEmprest;
            this.#limiteTranf = limiteTranf;
        }
        verSaldo(){
            console.log(this.saldo)
        }
        sacar(valorsac){
            console.log(this.saldo-valorsac)
        }
        depositar(valordp){
            console.log(this.saldo+valordp)
        }
        seEndividar(valorEmpre){
            if(this.temEmprest == ture){
                if(valorEmpre <= this.#limiteEmprest){
                    this.#limiteEmprest = this.#limiteEmprest - valorEmpre
                }
            }
        }
}