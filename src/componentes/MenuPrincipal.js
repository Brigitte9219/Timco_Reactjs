import React from "react";
import '../estilos/MenuPrincipal.css';

function MenuPrincipal(){
    return(
        <div className="contenedor-menuprincipal">
            <div className="rectangulo">
            {/* Se debe cambiar a Link to*/}
            <a href='/'>Módulos</a>
            <a href='/'>Contacto</a>
            <a href='/'>PQRSF</a>
            </div>
        </div>
    );
}

export default MenuPrincipal;