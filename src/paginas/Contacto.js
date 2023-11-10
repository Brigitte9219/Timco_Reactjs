import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from '../componentes/EncabezadoSecundario';
import FormInput from '../componentes/FormInput';
import FormTextarea from '../componentes/FormTextarea';
import MenuSecundario from '../componentes/MenuSecundario';
import PieDePagina from '../componentes/PieDePagina';
import Texto from '../componentes/Texto';
import TituloPrincipal from '../componentes/TituloPrincipal';

function Contacto(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='CONTACTO' />
            <Texto
            descripcion='Muchas gracias por su interés, si tiene alguna pregunta. ¡escríbanos un mensaje ahora!' />
            <div className="contenedor-formulario">
            <div className="formulario-izq">
            <FormInput
            type='text'
            placeholder='Nombres y apellidos' />
            </div>
            <div className="formulario-der">
            <FormInput
            type='email'
            placeholder='Correo electrónico' />
            </div>
            </div>
            <FormTextarea
            placeholder='Asunto'
            columnas='50'
            filas='1' />
            <FormTextarea
            placeholder='Mensaje'
            columnas='50'
            filas='10' />
            <Texto
            descripcion='A continuación puede adjuntar cualquier archivo que considere para complementar. Tenga en cuenta: La persona encargada se comunicará con usted con los datos diligenciados en este formulario.' />
            <br />
            <BotonPequeño
            texto='Enviar'
            link={'/contactouno'} />
            <PieDePagina />
        </div>
    );
}

export default Contacto;