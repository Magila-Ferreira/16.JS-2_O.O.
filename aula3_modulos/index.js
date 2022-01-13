import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//  CLIENTE_1
const cliente1 = new Cliente("Ricardo", 11122233309);
//  VALORES ATRIBUIDOS COM A CHAMADA DO CONSTRUTOR
/* 
    cliente1.nome = "Ricardo";
    cliente1.cpf = 11122233309; 
*/

// CLIENTE_2
const cliente2 = new Cliente("Alice", 88822233309);
//  VALORES ATRIBUIDOS COM A CHAMADA DO CONSTRUTOR
/* 
    cliente2.nome = "Alice";
    cliente2.cpf = 88822233309; 
*/

// CONTA CORRENTE_RICARDO
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
//  VALORES ATRIBUIDOS COM A CHAMADA DO CONSTRUTOR
/* 
    contaCorrenteRicardo.agencia = 1001;
    contaCorrenteRicardo.cliente = cliente1; 
*/

// CONTA CORRENTE_ALICE
const contaCorrenteAlice = new ContaCorrente(1005, cliente2);
//  VALORES ATRIBUIDOS COM A CHAMADA DO CONSTRUTOR
/* 
    contaCorrenteAlice.agencia = 1005;
    contaCorrenteAlice.cliente = cliente2; 
*/

// MOVIMENTAÇÕES DA CONTA_RICARDO
contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);

// MOVIMENTAÇÕES DA CONTA_ALICE
contaCorrenteAlice.depositar(200);
contaCorrenteAlice.depositar(100);
contaCorrenteAlice.depositar(-10);

contaCorrenteAlice.depositar(valorSacado);

// TRANSFERÊNCIAS ENTRE CONTAS
let valorTransf1 = 100;
let valorTransf2 = 200;
let valorTransf3 = 50;
let valorTransf4 = 80;
contaCorrenteRicardo.transferir(valorTransf1, contaCorrenteAlice);
contaCorrenteAlice.transferir(valorTransf2, contaCorrenteRicardo);
contaCorrenteRicardo.transferir(valorTransf3, contaCorrenteAlice);
contaCorrenteAlice.transferir(valorTransf4, contaCorrenteAlice);

// SALDO_RICARDO
console.log("\n");
console.log(contaCorrenteRicardo);

// SALDO_ALICE
console.log("\n");
console.log(contaCorrenteAlice);

// GET - IMPRIMINDO SÓ A CLASSE_CLIENTE DA CONTA:
console.log("\n");
console.log(contaCorrenteRicardo.cliente);
console.log(contaCorrenteAlice.cliente);

// GET - IMPRIMINDO SÓ O ATRIBUTO_PRIVADO_SALDO DA CLASSE_CONTA CORRENTE:
console.log("\n");
console.log("Saldo_RICARDO: " +contaCorrenteRicardo.saldo.toFixed(2));
console.log("Saldo_ALICE: " +contaCorrenteAlice.saldo.toFixed(2));

// CONSTRUTOR - IMPRIMINDO APENAS O ATRIBUTO CPF DOS OBJETOS_CLIENTE:
console.log("\n");
console.log("CLIENTE_1: " );
console.log(cliente1.cpf);

console.log("\n");
console.log("CLIENTE_2: " );
console.log(cliente2.cpf);

// CONSTRUTOR - IMPRIMINDO APENAS O ATRIBUTO NÚMERO_DE_CONTAS DO OBJETO_CONTA CORRENTE:
console.log("\n");
console.log("Quantidade de contas registradas no sistema: ");
console.log(ContaCorrente.numeroDeContas);