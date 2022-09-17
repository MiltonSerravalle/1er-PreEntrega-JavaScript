const indumentaria = [
    {producto: "Buzo Berserk", precio: 4500},
    {producto: "Buzo Gorillaz", precio: 5000},
    {producto: "Remera Britney", precio: 3000},
    {producto: "Remera Pibes", precio: 3000}
]

const compra= []
alert("¡Bienvenidos a Mavsoleo Indumentaria! \n Los productos disponibles son:")
let mensaje= ""
indumentaria.forEach (item => {
    mensaje += (`${item.producto} ${item.precio} \n`);
    alert(mensaje);
});

let alerta = "S"
while(alerta === "S"){
    alert("Que producto desea agregar al carrito?")
    let opcion= Number(prompt("1- Buzo Berserk \n 2- Buzo Gorillaz \n 3- Remera Britney Spears \n 4- Remera Pibes Chorros"))
    switch (opcion){
        case 1:
            compra.push(indumentaria[0])
            break;
        
        case 2:
            compra.push(indumentaria[1])
            break;
        
        case 3:
            compra.push(indumentaria[2])
            break;
            
        case 4:
            compra.push(indumentaria[3])
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