
function optype(){
    
    let op = document.getElementById("select").value;
    document.getElementById("sinal").innerHTML = op;
}

function input(){

    let n1 = document.getElementById("input1").value;
    n1 = parseFloat(n1);
    console.log(n1);

    
    let n2 = document.getElementById("input2").value;
    n2 = parseFloat(n2);
    console.log(n2);

   
    let op = document.getElementById("select").value;


   
    switch(op){
        case '+':
            soma(n1, n2);
            break;
        case '-':
            subtracao(n1, n2);
            break;
        case '*':
            multiplicacao(n1, n2);
            break;
        case '/':
            divisao(n1, n2);
            break;
    }
}

function soma(n1, n2){
     let resp = n1 + n2;
    output(resp);
}


function subtracao(n1, n2){
     let resp = n1 - n2;
    output(resp);
}


function multiplicacao(n1, n2){
     let resp = n1 * n2;
    output(resp);
}


function divisao(n1, n2){  
    if(n2!=0){
    resp = n1/n2;
    output(resp);
    }
     resp = "Não é possivel dividir por 0";
     output(resp) ;
    }
    
   

  


function output(resp){
   console.log(resp);




   document.getElementById("resultado").innerHTML = 'Resultado = ' + resp;
}
