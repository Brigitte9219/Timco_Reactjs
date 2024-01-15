import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";
import Boton from "../componentes/Boton";

function Asignar(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='ASIGNAR PRODUCTOS' />
            <Texto
            descripcion='Este módulo le permitirá realizar la' />
            <Texto
            descripcion='asignación de productos para que el' />
            <Texto
            descripcion='personal pueda desarrollar su' />
            <Texto
            descripcion='actividad de forma segura' />
            <br />
            <br />
            <BotonPequeño
            texto='Asignar'
            link={'/asignaruno'} />
            <Boton
            texto='Base de datos Asignación'
            link={'/bdasignar'} />
            <PieDePagina />
        </div>
    );
}

export default Asignar;