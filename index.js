let nombre = prompt('Ingresa tu nombre')

let total = 0

let seleccionarProducto = parseInt(prompt('Hola ' + nombre + ', ingresa el numero del producto que deseas agregar al carrito: 1.Conjunto de terciopelo  2.Conjunto de plumeti  3.Conjunto de encaje  4.Conjunto de encaje con aro'))

let comprar = true
let decisión
// incorporacion de arrays
let productos = []
let carrito = []

// incorporacion de objetos
class producto {
    constructor(nombre, precio, id){
        this.nombre = nombre,
        this.precio = precio,
        this.id = id
    }
}

// incorporacion de metodo push
const producto1 = new producto('terciopelo', 1250, 1)
productos.push(producto1)

const producto2 = new producto('plumeti', 950, 2)
productos.push(producto2)

const producto3 = new producto('encaje', 950, 3)
productos.push(producto3)

const producto4 = new producto('encajeAro', 1000, 4)
productos.push(producto4)

console.log(productos)

while (comprar === true) {
    if (seleccionarProducto === 1) {
        carrito.push(productos[0])
    }else if (seleccionarProducto ===2) {
        carrito.push(productos[1])
    }else if (seleccionarProducto ===3) {
        carrito.push(productos[2])
    }else if (seleccionarProducto === 4) {
        carrito.push(productos[3])
    }else {
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

carrito.forEach( (elemento) => {
    total = total + elemento.precio
})

// for (let i = 0; i < carrito.length; i++) {
//     total = total + carrito[i].precio   
// }


console.log(carrito);

alert('Pagando con tarjeta de crédito, débito o mercado pago el valor total es de $'+total)

function calcularPagoEfectivo(valor) {
    let pagoEfectivo = total*(10/100)
    valor = valor - pagoEfectivo
    return valor
}
let pagoEfectivo = calcularPagoEfectivo(total)

alert('Pagando con transferencia o efectivo el valor total es de $'+pagoEfectivo+'!!')

alert('Muchas gracias por comprar nuestros productos. Esperamos que vuelvas pronto!')
