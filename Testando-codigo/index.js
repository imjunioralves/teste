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
        alert("Antes de " + numero + ", temos o número " + antecessor + " " + "depois do " + numero + ", temos o número " + sucessor)
    }}

function calculadoraDeTroco(){
    let produto = prompt("Qual produto você está comprando?")
    let valorDoProduto = Number(prompt(`Quanto custa ${produto} que você está comprando ?`))
    let valorParaPagar = Number(prompt(`Qual foi o valor que você deu para para ${produto}?`))
    let troco =  valorParaPagar - valorDoProduto
    alert(`Você comprou ${produto} que custou R$${valorDoProduto.toFixed(2)}. 
Deu R$${valorParaPagar.toFixed(2)} em dinheiro e vai receber R$${troco.toFixed(2)} de troco.`);


}