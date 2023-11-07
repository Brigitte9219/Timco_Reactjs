import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function Usuarios(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='GESTIÓN DE USUARIOS' />
            <Texto
            descripcion='Este módulo sirve para crear la cuenta de los usuarios asignados a los diferentes proyectos de la compañía' />
            <BotonPequeño
            texto='Crear cuenta' />
            <BotonPequeño
            texto='Iniciar sesión' />
            <PieDePagina />
        </div>
    );
}

export default Usuarios;