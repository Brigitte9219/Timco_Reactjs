import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from '../componentes/EncabezadoSecundario';
import FormInput from '../componentes/FormInput';
import FormTextarea from '../componentes/FormTextarea';
import MenuSecundario from '../componentes/MenuSecundario';
import PieDePagina from '../componentes/PieDePagina';
import Texto from '../componentes/Texto';
import TituloPrincipal from '../componentes/TituloPrincipal';

function Modulos(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='CONTACTO' />
            <Texto
            descripcion='Muchas gracias por su interés, si tiene alguna pregunta. ¡escríbanos un mensaje ahora!' />
            <FormInput
            type='text'
            placeholder='Nombres y apellidos' />
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            <FormInput
            type='text'
            placeholder='Asunto' />
            <FormTextarea
            placeholder='Mensaje'
            columnas='50'
            filas='10' />
            <Texto
            descripcion='A continuación puede adjuntar cualquier archivo que considere para complementar. Tenga en cuenta: La persona encargada se comunicará con usted con los datos diligenciados en este formulario.' />
            <BotonPequeño
            texto='Enviar' />
            <PieDePagina />
        </div>
    );
}

export default Modulos;