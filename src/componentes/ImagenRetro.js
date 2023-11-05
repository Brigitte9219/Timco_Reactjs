import React from "react";
import '../estilos/ImagenRetro.css';

function ImagenRetro(){
    return(
        <div className='contenedor-imagen-retro'>
            <img
            className='imagen-retro'
            src={require('../imagenes/imagen-retro.png')}
            alt='Foto de Retro' />
        </div>
    );
}

export default ImagenRetro;