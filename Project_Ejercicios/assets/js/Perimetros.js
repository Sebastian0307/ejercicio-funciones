function pertriangulo(){
    let ladoa = parseFloat(document.getElementById("tri_a").value);
    let ladob = parseFloat(document.getElementById("tri_b").value);
    let ladoc = parseFloat(document.getElementById("tri_c").value);
    let perimetro = (ladoa + ladob + ladoc);
    document.getElementById("peri_tri").innerHTML = "El perimetro es de: " + perimetro;
}

function perparalelogramo(){
    let ladoa = parseFloat(document.getElementById("par_a").value);
    let ladob = parseFloat(document.getElementById("par_b").value);
    let perimetro = 2 * (ladoa + ladob);
    document.getElementById("peri_par").innerHTML = "El perimetro es de: " + perimetro;
}

function perrectangulo(){
    let ladoa = parseFloat(document.getElementById("rec_a").value);
    let ladob = parseFloat(document.getElementById("rec_b").value);
    let perimetro = 2 * (ladob + ladoa);
    document.getElementById("peri_rec").innerHTML = "El perimetro es de: " + perimetro;
}

function percuadrado(){
    let ladoa = parseFloat(document.getElementById("cua_a").value);
    let perimetro = 4 * ladoa;
    document.getElementById("peri_cua").innerHTML = "El perimetro es de: " + perimetro;
}

function perrombo(){
    let ladoa = parseFloat(document.getElementById("rom_a").value);
    let perimetro = 4 * ladoa;
    document.getElementById("peri_rom").innerHTML = "El perimetro es de: " + perimetro;
}

function percometa(){
    let ladoa = parseFloat(document.getElementById("com_a").value);
    let ladob = parseFloat(document.getElementById("com_b").value);
    let perimetro = 2 * (ladob + ladoa);
    document.getElementById("peri_com").innerHTML = "El perimetro es de: " + perimetro;
}

function pertrapecio(){
    let ladoB = parseFloat(document.getElementById("tra_B").value);
    let ladob = parseFloat(document.getElementById("tra_b").value);
    let ladoa = parseFloat(document.getElementById("tra_a").value);
    let ladobc = parseFloat(document.getElementById("tra_c").value);
    let perimetro = ladoB + ladob + ladoa + ladobc;
    document.getElementById("peri_tra").innerHTML = "El perimetro es de: " + perimetro;
}

function percirculo(){
    let radio = parseFloat(document.getElementById("r_cir").value);
    let perimetro = Math.round(2 * Math.PI * radio);
    document.getElementById("peri_cir").innerHTML = "El perimetro redondeado es de: " + perimetro;
    let perimetro2 = 2 * Math.PI * radio;
    document.getElementById("peri_cir2").innerHTML = "El perimetro es de: " + perimetro2;
}

/**
 * Areas figuras planas
 */

function areatriangulo(){
    let base = parseFloat(document.getElementById("tri_base").value);
    let altura = parseFloat(document.getElementById("tri_altura").value);

    let area = (base * altura)/2
    document.getElementById("area_tri").innerHTML = "El area es de: " + area;
}

function areaparalelogramo(){
    let ladob = parseFloat(document.getElementById("par_lado_b").value);
    let altura = parseFloat(document.getElementById("par_altura").value);

    let area = (ladob * altura)
    document.getElementById("area_par").innerHTML = "El area es de: " + area;
}

function arearectangulo(){
    let ladoa = parseFloat(document.getElementById("rec_lado_a").value);
    let ladob = parseFloat(document.getElementById("rec_lado_b").value);

    let area = (ladob * ladoa)
    document.getElementById("area_rec").innerHTML = "El area es de: " + area;
}

function areacuadrado(){
    let ladoa = parseFloat(document.getElementById("cua_lado_a").value);
    let area = (ladoa) ** 2;
    document.getElementById("area_cua").innerHTML = "El area es de: " + area;
}

function arearombo(){
    let diamayor = parseFloat(document.getElementById("dia_mayor").value);
    let diamenor = parseFloat(document.getElementById("dia_menor").value);
    let area = (diamayor * diamenor)/2;
    document.getElementById("area_rom").innerHTML = "El area es de: " + area;
}

function areacometa(){
    let diamayor = parseFloat(document.getElementById("com_dia_mayor").value);
    let diamenor = parseFloat(document.getElementById("com_dia_menor").value);
    let area = (diamayor * diamenor)/2;
    document.getElementById("area_com").innerHTML = "El area es de: " + area;
}

function areatrapecio(){
    let ladoB = parseFloat(document.getElementById("tra_lado_B").value);
    let ladob = parseFloat(document.getElementById("tra_lado_b").value);
    let altura = parseFloat(document.getElementById("tra_altura").value);
    let area = ((ladoB+ladob)*altura)/2;
    document.getElementById("area_tra").innerHTML = "El area es de: " + area;
}

function areacirculo(){
    let radio = parseFloat(document.getElementById("r_circulo").value);
    let area = Math.round(Math.PI * (radio ** 2));
    document.getElementById("area_cir").innerHTML = "El area redondeada es de: " + area;
    let area2 = Math.PI * (radio ** 2);
    document.getElementById("area_cir2").innerHTML = "El area es de: " + area2;
}