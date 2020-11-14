// Modelo que utiliza una interfaz para modelar los atributos de un producto
// De esta forma se pueden 'tipar' los productos (que las variables que necesitemos sean de tipo 'producto')

// La palabra clave 'export' permite que este elemento pueda ser utilizado por
// otros archivos

// Se coloca el atributo seguido de su tipo de dato
export interface Product {

    id: string;
    title: string;
    price: number;
    description: string;
    image: string;

}
