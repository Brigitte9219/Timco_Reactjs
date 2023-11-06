import React from "react";
import '../estilos/MenuSecundario.css';

function MenuSecundario(){
    return(
        <div className="contenedor-menusecundario">
            <div className="rectangulo">
            {/* Se debe cambiar a Link to*/}
            <a href='/'>Inicio</a>
            <a href='/'>Módulos</a>
            <a href='/'>Contacto</a>
            <a href='/'>PQRSF</a>
            </div>
        </div>
    );
}

export default MenuSecundario;