import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import FormTextarea from "../componentes/FormTextarea";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function AsignarUno(){
    return(
<div>
    <EncabezadoSecundario />
    <MenuSecundario />
    <TituloPrincipal
    titulo='Asignar' />
    <Texto
    descripcion='Realice la asignación de un producto de acuerdo con la solicitud previa' />
    <FormInput
    type='date'
    placeholder='Fecha de asignación' />
    <FormInput
    type='text'
    placeholder='Nombre del trabajador' />
    <FormInput
    type='text'
    placeholder='Nombre del producto' />
    <FormInput
    type='number'
    placeholder='Cantidad' />
    <FormInput
    type='text'
    placeholder='Proyecto' />
    <FormInput
    type='text'
    placeholder='Area' />
    <FormTextarea
    placeholder='Observaciones'
    columnas='50'
    filas='10' />
    <BotonPequeño
    texto='Enviar'
    link={'/asignardos'} />
    <PieDePagina />
</div>
    );
}

export default AsignarUno;