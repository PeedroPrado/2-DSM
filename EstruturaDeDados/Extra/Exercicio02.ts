import * as readline from 'readline';
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
function perguntar() {
    rl.question("Digite uma opção (cumprimentar, ignorar, sair): ", (opcao) => {
        opcao = opcao.trim().toLowerCase();
       
        if (opcao === "cumprimentar") {
            console.log("Olá! Como você está?");
            perguntar();
        } else if (opcao === "ignorar") {
            console.log("Ok, sem problemas!");
            perguntar();
        } else if (opcao === "sair") {
            console.log("Saindo... Até logo!");
            rl.close();
        } else {
            console.log("Opção inválida. Tente novamente.");
            perguntar();
        }
    });
}
 
perguntar();