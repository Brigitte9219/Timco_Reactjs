import React from "react";
import '../estilos/MenuPrincipal.css';

function MenuPrincipal(){
    return(
        <div className="contenedor-menuprincipal">
            {/* Se debe cambiar a Link to*/}
            <a href='/'>Módulos</a>
            <a href='/'>Contacto</a>
            <a href='/'>PQRSF</a>
        </div>
    );
}

export default MenuPrincipal;