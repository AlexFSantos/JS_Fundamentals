/**Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 */


function Compara_Numero(num1, num2){
    if(num1 > num2){
        return console.log(`O número ${num1} é maior que o ${num2}.`)
    }
    if(num1 < num2){
        return console.log(`O número ${num1} é menor que o ${num2}.`)
    }
    if(num1 == num2){
        return console.log(`O número ${num1} é igual ao número ${num2}.`)
    }
}

Compara_Numero(10, 10)