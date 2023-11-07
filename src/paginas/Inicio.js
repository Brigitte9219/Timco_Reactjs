import React from "react";
import EncabezadoPrincipal from '../componentes/EncabezadoPrincipal';
import ImagenRetro from '../componentes/ImagenRetro';
import MenuPrincipal from '../componentes/MenuPrincipal';
import PieDePagina from '../componentes/PieDePagina';

function Inicio(){
    return(
        <div>
            <EncabezadoPrincipal />
            <MenuPrincipal />
            <ImagenRetro />
            <PieDePagina />
        </div>
    );
}

export default Inicio;