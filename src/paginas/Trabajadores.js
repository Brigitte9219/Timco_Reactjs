import React from "react";
import Boton from "../componentes/Boton";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function Trabajadores(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='ADMINISTRAR INFORMACIÓN' />
            <TituloPrincipal
            titulo='DE LOS TRABAJADORES' />
            <Texto
            descripcion='Este módulo le permitirá administrar' />
            <Texto
            descripcion='información del personal que' />
            <Texto
            descripcion='ingresa a la compañía.' /><br />
            <BotonPequeño
            link={'/RegisTrabajUno'}
            texto='Registrar' /><br />
            <Boton
            link={'/bdtrabajadores'}
            texto='Base de datos colaboradores' />
            <PieDePagina />
        </div>
    );
}

export default Trabajadores;