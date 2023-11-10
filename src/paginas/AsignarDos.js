import React from "react";
import CajonTexto from "../componentes/CajonTexto";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import Enlace from "../componentes/Enlace";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";

function AsignarDos(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <CajonTexto
            descripcion='La asignación se ha realizado de manera exitosa' />
            <Enlace
            texto='Enviar otra respuesta'
            link={'/asignaruno'} />
            <PieDePagina />
        </div>
    );
}

export default AsignarDos;