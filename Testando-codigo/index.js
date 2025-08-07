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