//Criar uma função que exibe "Olá, mundo!" no console
function olaMundo(){
    console.log('Ola Mundo!');
}
olaMundo();

//Criar uma função que exibe "Ola seu nome é [nome]" no console
function addNome(nome){
    console.log(`Olá seu nome é ${nome}`);
}
addNome('Laiane');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero){
    let dobro = numero * 2;
    alert(`O dobro do numero informado é ${dobro}`);
    console.log(`O dobro do numero informado é ${dobro}`);
}
dobro(parseInt(prompt('Informe um numero: ')));

//Criar uma função que recebe três números como parâmetros e retorna a média deles
function mediaNumeros(){
    let num1 = parseInt(prompt('Informe um numero: '));
    let num2 = parseInt(prompt('Informe outro numero: '));
    let num3 = parseInt(prompt('Informe outro numero: '));

    let media = (num1 + num2 + num3) / 3;
    alert(`A media dos numeros informados é ${media}`);
}
mediaNumeros();

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles
function maiorNumero(){
    let num4 = parseInt(prompt('Informe um numero: '));
    let num5 = parseInt(prompt('Informe outro numero: '));

    let maior = num4 > num5 ? num4 : num5;
    alert(`O maior numero informado é ${maior}`);
}
maiorNumero();

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(){
    let num6 = parseInt(prompt('Informe um numero: '));
    multi = num6 * num6;
    alert(`A multiplicação do numero informado é ${multi}`);
}
multiplicaNumero();



