import React from "react";
import { Link } from "react-router-dom";
import '../estilos/BotonPequeño.css';

function BotonPequeño(props){
    return(
        <div className="cajita">
            <Link to={props.link} className='botoncito' >{ props.texto }</Link>
        </div>
    );
}

export default BotonPequeño;