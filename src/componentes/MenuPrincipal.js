import React from "react";
import { Link } from "react-router-dom";
import '../estilos/MenuPrincipal.css';

function MenuPrincipal(){
    return(
        <div className="contenedor-menuprincipal">
            <div className="rectangulo">
            {/* Se debe cambiar a Link to*/}
            <Link to={'/modulos'}>Módulos</Link>
            <Link to={'/contacto'}>Contacto</Link>
            <Link to={'/pqrsf'}>PQRSF</Link>
            </div>
        </div>
    );
}

export default MenuPrincipal;