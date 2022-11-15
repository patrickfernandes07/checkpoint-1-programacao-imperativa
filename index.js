const readlineSync = require('readline-sync');
let opcao = 0;
let tempoDeterminado = 0;

console.log(`
1 - Pipoca
2 - Macarrão
3 - Carne
4 - Feijão
5 - Brigadeiro
`);

opcao = readlineSync.question('Selecione um item: ');
console.log(opcao);
switch (opcao) {
    case '1':
        tempoDeterminado = 10;
        var prato = 'pipoca';
        break;
    case '2':
        tempoDeterminado = 8;
        prato = 'macarrão';
        break;
    case '3':
        tempoDeterminado = 15;
        prato = 'carne';
        break;
    case '4':
        tempoDeterminado = 12;
        prato = 'feijão';
        break;
    case '5':
        tempoDeterminado = 8;
        prato = 'brigadeiro';
        break;
    default:
        console.log("Prato inexistente!");
        return;
}

console.log('Você selecionou a opção ' + prato);

let tempoInformado = readlineSync.question('Informe, em segundos, o tempo de preparo: ');
console.log('Voce selecionou ' + tempoInformado + ' segundos.');

microondas(opcao, tempoDeterminado);

function microondas(tempoInformado, tempoDeterminado) {


    
    if (tempoInformado < tempoDeterminado) {
        console.log('Tempo insuficiente');
    
    } else if (tempoInformado == tempoDeterminado || tempoInformado < (tempoDeterminado * 2)) {
        console.log('Prato pronto, bom apetite!');
    
    
    } else if ((tempoInformado) >= (tempoDeterminado * 2) && tempoInformado < (3 * tempoDeterminado)) {
        console.log('Seu prato queimou.');
    
    } else
        console.log('kabum!!!');
}


