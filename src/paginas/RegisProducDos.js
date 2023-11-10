import React from "react";
import CajonTexto from "../componentes/CajonTexto";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import Enlace from "../componentes/Enlace";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";

function CuentaTres(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <CajonTexto
            descripcion='SEl proceso de registro ha terminado de manera exitosa' />
            <Enlace
            texto='Enviar otra respuesta'
            link={'/regisproducuno'} />
            <PieDePagina />
        </div>
    );
}

export default CuentaTres;