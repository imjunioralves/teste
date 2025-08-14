function clicarNoBotao1(){
    alert("você clicou no botão 1")
}

function clicarNoBotao2(){
    alert("você clicou no botão 2")
}

function clicarNoBotao3(){
    alert("você clicou no botão 3")
}

function clicarNoBotao4(){
    let digitarNome = prompt("Qual é o seu nome ?")

    if(digitarNome){
        let digitouIdade = prompt("Olá " + digitarNome + ", Qual a sua idade ?")
    

    alert("Acabei de conhecer " + digitarNome + " que tem " + digitouIdade + " anos")
}}

function clicarNoBotao5(){
    let numero = prompt("digite um número inteiro qualquer")

    if(numero){
        let antecessor = numero - 1
        let sucessor = Number(numero) + 1
        alert(`Antes de ${numero}, temos o número ${antecessor}.
depois do ${numero}, temos o número ${sucessor}`)
    }}

function calculadoraDeTroco(){
    let produto = prompt("Qual produto você está comprando?")
    let valorDoProduto = Number(prompt(`Quanto custa ${produto} que você está comprando ?`))
    let valorParaPagar = Number(prompt(`Qual foi o valor que você deu para para ${produto}?`))
    let troco =  valorParaPagar - valorDoProduto
    alert(`Você comprou ${produto} que custou R$${valorDoProduto.toFixed(2)}. 
Deu R$${valorParaPagar.toFixed(2)} em dinheiro e vai receber R$${troco.toFixed(2)} de troco.`);
}

function conversorDeMedidas(){
    let distancia = Number(prompt("Digite uma distancia em metros (m)"))
    let resultado = window.document.getElementById('medidaConvertida')

    let km = distancia / 1000
    let hm = distancia / 100
    let dam = distancia / 10
    let dm = distancia * 10
    let cm = distancia * 100
    let mm = distancia *1000

    resultado.innerHTML = `<p><b>A distância de ${distancia} metros, corresponde a...</b></p>`
    resultado.innerHTML += `<p>${km} quilômetros (km)</p>`
    resultado.innerHTML += `<p>${hm} hectômetros (hm)</p>`
    resultado.innerHTML += `<p>${dam} decâmetros (dam)</p>`
    resultado.innerHTML += `<p>${dm} decímetros (dm)</p>`
    resultado.innerHTML += `<p>${cm} centímetros (cm)</p>`
    resultado.innerHTML += `<p>${mm} milímetros (mm)</p>`
}

function converterTemperatura(){
    let temperatura = Number(prompt('Digite aqui a temperatura em °C (Celcius)').replace(',', '.'))
    let resultadoTemperatura = window.document.getElementById('temperatuaConvertida')

    let fahrenheit = (Number(temperatura) * 9/5) + 32
    let kelvin = Number(temperatura) + 273.15

    resultadoTemperatura.innerHTML = `<p><b>A temperatura ${temperatura}, corresponde a...</p></b> `
    resultadoTemperatura.innerHTML += `<p> ${fahrenheit}°F (Fahrenheit)`
    resultadoTemperatura.innerHTML += `<p> ${kelvin}°K (kelvin)`
}

//let digitarMoeda = Number(prompt('Antes de mais nada. Quanto está a cotação do Dolar agora?').replace(',', '.'))

/*function converterMoedas(){
    let dinheiroNaCarteira = Number(prompt('Quantos R$ você tem na carteira?'))
    let valorNaCarteira = window.document.getElementById('conversorDeMoedas')
    let resultadoDoDinheiro = dinheiroNaCarteira * digitarMoeda

    valorNaCarteira.innerHTML = `<p>Você tem ${resultadoDoDinheiro.toFixed(2)} Dolares`
}*/

function calculadoraDeDesconto(){
    let produtoEstaComprando = prompt('Qual produto está comprando?')
    let precoDoProduto = Number(prompt(`Qual é o preço de ${produtoEstaComprando}?`))
    let valorDoDesconto = precoDoProduto  * 10 / 100
    let precoFinal = precoDoProduto - valorDoDesconto
    let resultadoDoDesconto = window.document.getElementById('calcularDesconto')

    resultadoDoDesconto.innerHTML = `<h2>Calculando o desconto de 10% de ${produtoEstaComprando}</h2>`
    resultadoDoDesconto.innerHTML += `<p>O preço original era R$ ${precoDoProduto.toFixed(2)}</p>`
    resultadoDoDesconto.innerHTML += `<p>Você acaba de ganhar R$ ${valorDoDesconto.toFixed(2)} de desconto</p>`
    resultadoDoDesconto.innerHTML += `<p>No fim, você vai pagar R$ ${precoFinal.toFixed(2)} pelo produto ${produtoEstaComprando}</p>`


}

function reajusteDoSalario(){
    let nomeDoFuncionario = prompt('Qual é o nome do funcionário?');
    let salarioDoFuncionario = Number(prompt(`Qual é o salário de ${nomeDoFuncionario}?` ).replace(',' , '.'));
    let reajusteSalarial = Number(prompt(`O Salário de ${nomeDoFuncionario}, vai ser reajustado em qual porcentagem?`));
    
    let valorAumento = salarioDoFuncionario * (reajusteSalarial / 100);
    let salarioFinal = salarioDoFuncionario + valorAumento;

    let semestres = window.document.getElementById('paraReajustarOSalario');

    semestres.innerHTML = `<p>O salário atual é de ${salarioDoFuncionario.toFixed(2)}</p>`
    semestres.innerHTML += `<p>Com um aumento de ${reajusteSalarial}%, o salario vai aumentar R$ ${valorAumento.toFixed(2)}no proximo mês </p>`
    semestres.innerHTML += `<p>E a partida dai, ${nomeDoFuncionario} vai passar a ganhar ${salarioFinal.toFixed(2)}</p>`




}