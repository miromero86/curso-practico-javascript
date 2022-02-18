//const precioOriginal = 120;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function botonCalcularPrecioConDescuento(){
   const inputPrecio = document.getElementById("InputPrecio");
   const precioValor = inputPrecio.value;

   const inputDescuento = document.getElementById("InputDescuento");
   const descuentoValor = inputDescuento.value;

   const precioTotal = calcularPrecioConDescuento(precioValor, descuentoValor);

   const resultadoPrecio = document.getElementById("ResultadoPrecio");
   resultadoPrecio.innerText = "El precio con un descuento del " + descuentoValor + "%" + " es: $" + precioTotal

}



//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//});

