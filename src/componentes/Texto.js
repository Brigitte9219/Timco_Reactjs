import React from "react";
import '../estilos/Texto.css';

function Texto(props){
    return(
        <div className="descripcion">
            <p className="text">
                {props.descripcion}</p>
        </div>
    );
}

export default Texto;