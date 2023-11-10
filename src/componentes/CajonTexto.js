import React from "react";
import '../estilos/CajonTexto.css';

function CajonTexto(props){
    return(
        <div className="cajon-texto">
            <p className="textos">
                {props.descripcion}</p>
        </div>
    );
}

export default CajonTexto;