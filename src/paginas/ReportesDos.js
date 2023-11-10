import React from "react";
import CajonTexto from "../componentes/CajonTexto";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import Enlace from "../componentes/Enlace";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";

function ReportesDos(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <CajonTexto
            descripcion='La consulta se ha realizado de manera exitosa.
            Descargue el archivo...' />
            <Enlace
            texto='Descargar'
            link={'/reportesuno'} />
            <PieDePagina />
        </div>
    );
}

export default ReportesDos;