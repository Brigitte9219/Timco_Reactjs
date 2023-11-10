import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function ReportesUno(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Consulta' />
            <Texto
            descripcion='A continuación, ingrese los datos para realizar la consulta' />
            <div className="contenedor-formulario">
            <div className="formulario-izq">
            <FormInput placeholder='Nombre del trabajador' />
            <FormInput placeholder='No de identificación' />
            <FormInput placeholder='Nombre del producto' />
            <FormInput placeholder='Fecha de inicio' />
            <FormInput placeholder='Fecha final' />
            <FormInput placeholder='Proyecto' />
            </div>
            <div className="formulario-der">
            <FormInput type='text' />
            <FormInput type='number' />
            <FormInput type='text' />
            <FormInput type='date' />
            <FormInput type='date' />
            <FormInput type='text' />
            </div>
            </div>
            <BotonPequeño
            texto='Buscar'
            link={'/reportesdos'} />
            <PieDePagina />
        </div>
    );
}

export default ReportesUno;