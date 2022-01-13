import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//  CLIENTE_1
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

// CLIENTE_2
const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

// CONTA CORRENTE_RICARDO
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

// CONTA CORRENTE_ALICE
const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1005;
contaCorrenteAlice.cliente = cliente2;

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
let valorTransf2 = 250;
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