// Carrito de compras

// ver total del carrito
// agregar producto
// eliminar producto

function carrito(total){

    function verTotal(){
        console.log(`Total Actual: $${total}`);
    }

    function agregarProducto(producto){
        total += producto;
        console.log(`Producto Agregado: $${producto}`);
        console.log(`Total Actual: $${total}`);
    }

    function eliminarProducto(productoEliminado){
        if (productoEliminado <= total){
            total -= productoEliminado;
            console.log(`Producto Eliminado: $${productoEliminado}`);
            console.log(`Total Actual: $${total}`);

        } else {
            console.log(`No puedes eliminar un producto que no existe en el carrito`);
        }

    }

    verTotal();
    agregarProducto(20);
    agregarProducto(15);
    eliminarProducto(10);
}

carrito(0);