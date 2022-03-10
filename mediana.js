function calcularMediana(lista){

    function ordenarLista(primerNumero, nuevoNumero){
        return primerNumero - nuevoNumero;
    }
    lista.sort(ordenarLista);

    let mitadLista = parseInt(lista.length / 2);

    function esPar(numero){
        if(numero % 2 === 0){
            return true;
        } else{
            return false;
        }
    }

    let mediana;

    if(esPar(lista.length)){
        const numero1Mitad = lista[mitadLista -1]
        const numero2Mitad = lista[mitadLista]
        mediana = (numero1Mitad + numero2Mitad) / 2;
        return mediana;
    } else {
        mediana = lista[mitadLista];
        return mediana;
    }
}