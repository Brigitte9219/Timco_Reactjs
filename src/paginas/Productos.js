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
            titulo='ADMINISTAR INFORMACIÓN DE LOS PRODUCTOS' />
            <Texto
            descripcion='Este módulo le permitirá administrar información de los productos de la compañía.' />
            <BotonPequeño
            texto='Registrar'
            link={'/regisproducuno'} />
            <Boton
            texto='Base de datos productos' />
            <PieDePagina />
        </div>
    );
}

export default Productos;