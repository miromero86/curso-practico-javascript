// Codigo del Cuadrado

console.group("Cuadrado");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cms");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cms");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cms2");

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cms, " + ladoTriangulo2 + "cms, " + baseTriangulo + "cms.");

// console.log("La altura del triangulo es: " + alturaTriangulo + "cms");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cms");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cms2");

console.groupEnd();

// Codigo del Circulo

console.group("Circulo");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

// console.log("El radio del circulo es: " + radioCirculo + "cms, ");

// console.log("El Diametro del circulo es: " + diametroCirculo + "cms, ");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cms");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cms2");

console.groupEnd();


// Aqui interactuamos con el HTML

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1Triangulo");
    const inputLado1Triangulo = parseFloat(input1.value);

    const input2 = document.getElementById("inputLado2Triangulo");
    const inputLado2Triangulo = parseFloat(input2.value);

    const inputBase = document.getElementById("inputBaseTriangulo");
    const inputBaseTriangulo = parseFloat(inputBase.value);

    const perimetroT = inputLado1Triangulo + inputLado2Triangulo + inputBaseTriangulo;
    alert(perimetroT);
}

function calcularAreaTriangulo() {

    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const inputAlturaTriangulo = parseFloat(inputAltura.value);

    const inputBase = document.getElementById("inputBaseTriangulo");
    const inputBaseTriangulo = parseFloat(inputBase.value);

    const areaT = (inputBaseTriangulo * inputAlturaTriangulo) / 2;
    alert(areaT);
}

// Circulo

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputRadioCirculo");
    const inputRadioCirculo = parseFloat(inputRadio.value);

    const diametroCir = inputRadioCirculo * 2;

    const pi = Math.PI;

    const perimetroCir = diametroCir * pi;
    alert(perimetroCir);

}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("inputRadioCirculo");
    const inputRadioCirculo = parseFloat(inputRadio.value);

    const areaCir = (inputRadioCirculo * inputRadioCirculo) * 2;
    alert(areaCir);
}