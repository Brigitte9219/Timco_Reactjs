import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function Asignar(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='ASIGNAR PRODUCTOS' />
            <Texto
            descripcion='Este módulo le permitirá realizar la asignación de productos para que el personal pueda desarrollar su actividad de forma segura' />
            <BotonPequeño
            texto='Asignar'
            link={'/asignar'} />
            <PieDePagina />
        </div>
    );
}

export default Asignar;