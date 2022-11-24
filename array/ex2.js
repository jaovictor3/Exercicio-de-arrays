//Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.

var  maiores50 = [];
var menores50 = [];

for  (let i=1; i <= 12; i++){
    var numero= parseFloat(prompt("Digite um número"));
    if (numero > 50){
        maiores50.push(numero);
    }else if (numero < 50){
        menores50.push(numero);
    }
}

alert(maiores50);
alert(menores50);