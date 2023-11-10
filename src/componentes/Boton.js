import React from "react";
import { Link } from "react-router-dom";
import '../estilos/Boton.css';

function Boton(props){
    return(
        <div className="cubo">
            <Link to={props.link} className='cuboboton' >{ props.texto }</Link>
        </div>
    );
}

export default Boton;