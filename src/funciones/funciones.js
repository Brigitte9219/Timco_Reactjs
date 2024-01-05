import axios from "axios";

const todosTrabajadores = async (state) => {
    const peticion = await axios.get('http://localhost:8080/trabajador');
    //Muestra los datos de todos los trabajadores en consola
    console.log(peticion.data);
    state(peticion.data);
}

export{
    todosTrabajadores
}