import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    
     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    _cliente;

    sacar(valor) {
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }

    //  PROTEÇÃO DE DADOS - ACESSOR PERMITE MANIPULAR O ATRIBUTO_PRIVADO_SALDO DENTRO DA CLASSE_CONTA CORRENTE
    get saldo() {
        return this._saldo;
    }    

    //  PROTEÇÃO DE DADOS - ACESSOR SÓ PERMITE ATRIBUIR UM OBJETO_CLIENTE PARA A CLASSE_CLIENTE
    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    //  PROTEÇÃO DE DADOS - ACESSOR PERMITE MANIPULAR APENAS O OBJETO_CLIENTE DENTRO DA CLASSE_CONTA CORRENTE
    get cliente() {
        return this._cliente
    }
}