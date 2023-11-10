import React from "react";
import CajonTexto from "../componentes/CajonTexto";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import Enlace from "../componentes/Enlace";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";

function ContactoUno(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <CajonTexto
            descripcion='El mensaje ha sido enviado de manera exitosa' />
            <Enlace
            texto='Enviar otra respuesta'
            link={'/contacto'} />
            <PieDePagina />
        </div>
    );
}

export default ContactoUno;