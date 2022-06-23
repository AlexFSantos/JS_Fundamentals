/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
 */

function converterIdadeEmAnosParaDias(idade){
    var converter = idade * 365;

    return console.log(`Olá a idade inserida em dias da o total de ${converter} dias de vida!`)
}


converterIdadeEmAnosParaDias(22) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550