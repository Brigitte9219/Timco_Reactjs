import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import TituloPrincipal from "../componentes/TituloPrincipal";
import '../estilos/CuentaUno.css';

function CuentaUno(){
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
            placeholder='Nombre' />
            <FormInput
            type='email'
            placeholder='usuario@timco.com' />
            <FormInput
            type='text'
            placeholder='Proyecto' />
            </div>
            <div className="formulario-der">
            <FormInput
            type='text'
            placeholder='Apellido' />
            <FormInput
            type='password'
            placeholder='Contraseña' />
            <FormInput
            type='password'
            placeholder='Confirmar contraseña' />
            </div>
            </div>
            <BotonPequeño
            texto='Continuar'
            link={'/cuentados'} />
            <PieDePagina />
        </div>
    );
}

export default CuentaUno;