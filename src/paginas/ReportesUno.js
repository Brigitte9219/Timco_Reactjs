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
            <p>Nombre del trabajador</p><FormInput type='text' />
            <p>No de identificación</p><FormInput type='number' />
            <p>Nombre del producto</p><FormInput type='text' />
            <p>Fecha de inicio</p><FormInput type='date' />
            <p>Fecha final</p><FormInput type='date' />
            <p>Proyecto</p><FormInput type='text' />
            <BotonPequeño
            texto='Buscar'
            link={'/reportesdos'} />
            <PieDePagina />
        </div>
    );
}

export default ReportesUno;