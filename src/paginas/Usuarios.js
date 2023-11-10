import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";
import '../estilos/Usuarios.css';

function Usuarios(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='GESTIÓN DE USUARIOS' />
            <Texto
            descripcion='Este módulo sirve para crear la' />
            <Texto
            descripcion='cuenta de los usuarios asignados a' />
            <Texto
            descripcion='los diferentes proyectos de la' />
            <Texto
            descripcion='compañía.' />
            <div className="caja-grande">
            <div className="caja-izq">
            <BotonPequeño
            texto='Crear cuenta'
            link={'/cuentauno'} />
            </div>
            <div className="caja-der">
            <BotonPequeño
            texto='Iniciar sesión' />
            </div>
            </div>
            <PieDePagina />
        </div>
    );
}

export default Usuarios;