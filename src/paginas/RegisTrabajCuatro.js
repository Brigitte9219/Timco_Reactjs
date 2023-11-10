import React from "react";
import CajonTexto from "../componentes/CajonTexto";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import Enlace from "../componentes/Enlace";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";

function RegisTrabajCuatro(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <CajonTexto
            descripcion='El proceso de registro ha terminado de manera exitosa' />
            <Enlace
            texto='Enviar otra respuesta'
            link={'/registrabajuno'} />
            <PieDePagina />
        </div>
    );
}

export default RegisTrabajCuatro;