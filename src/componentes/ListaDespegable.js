import React from "react";
import '../estilos/ListaDespegable.css';

function ListaDespegable(){
    return(
        <div className='contenedor-lista'>
            <select className='lista-despegable'>
                <option>Por favor elige una opción</option>
                <option>Petición</option>
                <option>Queja</option>
                <option>Reclamo</option>
                <option>Sugerencia</option>
                <option>Felicitaciones</option>
            </select>
        </div>
    );
}

export default ListaDespegable;