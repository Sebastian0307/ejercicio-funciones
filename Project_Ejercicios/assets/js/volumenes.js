function volumencubo(){
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);
    let volumen = (lado1 * lado2 * lado3);
    
    document.getElementById("vol_cubo").innerHTML = "El volumen es de: " + volumen;
}

function volumenparalelepipedo(){
    let ladob = parseFloat(document.getElementById("par_ladob").value);
    let ladol = parseFloat(document.getElementById("par_ladol").value);
    let altura = parseFloat(document.getElementById("par_altura").value);
    let volumen = (ladol * ladob * altura);
    
    document.getElementById("vol_par").innerHTML = "El volumen es de: " + volumen;
}

function volumencilindro(){
    let radio = parseFloat(document.getElementById("cil_r").value);
    let altura = parseFloat(document.getElementById("cil_altura").value);
    let volumen = Math.PI * (radio ** 2) * altura;
    
    document.getElementById("vol_cil").innerHTML = "El volumen es de: " + volumen;
}

function volumenesfera(){
    let radio = parseFloat(document.getElementById("es_r").value);
    let volumen = 4/3 * Math.PI * (radio ** 3);
    let volumen2 = Math.round(4/3 * Math.PI * (radio ** 3));

    document.getElementById("vol_es2").innerHTML = "El volumen redondeado es de: " + volumen2;
    document.getElementById("vol_es").innerHTML = "El volumen es de: " + volumen;
}

function volumencono(){
    let radio = parseFloat(document.getElementById("cono_r").value);
    let altura = parseFloat(document.getElementById("cono_altura").value);
    let volumen = 1/3 * Math.PI * (radio ** 2) * altura;
    let volumen2 = Math.round(1/3 * Math.PI *(radio ** 2) * altura);

    document.getElementById("vol_cono").innerHTML = "El volumen redondeado es de: " + volumen2;
    document.getElementById("vol_cono2").innerHTML = "El volumen es de: " + volumen;
}

