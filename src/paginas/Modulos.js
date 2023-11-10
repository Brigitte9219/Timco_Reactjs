import React from "react";
import Boton from '../componentes/Boton';
import EncabezadoSecundario from '../componentes/EncabezadoSecundario';
import MenuSecundario from '../componentes/MenuSecundario';
import PieDePagina from '../componentes/PieDePagina';
import TituloPrincipal from '../componentes/TituloPrincipal';

function Modulos(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='MÓDULOS' />
            <Boton
            texto='Gestión de usuarios'
            link={'/usuarios'} />
            <Boton
            texto='Información de los trabajadores'
            link={'/trabajadores'} />
            <Boton
            texto='Información de los productos'
            link={'/productos'}  />
            <Boton
            texto='Solicitar productos'
            link={'/solicitar'}  />
            <Boton
            texto='Asignar productos'
            link={'/asignar'} />
            <Boton
            texto='Gestionar reportes e informes' />
            <PieDePagina />
        </div>
    );
}

export default Modulos;