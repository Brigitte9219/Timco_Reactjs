import React from "react";
import CajonTexto from "../componentes/CajonTexto";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import Enlace from "../componentes/Enlace";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";

function PqrsfUno(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <CajonTexto
            descripcion='Su solicitud ha sido radicada exitosamente.' />
            <Enlace
            texto='Enviar otra respuesta'
            link={'/pqrsf'} />
            <PieDePagina />
        </div>
    );
}

export default PqrsfUno;