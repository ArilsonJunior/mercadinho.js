const prompt = require("prompt-sync")();

console.log("\nbem vindo ao mercadinho")

let arroz = 0;

let feijao = 0;

let macarrao = 0;

let repositor = 0;

let removedor = 0;

let sair = false
do {
    console.log("----menu----\n" +
        "[1] mostrar estoque\n" +
        "[2] adicionar item no estoque\n" +
        "[3] remover item do estoque\n" +
        "[4] sair");

    let escolha = parseInt(prompt("Qual aba deseja abrir?: "));

    switch (escolha) {
        case 1:
            console.log("Arroz: " + arroz + " unidades");
            console.log("feijao:" + feijao + " unidades");
            console.log("macarrão: " + macarrao + " unidades");

            break;

        case 2:
            repositor = parseInt(prompt("Deseja adicionar quantos arroz?: "));
            arroz += repositor;

            repositor = parseInt(prompt("Deseja adicionar quantos Feijão?: "));
            feijao += repositor;

            repositor = parseInt(prompt("Deseja adicionar quantos macarrão?: "));
            macarrao += repositor;

            break;

        case 3:
            removedor = prompt("Deseja remover quantos arroz?: ");
            arroz = arroz - removedor;

            removedor = prompt("Deseja remover quantos Feijão?: ");
            feijao = feijao - removedor;

            removedor = prompt("Deseja remover quantos macarrão?: ");
            macarrao = macarrao - removedor;
            
            break;

        case 4:
            sair = true;
            break;

        default:
            console.log("Opção invalida")
            break;
    }

} while (!sair)
