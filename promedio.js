// function calcularPromedio(lista){
//     let sumaLista = 0;
//     for(let i = 0;  i < lista.length; i++){
//         sumaLista = sumaLista + lista[i];
//     }
//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;
// }

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function(primerElemento = 0, nuevoElemento){
            return primerElemento + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}