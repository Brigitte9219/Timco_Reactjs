import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import TituloPrincipal from "../componentes/TituloPrincipal";

function CuentaUno(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Crear cuenta' />
            <FormInput
            type='text'
            placeholder='Nombre' />
            <FormInput
            type='text'
            placeholder='Apellido' />
            <FormInput
            type='email'
            placeholder='usuario@timco.com' />
            <FormInput
            type='password'
            placeholder='Contraseña' />
            <FormInput
            type='text'
            placeholder='Proyecto' />
            <FormInput
            type='password'
            placeholder='Confirmar contraseña' />
            <BotonPequeño
            texto='Continuar'
            link={'/cuentados'} />
            <PieDePagina />
        </div>
    );
}

export default CuentaUno;