import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function RegisTrabajUno(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Registrar' />
            <Texto
            descripcion='A continuación, registre los datos del trabajador que ingresa a la compañía' />
            <FormInput 
            type='text'
            placeholder='Nombre completo' />
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            <FormInput
            type='text'
            placeholder='Tipo de identificación' />
            <FormInput
            type='number'
            placeholder='No de identificación' />
            <FormInput
            type='date'
            placeholder='Fecha de expedición' />
            <FormInput
            type='text'
            placeholder='Ciudad de expedición' />
            <FormInput
            type='date'
            placeholder='Fecha de nacimiento' />
            <FormInput
            type='text'
            placeholder='Lugar de nacimiento' />
            <FormInput
            type='number'
            placeholder='Edad' />
            <FormInput
            type='text'
            placeholder='Estatura' />
            <FormInput
            type='text'
            placeholder='Género' />
            <FormInput
            type='text'
            placeholder='Estado civil' />
            <BotonPequeño
            texto='Continuar' />
            <PieDePagina />
        </div>
    );
}

export default RegisTrabajUno;