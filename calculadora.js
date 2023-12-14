



function calculadora(){
    let Operacao = prompt("Escreva o nome da operação!");
    if(Operacao == "soma"){
        let x1 = prompt("Digite o valor primário!");
        let y2 = prompt("Digite o valor secundário!");
        soma (parseInt(x1,y2));
        console.log (soma(parseInt(x1), parseInt(y2)));          
    }else if(Operacao == "subtracao"){
        let x = prompt("Digite o valor primário!");
        let y = prompt("Digite o valor secundário!");
        subtracao(x,y);
        console.log(subtracao(x,y));
    }else if(Operacao == "produto"){
        let x = prompt("Digite o valor primário!");
        let y = prompt("Digite o valor secundário!");
        produto(x,y);
        console.log(produto(x,y));
    }else if(Operacao == "divisao"){
        let x = prompt("Digite o valor primário!");
        let y = prompt("Digite o valor secundário!");
        divisao(x,y);
        console.log(divisao(x,y));
    }else{
        Operacao = false;
        console.log("Conta inválida!");
        return("Digite uma operação válida!");
    }

        
    }
    calculadora();
    


function soma(x,y){
    return x + y;
}
function subtracao(x,y){
    return x - y;
}
function produto(x,y){
    return x*y;
}
function divisao(x,y){
    return x/y;
}
