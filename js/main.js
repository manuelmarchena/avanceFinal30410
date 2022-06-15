let shop = document.getElementById("shop")



/**
 * ! Aqui la generación de divs, o sea el DOM
 */


let generarItems = () => {
    return (shop.innerHTML = datosDeItem.map((x) => {
        let { id, nombre, precio, descripcion, img, descuento } = x
        return `
        <div id=id-producto-${id} class="item">
            <img src="${img}" alt="">
            <div class="detalles">
                <h3>${nombre}</h3>
                <p>Descripción del articulo 1, bla bla bla</p>
                <div class="precio-cantidad">
                    <h2>${precio}</h2>
                    <div class="buttons">
                        <i class="bi bi-plus-circle"></i>
                        <div id="id" class="quantity">Cant</div>
                        <i class="bi bi-dash-circle"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join())
}
generarItems()