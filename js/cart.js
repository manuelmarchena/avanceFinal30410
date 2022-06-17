let etiqueta = document.getElementById('etiqueta')
let carrito = document.getElementById('carrito')
let cesta = []
let calculador = () => {
    let enLista = document.getElementById("enLista")
    enLista.innerHTML = cesta.map((x) => x.item).reduce((x, y) => x + y, 0)
}
calculador()

let generateCartItems = () => {
    if (cesta.length !== 0) {
        console.log(" no vacio")
    } else {
        carrito.innerHTML = ``
        etiqueta.innerHTML =
            `
            <h2>El carrito esta vacio</h2>
            <a href="index.html">
            <button class="botonTienda">Volver a la tienda!</button>
            </a>
            `
    }
}
generateCartItems()