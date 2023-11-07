import React from "react";
import { Link } from "react-router-dom";
import '../estilos/Boton.css';

function Boton(props){
    return(
        <div className="cajon">
            <Link to={props.link} className='boton' >{ props.texto }</Link>
        </div>
    );
}

export default Boton;