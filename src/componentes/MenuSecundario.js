import React from "react";
import { Link } from "react-router-dom";
import '../estilos/MenuSecundario.css';

function MenuSecundario(){
    return(
        <div className="contenedor-menusecundario">
            <div className="rectangulo">
            {/* Se debe cambiar a Link to*/}
            <Link to={'/'}>Inicio</Link>
            <Link to={'/modulos'}>Módulos</Link>
            <Link to={'/contacto'}>Contacto</Link>
            <Link to={'/pqrsf'}>PQRSF</Link>
            </div>
        </div>
    );
}

export default MenuSecundario;