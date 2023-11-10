import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormCheckbox from "../componentes/FormCheckbox";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import TituloPrincipal from "../componentes/TituloPrincipal";

function CuentaDos(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Crear cuenta' />
            <div className="contenedor-formulario">
            <div className="formulario-izq">
            <FormInput
            type='text'
            placeholder='Género' />
            <FormInput
            type='date'
            placeholder='Fecha de nacimiento' />
            </div>
            <div className="formulario-der">
            <FormInput
            type='email'
            placeholder='Correo de recuperación' />
            <FormInput
            type='number'
            placeholder='Celular' />
            </div>
            </div>
            <FormCheckbox /><br /><br />
            <BotonPequeño
            texto='Crear'
            link={'/cuentatres'} />
            <PieDePagina />
        </div>
    );
}

export default CuentaDos;