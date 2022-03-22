//Helpers
function esPar(numero){
    return numero % 2 === 0;
}

// Calcuñadora de Mediana
function medianaSalarios(lista){
    const mitadLista = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const elementoMitad1 = lista[mitadLista - 1];
        const elementoMitad2 = lista[mitadLista];
        const mediana = (elementoMitad1 + elementoMitad2) / 2;
        return mediana; 
    } else{
        return lista[mitadLista];
    }
}

// Mediana General
const salariosColombia = colombia.map(
    function(persona){
        return persona.salario;
    }
);

const salariosColombiaOrdenado = salariosColombia.sort(
    function(salario, nuevoSalario){
        return salario - nuevoSalario;
    }
);

const medianaGeneralColombia = medianaSalarios(salariosColombiaOrdenado);

// Mediana del Top 10%

const spliceInicial = (salariosColombiaOrdenado.length * 90) /100;
const spliceContador = salariosColombiaOrdenado.length - spliceInicial; 

const salariosColombiaTop10 = salariosColombiaOrdenado.splice(
    spliceInicial,
    spliceContador,
);

const medianaTop10Colombia = medianaSalarios(salariosColombiaTop10);

console.log({
    medianaGeneralColombia,
    medianaTop10Colombia,    
});