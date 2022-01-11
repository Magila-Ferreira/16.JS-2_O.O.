// Criando a classe Cliente
class Cliente {
    nome;
    cpf;
    agencia;
    saldo; 
} 

// Registrando um novo Cliente na classe Cliente 
const cliente1 = new Cliente();
const cliente2 = new Cliente();

// Populando os atributos da classe Cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309; 
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309; 
cliente2.agencia = 1001;
cliente2.saldo = 0; 

console.log(cliente1);
console.log(cliente2);