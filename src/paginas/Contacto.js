import React from "react";
import Boton from '../componentes/Boton';
import EncabezadoSecundario from '../componentes/EncabezadoSecundario';
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
            <Boton
            texto='Gestión de usuarios' />
            <Texto
            descripcion='A continuación puede adjuntar cualquier archivo que considere para complementar. Tenga en cuenta: La persona encargada se comunicará con usted con los datos diligenciados en este formulario.' />
            
            <PieDePagina />
        </div>
    );
}

export default Modulos;