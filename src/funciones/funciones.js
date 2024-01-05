import axios from "axios";

//Consultar todos los trabajadores
const todosTrabajadores = async (state) => {
    const peticion = await axios.get('http://localhost:8080/trabajador');
    //Muestra los datos de todos los trabajadores en consola
    console.log(peticion.data);
    state(peticion.data);
}

//Consultar todos los productos
const todosProductos = async (state) => {
    const peticion = await axios.get('http://localhost:8080/producto');
    //Muestra los datos de todos los productos en consola
    console.log(peticion.data);
    state(peticion.data);
}

//Consultar todas las solicitudes

//Consultar todas las asignaciones

//Consultar todos los reportes o informes

//Consultar todos los mensajes de contacto

//Consultar todas las PQRSF

export{
    todosTrabajadores, todosProductos
}