/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
 */

function salario(horaTrabalho, salarioHora){
    const salarioBruto = horaTrabalho * salarioHora
    const salarioLiquido = salarioBruto * 30/10

    return console.log(`Salário liquido igual a R$ ${salarioLiquido}`)


}

salario(44, 15.3)
salario(44, 8)