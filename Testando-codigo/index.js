// Crie uma função para verificar se um valor é Truthy
function verificarTelefone() {
    const telefone = document.getElementById('telefone').value;
    const resultado = document.getElementById('resultado');
    
    // Verifica se o telefone é um número válido
    if (telefone === "83996154889") {
        resultado.textContent = 'Telefone válido';
    } else if (telefone === "83984165123") {
        resultado.textContent = 'Telefone de Fany';
    } else if (telefone === "83987489651") {
        resultado.textContent = 'Telefone de Jonas Daltonico';
    } else {
        resultado.textContent = 'Telefone inválido';
    }
}
// Crie uma função matemática que retorne o perímetro de um quadro
function calcularPerimetro(lado) {
    return lado * 4;
}
calcularPerimetro(8)
// lembrando: perímetro é a soma dos quatro lados do quadrado
// Crie uma função que retorne o seu nome completo
function obterNomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}
console.log(obterNomeCompleto('Thays', 'Dantas'));
// ela deve possuir os parâmetros: nome e sobrenome
// Crie uma função que verifica se um número é par
function verificarNumeroPar(numero){
    if (numero % 2 === 0){
        return "par"
    }else{
        return "impar"
    }
}
console.log(verificarNumeroPar(8))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarTipoDado(dado){
    return typeof dado
}

console.log(verificarTipoDado(18))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
// Corrija o erro abaixo
function mostrarNomeCompleto(){
    window.addEventListener('scroll', function(){})
    console.log('Thays Dantas');
}
mostrarNomeCompleto();