import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
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
            descripcion='Su cuenta ha sido creada de manera exitosa' />
            <BotonPequeño
            texto='Ingresar'
            link={'/sesionuno'} />
            <Enlace
            texto='Enviar otra respuesta'
            link={'/cuentauno'} />
            <PieDePagina />
        </div>
    );
}

export default CuentaTres;