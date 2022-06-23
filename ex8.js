/**Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */


function multi_absoluto(num1, num2){
    var abs_num1 = Math.abs(num1);
    var abs_num2 = Math.abs(num2);

    let resultado = 0

    for(let i = 0; i < num2; i++){
        resultado += num1
    }
    return console.log(resultado)
}

multi_absoluto(12, 3)