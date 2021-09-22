var btn1 =  document.getElementById('btn1')
var btn2 =  document.getElementById('btn2')
var btn3 =  document.getElementById('btn3')
var btn4 =  document.getElementById('btn4')
var btn5 =  document.getElementById('btn5')
var btn6 =  document.getElementById('btn6')
var btn7 =  document.getElementById('btn7')
var btn8 =  document.getElementById('btn8')
var btn9 =  document.getElementById('btn9')
var btn0 =  document.getElementById('btn0')
var btnSoma =  document.getElementById('btn-soma')
var btnSubtracao =  document.getElementById('btn-subtracao')
var btnMultiplicacao =  document.getElementById('btn-multiplicacao')
var btnDivisao =  document.getElementById('btn-divisao')
var btnIgual =  window.document.getElementById('btn-igual')
var btnPonto =  document.getElementById('btn-ponto')
var btnLimpar = document.getElementById('btn-limpar')

var tela = document.getElementById('tela')
var numero = document.getElementById('numero')

var lastNumber;
var operacao;

//EVENTOS

btnLimpar.addEventListener('click', limpar)
btnSoma.addEventListener('click', somar)
btnSubtracao.addEventListener('click', subtrair)
btnMultiplicacao.addEventListener('click', multiplicar)
btnDivisao.addEventListener('click', dividir)
btnIgual.addEventListener('click', igualdade)

//início eventos de número - mudar futuramente usando uma "classe" para os botões
btn0.addEventListener('click', function(event){
    addNumero(btn0);
});

btn1.addEventListener('click', function(event){
    addNumero(btn1);
});

btn2.addEventListener('click', function(event){
    addNumero(btn2);
});

btn3.addEventListener('click', function(event){
    addNumero(btn3);
});

btn4.addEventListener('click', function(event){
    addNumero(btn4);
});

btn5.addEventListener('click', function(event){
    addNumero(btn5);
});

btn6.addEventListener('click', function(event){
    addNumero(btn6);
});

btn7.addEventListener('click', function(event){
    addNumero(btn7);
});

btn8.addEventListener('click', function(event){
    addNumero(btn8);
});

btn9.addEventListener('click', function(event){
    addNumero(btn9);
});
//fim eventos de números

//FUNÇÕES
function limpar(){
    numero.innerText = ""
}

function addNumero(btn){
    if(!(numero.innerText == "" && btn.value == 0) && numero.innerText.length <= 10){
        numero.innerText += btn.value
    }
}

function setLastNumber(){
    lastNumber = Number(numero.innerText)
    limpar()
}


function somar(){
    setLastNumber()
    operacao = "soma"
}

function multiplicar(){
    setLastNumber()
    operacao = "multiplicacao"
}

function dividir(){
    setLastNumber()
    operacao = "divisao"
}

function subtrair(){
    setLastNumber()
    operacao = "subtracao"
}

function igualdade(){
    var valor2 = Number(numero.innerText)
    var retorno;
    switch(operacao){
        case "soma":
            retorno = lastNumber + valor2
            break
        case "subtracao":
            retorno = lastNumber - valor2
            break
        case "multiplicacao":
            retorno = lastNumber * valor2
            break
        case "divisao":
            retorno = lastNumber / valor2
            break
    }

    numero.innerText = retorno
}