import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function RegisTrabajDos(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Registrar' />
            <Texto
            descripcion='Continúe registrando los datos' />
            <div className="contenedor-formulario">
            <div className="formulario-izq">
            <FormInput
            type='text'
            placeholder='RH' />
            <FormInput
            type='text'
            placeholder='Localidad' />
            <FormInput
            type='text'
            placeholder='Barrio' />
            <FormInput
            type='number'
            placeholder='Telefono Móvil' />
            <FormInput
            type='text'
            placeholder='EPS' />
            <FormInput
            type='text'
            placeholder='Escolaridad' />
            </div>
            <div className="formulario-der">
            <FormInput
            type='text'
            placeholder='Grupo sanguíneo' />
            <FormInput
            type='text'
            placeholder='Ciudad de residencia' />
            <FormInput
            type='text'
            placeholder='Dirección' />
            <FormInput
            type='number'
            placeholder='Telefono fijo' />
            <FormInput
            type='text'
            placeholder='Fondo de pensiones' />
            <FormInput
            type='text'
            placeholder='Profesión' />
            </div>
            </div>
            <BotonPequeño
            texto='Continuar'
            link={'/RegisTrabajTres'} />
            <PieDePagina />
        </div>
    );
}

export default RegisTrabajDos;