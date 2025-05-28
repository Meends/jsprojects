let display = document.getElementById('display');
let expressao = '';

function adicionarnumero(valor){
    expressao+=valor;
    atualizarDisplay();
}
function operar(operador){
    const ultimoChar = expressao.slice(-1);
    if ('+-*/'.includes(ultimoChar)){
            expressao = expressao.slice(0, -1);
    }
    expressao+= operador;
    atualizarDisplay()          
}

function limpar(){
    expressao = '';
    atualizarDisplay();
}
function calcular(){
    try{
        const resultado = eval(expressao);
        expressao = resultado.toString();
        atualizarDisplay();
    }
    catch{
        display.innerText='Erro';
    }
}
function atualizarDisplay(){
    display.innerText = expressao ||'0';
}
