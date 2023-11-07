import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import FormTextarea from "../componentes/FormTextarea";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function Pqrsf(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal />
            <Texto
            descripcion='Al diligenciar el presente formulario usted autoriza el tratamiento de datos personales. Ver nuestra Política de Tratamiento de Datos Personales' />
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            <Texto
            descripcion='Por favor seleccione el trámite a realizar:' />
            <FormTextarea
            placeholder='Mensaje'
            columnas='50'
            filas='10' />
            <Texto
            descripcion='A continuación puede adjuntar cualquier archivo que considere para complementar su PQRSF.' />
            <BotonPequeño
            texto='Enviar' />
            <PieDePagina />
        </div>
    );
}

export default Pqrsf;