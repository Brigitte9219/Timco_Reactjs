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
            <FormInput
            type='text'
            placeholder='Nombre completo' />
            <FormInput
            type='text'
            placeholder='Código interno ' />
            <FormInput
            type='text'
            placeholder='Marca' />
            <FormInput
            type='text'
            placeholder='Serie' />
            <FormInput
            type='date'
            placeholder='Fecha de fabricación' />
            <FormInput
            type='text'
            placeholder='Referencia' />
            <FormInput
            type='text'
            placeholder='Lote' />
            <FormInput
            type='text'
            placeholder='Norma técnica' />
            <FormInput
            type='number'
            placeholder='Cantidad' />
            <FormInput
            type='text'
            placeholder='Proveedor' />
            <BotonPequeño
            texto='Guardar' />
            <PieDePagina />
        </div>
    );
}

export default RegisProducUno;