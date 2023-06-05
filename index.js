let nombre = prompt('Ingresa tu nombre')

let total = 0

let seleccionarProducto = parseInt(prompt('Hola ' + nombre + ', ingresa el numero del producto que deseas agregar al carrito: 1.Conjunto de terciopelo  2.Conjunto de plumeti  3.Conjunto de encaje  4.Conjunto de encaje con aro'))

let comprar = true
let decisión

while (comprar === true) {
    if (seleccionarProducto === 1) {
        total = total + 1250
    }else if (seleccionarProducto ===2) {
        total = total + 950
    }else if (seleccionarProducto ===3) {
        total = total + 950
    }else if (seleccionarProducto === 4) {
        total = total + 1000
    }else{
        seleccionarProducto = parseInt(prompt('El numero ingresado no pertenece a un producto existente, por favor ingresa nuevamente el numero del producto que desea agregar al carrito: 1.Conjunto de terciopelo  2.Conjunto de plumeti  3.Conjunto de encaje  4.Conjunto de encaje con aro'))
        continue
    }

    decisión = parseInt(prompt('Deseas agregar mas productos al carrito? 1.Si  2.no'))
    if (decisión === 1) {
        seleccionarProducto = parseInt(prompt('ingresa el numero del producto que desea agregar al carrito: 1.Conjunto de terciopelo  2.Conjunto de plumeti  3.Conjunto de encaje  4.Conjunto de encaje con aro'))
    }else if (decisión ===2) {
        comprar = false
    }




}

alert('Pagando con tarjeta de crédito, débito o mercado pago el valor total es de $'+total)

function calcularPagoEfectivo(valor) {
    let pagoEfectivo = total*(10/100)
    valor = valor - pagoEfectivo
    return valor
}
let pagoEfectivo = calcularPagoEfectivo(total)

alert('Pagando con transferencia o efectivo el valor total es de $'+pagoEfectivo+'!!')

alert('Muchas gracias por comprar nuestros productos. Esperamos que vuelvas pronto!')
