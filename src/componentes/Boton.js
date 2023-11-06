import React from "react";
import '../estilos/Boton.css';

function Boton(props){
    return(
        <div className="cajon">
            <button className="boton">
                { props.texto }
            </button>
        </div>
    );
}

export default Boton;