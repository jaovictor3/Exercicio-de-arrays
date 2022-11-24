// Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha um inventário para cada um dos dois aventureiros - esse inventário será um array.
// Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência em seu inventário e nessa ordem. 
// Torper terá uma capa da invisibilidade, uma pedra do despertar,  uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência e nessa ordem.


var invdrofo = ['Anel da invisibilidade,' + '\n' + 'Botas mágicas,' + '\n' + 'Botas mágicas,' + '\n' + 'Poção do sono,' + '\n' + 'Poção da inocência,' + '\n' + 'Poção da inocência'];
var invtopper = ['Capa invisibilidade,' + '\n' + 'Pedra do despertar,' + '\n' + 'Varinha das varihas,' + '\n' + 'Poção da inocência,' + '\n' + 'Poção da mentira,' + '\n' + 'Poção da mentira,' + '\n' + 'Poção da anti-inteligência'];
alert(' Pós primeira aventura');
alert('Inventário de Drofo:'  + '\n\n' + invdrofo);
alert('Inventário de Topper:'  + '\n\n' + invtopper);

//No meio de sua jornada, Topper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica. 
//Descreva cada uma das ações acima. utilizando código (utilize comentários para ficar mais claro). 
delete invtopper[4]; //- uma poção da mentira
delete invtopper[1]; //- Pedra do despertar
delete invdrofo[1];  //- Botas mágicas
invtopper.push('\n' + 'Botas mágicas'); //+ botas mágicas --> topper
invtopper.push('\n' + 'Espada mágica'); //+ escudo mágico
invtopper.push('\n' + 'Escudo mágico'); //+ espada mágica
alert(' Pós segunda aventura');
alert('Inventário de Drofo:'  + '\n\n' + invdrofo);
alert('Inventário de Topper:'  + '\n\n' + invtopper);
//No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.
//Descreva cada uma das ações acima. utilizando código.
invdrofo.push('\n' + 'Bota mágica');           //+ bota mágica
delete invdrofo[3];                            //- poção de sono
delete invtopper[6];                           //- poção anti-inteligência
invdrofo.push('\n' + 'Ovo de dragão');         //+ Ovo de dragão
invdrofo.push('\n' + 'Coxinha');               //+ Coxinha
alert(' Pós terceira aventura');
alert('Inventário de Drofo:'  + '\n\n' + invdrofo);
alert('Inventário de Topper:'  + '\n\n' + invtopper);