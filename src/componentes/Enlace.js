import React from "react";
import { Link } from "react-router-dom";
import '../estilos/Enlace.css';

function Enlace(props){
    return(
        <div className="cajon-link">
            <Link to={props.link} className='boto' >{ props.texto }</Link>
        </div>
    );
}

export default Enlace;