

function calcular() {
    var a = parseInt(document.getElementById("numero1").value);
    var b = parseInt(document.getElementById("numero2").value);
    var op = document.getElementById("operar").value;
    var resultado;

    if (op == "sumar") {
        resultado = a + b;
    }
    if (op == "restar") {
        resultado = a - b;
    }
    if (op == "multiplicar") {
        resultado = a * b;
    }

    document.getElementById("resultado2").textContent = "El resultado es: " + resultado;
}

function validar() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usuario == "francisco" && clave == "1234") {
        window.location.href = "/autos.html";
    } else {
        alert("usuario invalido");
    }

}


function limpiar() {

    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";

}


function afiliar() {
    var ema = document.getElementById("email").value;

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("edad").value = "";
    if (ema == "2627312@ucc.edu.ar") { document.getElementById("resultado3").textContent = "Usuario Ya existe"; }
    else {
        document.getElementById("resultado3").textContent = "Usuario Afiliado";
    }
}
function cotizar() {
    var mar = document.getElementById("marca").value;
    var ti = document.getElementById("tipo").value;

    if (mar == "1" && ti == "1") {
        document.getElementById("resultado4").textContent = "150.000 DOLARES";
    }
    if (mar == "1" && ti == "2") {
        document.getElementById("resultado4").textContent = "200.000 DOLARES";
    }
    if (mar == "1" && ti == "3") {
        document.getElementById("resultado4").textContent = "1.000.000 DOLARES";
    }
    if (mar == "1" && ti== "4"){
        document.getElementById("resultado4").textContent = "120.000 DOLARES";
    }
    if (mar=="2" && ti == "1"){document.getElementById("resultado4").textContent = "10.000 DOLARES";}
        if (mar=="2" && ti == "2"){document.getElementById("resultado4").textContent = "12.000 DOLARES";
    }

    if (mar=="2" && ti == "3"){document.getElementById("resultado4").textContent = "15.000 DOLARES";}
if (mar=="2" && ti == "4"){document.getElementById("resultado4").textContent = "18.000 DOLARES";}
if(mar=="3" && ti == "1"){ document.getElementById("resultado4").textContent = "13.000 DOLARES";}
if(mar=="3" && ti == "2"){ document.getElementById("resultado4").textContent = "15.000 DOLARES";}
if(mar=="3" && ti == "3"){ document.getElementById("resultado4").textContent = "10.000 DOLARES";}   
if(mar=="3" && ti == "4"){document.getElementById("resultado4").textContent = "12.000 DOLARES";}
if (mar=="4" && ti == "1"){document.getElementById("resultado4").textContent = "12.000 DOLARES";}
if (mar=="4" && ti == "2"){document.getElementById("resultado4").textContent = "15.000 DOLARES";}
if (mar=="4" && ti == "3"){document.getElementById("resultado4").textContent = "10.000 DOLARES";}
if (mar=="4" && ti == "4" ){document.getElementById("resultado4").textContent = "12.000 DOLARES"; }
}