import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import FormTextarea from "../componentes/FormTextarea";
import ListaDespegable from "../componentes/ListaDespegable";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";

function Pqrsf(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='PQRSF' />
            <Texto
            descripcion='Al diligenciar el presente formulario usted autoriza el tratamiento de datos personales. Ver nuestra Política de Tratamiento de Datos Personales' />
            <FormInput
            type='text'
            placeholder='Entidad/Empresa' />
            <FormInput
            type='text'
            placeholder='Nombre completo' />
            <FormInput
            type='text'
            placeholder='Cargo' />
            <FormInput
            type='text'
            placeholder='Ciudad' />
            <FormInput
            type='number'
            placeholder='Celular' />
            <FormInput
            type='email'
            placeholder='Email' />
            <Texto
            descripcion='Por favor seleccione el trámite a realizar:' />
            <ListaDespegable />
            <FormTextarea
            placeholder='Mensaje'
            columnas='50'
            filas='10' />
            <Texto
            descripcion='A continuación puede adjuntar cualquier archivo que considere para complementar su PQRSF.' />
            <BotonPequeño
            texto='Enviar'
            link={'/pqrsfuno'} />
            <PieDePagina />
        </div>
    );
}

export default Pqrsf;