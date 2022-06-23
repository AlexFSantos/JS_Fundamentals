/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function Mes_extenso(mes){
    switch(mes) {
        case 1:
            return console.log(`Janeiro`);
            break;
        case 2:
            return console.log(`Fevereiro`);
            break;
        case 3:
            return console.log(`Março`);
            break;
        case 4:
            return console.log(`Abril`);
            break;
        case 5:
            return console.log(`Maio`);
            break;
        case 6:
            return console.log(`Junho`);
            break;
        case 7:
            return console.log(`Julho`);
            break;
        case 8:
            return console.log(`Agosto`);
            break;
        case 9:
            return console.log(`Setembro`);
            break;
        case 10:
            return console.log(`Outubro`);
            break;
        case 11:
            return console.log(`Novembro`);
            break;
        case 12:
            return console.log(`Dezembro`);
            break;
        default:
            return console.log('não é um Mês, por favor tente novamente')
            break;
    }
}

Mes_extenso(4)