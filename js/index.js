const carritoPedidos = []

const dibujos = [
    { articulo: 1, descripcion: "Dibujo a lápiz", precio: 3000 },
    { articulo: 2, descripcion: "Ilustración en acrílico", precio: 8000 },
    { articulo: 3, descripcion: "Ilustración al óleo", precio: 8000 },
    { articulo: 4, descripcion: "Ilustración digital", precio: 15000 },
    { articulo: 5, descripcion: "Retrato a lápiz", precio: 10000 },
    { articulo: 6, descripcion: "Paisaje al óleo", precio: 30000 },
]
function consultarDibujo(articulo) {
    let dibujoElegido = dibujos.find((dibujo)=> dibujo.articulo === articulo)
    return dibujoElegido
}
function comprarDibujo() {
    let articulo = prompt("Por favor ingresa el N° de artículo del tipo de dibujo que te interesa")
    let dibujoSeleccionado = consultarDibujo(parseInt(articulo))

    if (dibujoSeleccionado !== undefined) {
        carritoPedidos.push(dibujoSeleccionado)
        console.table(carritoPedidos)
        let confirmacion = confirm("¿Deseas agregar más dibujos al carrito?")
        if (confirmacion === true) {
            comprarDibujo()
        }
        else {
            const compra = new Pedidos(carritoPedidos)
            let presupuesto = compra.presupuestar()
            console.table(carritoPedidos)
            alert("¡Gracias por elegirme!\nEl valor de tu compra es de $ " + presupuesto)
        }
    }
    else {
        let aviso = confirm("Error en el número ingresado. \n¿Quieres volver a intentar?")
        if (aviso === true) {
            comprarDibujo()
        }
        else {
            const compra = new Pedidos(carritoPedidos)
            let presupuesto = compra.presupuestar()
            console.table(carritoPedidos)
            alert("¡Gracias por elegirme!\nEl valor de tu compra es de $ " + presupuesto)
        }
    }
}