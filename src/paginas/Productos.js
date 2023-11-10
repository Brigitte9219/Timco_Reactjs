import React from "react";
import Boton from "../componentes/Boton";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function Productos(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='ADMINISTAR INFORMACIÓN' />
            <TituloPrincipal
            titulo='DE LOS PRODUCTOS' />
            <Texto
            descripcion='Este módulo le permitirá administrar' />
            <Texto
            descripcion='información de los productos de la' />
            <Texto
            descripcion='compañía.' /><br />
            <BotonPequeño
            texto='Registrar'
            link={'/regisproducuno'} /><br />
            <Boton
            texto='Base de datos productos' />
            <PieDePagina />
        </div>
    );
}

export default Productos;