class ProductManager {

    #url= "https://las_fotos.com/";

    constructor() {
        this.products = [];
    }


addProduct(title, description, price, thumbnail, stock) {
    const producto = {
    title: title,
    description: description,
    price: price,
    thumbnail: this.#url + thumbnail,
    code: this.generarId(),
    stock: stock,
    }
    const id_nuevo_producto = this.products.findIndex((prod) => prod.code === producto.code);
    if (id_nuevo_producto === -1) {  // chequeo que ningún producto tenga el mismo id
        let control_argumentos = false;
        for (const propiedad in producto) {
            if (producto[propiedad] === undefined) {
                control_argumentos = false;
                console.log ("Falta un parámetro");
                break;
            }
            else {
                control_argumentos = true;
            }
        }
        if (control_argumentos) {
            return this.products.push(producto);
        }
    }
    else {
        console.log("ID ya existente");
    }
}

getProducts() {
    return console.log("Listado de Productos: ", this.products)
}

getProductById (id) {
    const producto_buscado = this.products.find ((producto) => producto.code === id);
    if (!(producto_buscado)) {
        console.log ("Product NOT FOUND");
    }
    else {
        return producto_buscado;  
    }

}

generarId() {
    let id = 0;
    id = this.products.length + 1;
    return id;
}
    

}

let a = new ProductManager;
a.addProduct("zapato", "color negro", 25, "zapato.jpg", 10);
console.log("Datos con 1 producto: ", a)
a.addProduct("pantalón", "color azul", 125, "pantalon.jpg", 23);
console.log("Datos con 2 producto: ", a);
a.addProduct("remera", "color negro", 29, "remera.jpg", 8);
console.log("Datos con 3 producto: ", a)
a.addProduct("camisa", "color azul", 95, "camisa.jpg", 56);
console.log("Datos con 4 producto: ", a);
a.addProduct("zapato", "color negro", "zapato.jpg", 10);
console.log("Datos del producto sin un argumento: ", a);
a.getProducts();
console.log("Producto por id:", a.getProductById(3))
a.getProductById(6);














