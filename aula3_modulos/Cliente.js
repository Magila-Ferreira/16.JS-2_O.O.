export class Cliente{
    nome;
    _cpf;

    //  PROTEÇÃO DE DADOS - ACESSOR PERMITE MANIPULAR O ATRIBUTO_PRIVADO_CPF DENTRO DA CLASSE_CLIENTE
    get cpf() {
        return this._cpf;
    }

    // CONSTRUTOR
    // PROTEÇÃO DE DADOS - O CONSTRUTOR SÓ PERMITE ATRIBUIR VALOR AOS ATRIBUTOS_NOME_CPF NO MOMENTO DE CRIAÇÃO DA CLASSE_CLIENTE 
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}