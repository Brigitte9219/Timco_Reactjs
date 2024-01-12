import React from "react";
import '../estilos/ListaDespegable.css';

function ListaDespegable(props){
    return(
        <div className='contenedor-lista'>
            <select className='lista-despegable'
            name={props.name}
            value={props.value}
            onChange={props.onChange}>
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