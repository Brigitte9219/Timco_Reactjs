import React from "react";
import '../estilos/PieDePagina.css';
import Facebook from '../imagenes/imagen-facebook.png';
import Gmail from '../imagenes/imagen-gmail.png';
import Maps from '../imagenes/imagen-maps.png';
import YouTube from '../imagenes/imagen-youtube.png';

function PieDePagina(){
    return(
        <div className="contenedor-principal">
            <br /><br />
            <hr />
            <div className="texto">
            <p>Transporte, Ingeniería y Maquinaria de Colombia S.A.S.</p>
            </div>
            <div className='contenedor-imagenes-texto'>
            <div className='contenedor-imagenes'>
                <img
                className='imagen'
                src={ YouTube }
                alt='Foto de YouTube' />
                <img
                className='imagen'
                src={ Facebook }
                alt='Foto de Facebook' />
                <img
                className='imagen'
                src={ Gmail }
                alt='Foto de Gmail' />
                <img
                className='imagen'
                src={ Maps }
                alt='Foto de Maps' />
            </div>
                <div className="contenedor-texto">
                    <p><b>Contacto</b></p>
                    <p>Timcosas@gmail.com</p>
                    <p>3142221847</p>
                    <p>Bogotá D.C.</p>
                    <p>Lun - Vie 08:00am a 5:00pm</p>
                </div>
                </div>
        </div>
    );
}

export default PieDePagina;