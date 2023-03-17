export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    descripcion: String;
    img: String;

    constructor(nombre: String,apellido: String, img:String, descripcion:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion= descripcion;
    }
}