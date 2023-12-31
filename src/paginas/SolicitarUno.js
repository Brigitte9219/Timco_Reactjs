import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import FormTextarea from "../componentes/FormTextarea";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function SolicitarUno(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Solicitar' />
            <Texto
            descripcion='Realice la solicitud de producto de acuerdo con su necesidad' />
            <div className="contenedor-formulario">
            <div className="formulario-izq">
            <FormInput
            type='date'
            placeholder='Fecha de solicitud' />
            <FormInput
            type='number'
            placeholder='Cantidad' />
            <FormInput
            type='text'
            placeholder='Proyecto' />
            </div>
            <div className="formulario-izq">
            <FormInput
            type='text'
            placeholder='Nombre del producto' />
            <FormInput
            type='text'
            placeholder='Actividad a realizar' />
            <FormInput
            type='text'
            placeholder='Area' />
            </div>
            </div>
            <FormTextarea
            placeholder='Observaciones'
            columnas='50'
            filas='10' /><br />
            <BotonPequeño
            texto='Enviar'
            link={'/solicitardos'} />
            <PieDePagina />
        </div>
    );
}

export default SolicitarUno;