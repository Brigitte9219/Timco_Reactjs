import React from "react";
import '../estilos/BotonPequeño.css';

function BotonPequeño(props){
    return(
        <div className="cajita">
            <button className="botoncito">
                { props.texto }
            </button>
        </div>
    );
}

export default BotonPequeño;