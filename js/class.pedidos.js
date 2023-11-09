class Pedidos {
    constructor(carritoPedidos) {
        this.pedidos = carritoPedidos
    }
    presupuestar() {
        if (this.pedidos.length > 0) {
            return this.pedidos.reduce((acumulador, dibujos)=> acumulador + dibujos.precio, 0)
        }
    }
}