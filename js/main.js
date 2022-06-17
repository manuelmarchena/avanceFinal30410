let shop
let cesta = []
let contador = 0
alert("Hola! Buenas noches! Por favor abra la consola, si desea salir  presione cancelar en los diálogos a continuación")

/**
 * ? Realiza validación de la información suministrada
 */

function verificacion() {
    shop = prompt("Escriba el codigo de un producto [H001, H002, H003, H004]")
    shop = shop.toUpperCase()
    verifica = itemsEnTienda.find(e => e.id === shop)
    while (verifica == undefined) {
        verificacion()
    }
    return shop
}

/**
 * ? Genera la cesta
 */

let generarShop = (shop) => {
    let articulosComprado = itemsEnTienda.find(e => e.id === shop)
    let existe = cesta.find((x) => x.id === articulosComprado.id)
        /**
         * ! Si no existe en la cesta el producto lo agrega... o no
         */
    if (existe == undefined) {
        cesta.push(articulosComprado)
    }
    if (contador < 2) {
        console.log("-----------Cesta antes de agregar nuevo item comprado---------")
        console.table(cesta)
    }
}

/**
 * ? Agrega item a la cesta
 */

let incremento = (shop) => {
    itemSeleccionado = cesta.findIndex((e) => e.id === shop)
    cesta[itemSeleccionado].item += 1
    console.log("-----------Cesta al AGREGAR item " + contador + " comprado---------")
    console.table(cesta)
}

/**
 * ? Elimina item de la cesta
 */

let decremento = (shop) => {
    console.table(cesta)
    itemSeleccionado = cesta.findIndex((e) => e.id === shop)
    cesta[itemSeleccionado].item -= 1
    console.log("-----------Cesta al ELIMINAR item comprado---------")
    console.table(cesta)
}


/**
 * ? Realiza la compra y agrega en la cesta
 */

function generarCompra() {
    verificacion(shop)

    generarShop(shop)
    incremento(shop)
}

/**
 * ? Genera ciclo para poder comprar mas de un item 
 */

function iniciarCompra() {
    let compraSi = confirm("¿Desea Comprar algún item?")
    while (compraSi) {
        contador++
        generarCompra()
        compraSi = confirm("¿Desea Comprar otro item?")

    }
    let compraNo = confirm("¿Desea retirar algún item de la Comprar?")

    if (compraNo) {
        verificacion()
        decremento(shop)
    }

    console.log("los items comprados son:")
    console.table(cesta)
    console.log("Adios!")
}
iniciarCompra()