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
const todosSolicitudes = async (state) => {
    const peticion = await axios.get('http://localhost:8080/solicitud');
    //Muestra los datos de todos los productos en consola
    console.log(peticion.data);
    state(peticion.data);
}

//Consultar todas las asignaciones
const todosAsignaciones = async (state) => {
    const peticion = await axios.get('http://localhost:8080/asignacion');
    //Muestra los datos de todos los productos en consola
    console.log(peticion.data);
    state(peticion.data);
}

//Consultar todos los reportes o informes

//Consultar todos los mensajes de contacto

const todosContacto = async (state) => {
    const peticion = await axios.get('http://localhost:8080/contacto');
    //Muestra los datos de todos los productos en consola
    console.log(peticion.data);
    state(peticion.data);
}

//Consultar todas las PQRSF

export{
    todosTrabajadores, todosProductos, todosSolicitudes, todosAsignaciones, todosContacto
}