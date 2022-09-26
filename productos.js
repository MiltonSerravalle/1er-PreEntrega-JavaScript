class indumentaria {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}




const productos = []

productos.push (new indumentaria (1, "Buzo Berserk", 4500));
productos.push (new indumentaria (2, "Buzo Gorillaz", 5000));
productos.push (new indumentaria (3, "Remera Britney", 3000));
productos.push (new indumentaria (4, "Remera Pibes", 3000));

const compra= []
alert("¡Bienvenidos a Mavsoleo Indumentaria! \n Los productos disponibles son:")
let mensaje= ""
productos.forEach (item => {
    mensaje += (`${item.producto} ${item.precio} \n`);
    alert(mensaje);
});

let alerta = "S"
while(alerta === "S"){
    alert("Que producto desea agregar al carrito?")
    let opcion= Number(prompt("1- Buzo Berserk \n 2- Buzo Gorillaz \n 3- Remera Britney Spears \n 4- Remera Pibes Chorros"))
    switch (opcion){
        case 1:
            compra.push(productos[0])
            break;
        
        case 2:
            compra.push(productos[1])
            break;
        
        case 3:
            compra.push(productos[2])
            break;
            
        case 4:
            compra.push(productos[3])
            break;

        default:
            alert("Ingrese un producto valido")
            break;
    }
alerta= prompt("Desea seguir comprando? S o N").toUpperCase();
}

alert(`Agrego ${compra.length} productos a su carrito`)
const totalCompra = compra.reduce((acc, item) => acc + item.precio, 0)
alert(`El precio total de los productos seleccionados es $ ${totalCompra}`)

let carrito = document.getElementById("numeroCarrito")
carrito.innerHTML = `${compra.length}`