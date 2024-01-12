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
            link={'/bdtrabajadores'} />
            <Boton
            texto='Asignaciones'
            link={'/bdtrabajadores'} />
            <Boton
            texto='Mensajes - Contacto'
            link={'/bdtrabajadores'} />
            <Boton
            texto='Pqrsf'
            link={'/bdtrabajadores'} />
            <Boton
            texto='Usuarios'
            link={'/bdtrabajadores'} />
            <PieDePagina />
        </div>
    );
}

export default ReportesUno;