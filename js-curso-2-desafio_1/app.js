let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log('O botão foi clicado!');
}
function verificarAlerta(){
    alert('Eu amo JS!');
    console.log('O botão foi clicado!');
}
function verificarPrompt(){
    let cidade = prompt('Informe o nome de uma cidade: ');
    alert(`Estive em ${cidade} e lembrei de você!`);
}
function verificarSoma(){
    let num1 = parseInt(prompt('Informe um número:'));
    let num2 = parseInt(prompt('Informe outro número: '));
    let soma = num1 + num2;
    alert(`A soma dos números informados é ${soma}`);
}