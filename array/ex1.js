// Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array.

var numeros = [];

for(var i=1; i<=20; i++){
    var numero = parseFloat(prompt("Digite um Número"));
    numeros.push(numero);
}
document.write(numeros);