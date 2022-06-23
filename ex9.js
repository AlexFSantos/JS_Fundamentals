/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */


function repetir(num1, num2){
    // vai ser um for com o numero 2 com a quantidade de repetição e 
    //um array para receber
    let resultado = []

    for(let i = 0; i < num2; i++){
        resultado.push(num1);
    }
    return console.log(`Aqui está o array [${resultado}]`)

}

repetir(2, 8)