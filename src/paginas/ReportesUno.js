import React from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";
import Boton from "../componentes/Boton";

function ReportesUno(){
    return(
        <div>
            
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Bases de datos' />
            <Texto
            descripcion='Ingrese a la base de datos que desea consultar' />
            <Boton
            texto='Colaboradores'
            link={'/bdtrabajadores'} />
            <Boton
            texto='Productos'
            link={'/bdproductos'} />
            <Boton
            texto='Solicitudes'
            link={'/bdsolicitudes'} />
            <Boton
            texto='Asignaciones'
            link={'/bdasignar'} />
            <Boton
            texto='Mensajes - Contacto'
            link={'/bdcontacto'} />
            <Boton
            texto='Pqrsf'
            link={'/bdpqrsf'} />
            <PieDePagina />
        </div>
    );
}

export default ReportesUno;