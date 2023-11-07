import React from "react";
import '../estilos/BotonPequeño.css';

function BotonPequeño(props){
    return(
        <div className="cajon">
            <button className="boton">
                { props.texto }
            </button>
        </div>
    );
}

export default BotonPequeño;