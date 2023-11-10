import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function RegisProducUno(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Registrar' />
            <Texto
            descripcion='A continuación, registre los datos del producto que ingresa a la compañía' />
            <div className="contenedor-formulario">
            <div className="formulario-izq">
            <FormInput
            type='text'
            placeholder='Nombre completo' />
            <FormInput
            type='text'
            placeholder='Marca' />
            <FormInput
            type='date'
            placeholder='Fecha de fabricación' />
            <FormInput
            type='text'
            placeholder='Lote' />
            <FormInput
            type='number'
            placeholder='Cantidad' />
            </div>
            <div className="formulario-der">
            <FormInput
            type='text'
            placeholder='Código interno ' />
            <FormInput
            type='text'
            placeholder='Serie' />
            <FormInput
            type='text'
            placeholder='Referencia' />
            <FormInput
            type='text'
            placeholder='Norma técnica' />
            <FormInput
            type='text'
            placeholder='Proveedor' />
            </div>
            </div>
            <BotonPequeño
            texto='Guardar'
            link={'/regisproducdos'} />
            <PieDePagina />
        </div>
    );
}

export default RegisProducUno;