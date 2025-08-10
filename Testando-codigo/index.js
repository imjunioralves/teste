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
    

    alert("Acabei de conhecer " + digitarNome + "que tem " + digitouIdade + " anos")
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