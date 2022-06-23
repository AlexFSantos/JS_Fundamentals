/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */

/* implementação 1 */
/*function x(num, min, max, inclusive = false){
    if(inclusive == true){
        compara =  num >= min && num <= max
        return console.log(`O ${num} está entre o min ou é igual a ${min} e ou igual a  max ${max}`)
    }
    if(num > min || num < max){
        return console.log(`O ${num} está entre o min ${min} e o max ${max}`)
    }
    

}
*/


/* implementação 2*/
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return console.log(numero >= minimo && numero <= maximo)
    return console.log(numero > minimo && numero < maximo)
}
    

estaEntre(8,1,10)