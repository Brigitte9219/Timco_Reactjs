import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function RegisTrabajTres(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Registrar' />
            <Texto
            descripcion='Tallas para dotación' />
            <div className="contenedor-formulario">
            <div className="formulario-izq">
            <FormInput
            type='text'
            placeholder='Camisa' />
            <FormInput
            type='text'
            placeholder='Chaqueta' />
            </div>
            <div className="formulario-der">
            <FormInput
            type='text'
            placeholder='Pantalon' />
            <FormInput
            type='text'
            placeholder='Calzado' />
            </div>
            </div>
            <Texto
            descripcion='En caso de emergencia' />
            <div className="contenedor-formulario">
            <div className="formulario-izq">
            <FormInput
            type='text'
            placeholder='Nombre Completo' />
            <FormInput
            type='number'
            placeholder='Telefono móvil' />
            </div>
            <div className="formulario-der">
            <FormInput
            type='text'
            placeholder='Parentesco' />
            <FormInput
            type='number'
            placeholder='Telefono fijo' />
            </div>
            </div>
            <BotonPequeño
            texto='Guardar'
            link={'/registrabajcuatro'} />
            <PieDePagina />
        </div>
    );
}

export default RegisTrabajTres;