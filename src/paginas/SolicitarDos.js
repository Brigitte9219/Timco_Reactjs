import React from "react";
import CajonTexto from "../componentes/CajonTexto";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import Enlace from "../componentes/Enlace";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";

function SolicitarDos(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <CajonTexto
            descripcion='La solicitud se ha realizado de manera exitosa' />
            <Enlace
            texto='Enviar otra respuesta'
            link={'/solicitaruno'} />
            <PieDePagina />
        </div>
    );
}

export default SolicitarDos;