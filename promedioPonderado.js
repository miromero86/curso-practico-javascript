function calcularPromedioPonderado(lista){

    const notasXCreditos = lista.map(
        function(elemento){
            return elemento.nota * elemento.credito;
        }
    );

    const sumaNotasXCreditos = notasXCreditos.reduce(
        function(valor = 0, valorNuevo){
            return valor + valorNuevo;
        }
    );

    const creditos = lista.map(
        function(elemento){
            return elemento.credito;
        }
    );

    const sumaCreditos = creditos.reduce(
        function(valor =0, valorNuevo){
            return valor + valorNuevo;
        }
    );

    const promedioPonderado = sumaNotasXCreditos / sumaCreditos;

    return promedioPonderado;
}