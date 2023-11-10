import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function Reportes(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='GESTIONAR REPORTES O' />
            <TituloPrincipal
            titulo='INFORMES' />
            <Texto
            descripcion='Este módulo sirve para realizar' />
            <Texto
            descripcion='consultas y descargar la información' />
            <Texto
            descripcion='de acuerdo con su preferencia' /><br /><br />
            <BotonPequeño
            texto='Consultar'
            link={'/reportesuno'} />
            <PieDePagina />
        </div>
    );
}

export default Reportes;