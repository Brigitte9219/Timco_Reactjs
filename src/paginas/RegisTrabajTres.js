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
            descripcion='Tallas para dotación' />
            <FormInput
            type='text'
            placeholder='Camisa' />
            <FormInput
            type='text'
            placeholder='Pantalon' />
            <FormInput
            type='text'
            placeholder='Chaqueta' />
            <FormInput
            type='text'
            placeholder='Calzado' />
            <Texto
            descripcion='En caso de emergencia' />
            <FormInput
            type='text'
            placeholder='Nombre Completo' />
            <FormInput
            type='text'
            placeholder='Parentesco' />
            <FormInput
            type='number'
            placeholder='Telefono móvil' />
            <FormInput
            type='number'
            placeholder='Telefono fijo' />
            <BotonPequeño
            texto='Guardar'
            link={'/RegisTrabajTres'} />
            <PieDePagina />
        </div>
    );
}

export default RegisTrabajDos;