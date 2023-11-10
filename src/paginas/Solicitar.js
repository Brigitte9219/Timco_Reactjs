import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function Solicitar(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='SOLICITAR PRODUCTOS' />
            <Texto
            descripcion='Este módulo le permitirá realizar la' />
            <Texto
            descripcion='solicitud de los productos que' />
            <Texto
            descripcion='necesite para que pueda desarrollar' />
            <Texto
            descripcion='su actividad de forma segura' /><br />
            <BotonPequeño
            texto='Solicitar'
            link={'/Solicitaruno'} />
            <PieDePagina />
        </div>
    );
}

export default Solicitar;