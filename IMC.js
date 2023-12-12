


function conta(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById("altura").value;
    let nome = document.getElementById("nome").value;
    let div = document.getElementById("text");
    let classe = '';
   
    let altura2 = altura*altura;
    const calculo = (peso / parseFloat(altura2));
   
if( peso !== " " && altura !== " " && nome !== " " ){
    if (calculo <= 18.5){
        classe = "MAGREZA";
    }else if (calculo > 18.5 && calculo<= 24.9) {
        classe = "NORMAL";
    }else if(calculo >= 25 && calculo <=29.9){
        classe = "SOBREPESO";
    }else if (calculo >=30 && calculo <= 34.9) {
        classe = "OBESIDADE I";
    }else if (calculo >= 35 && calculo <= 39.9) {
        classe = "OBESIDADE II";
    }else if (calculo >= 40){
        classe = "OBESIDADE III";

    }
    div.textContent = `${nome}, seu IMC é ${calculo.toFixed(2)}, você está na categoria: ${classe}`;
    }else{
        console.log("Digite os números corretos!")
    }

}
