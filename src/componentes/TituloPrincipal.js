import React from "react";
import '../estilos/TituloPrincipal.css';

function TituloPrincipal(props){
    return(
        <div className="titulo-principal">
            <p>{props.titulo}</p>
        </div>
    );
}

export default TituloPrincipal;