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
            titulo='GESTIONAR REPORTES O INFORMES' />
            <Texto
            descripcion='Este módulo sirve para realizar consultas y descargar la información de acuerdo con su preferencia' />
            <BotonPequeño
            texto='Consultar'
            link={'/reportesuno'} />
            <PieDePagina />
        </div>
    );
}

export default Reportes;