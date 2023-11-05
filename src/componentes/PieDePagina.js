import React from "react";
import Facebook from '../imagenes/imagen-facebook.png';
import Gmail from '../imagenes/imagen-gmail.png';
import Maps from '../imagenes/imagen-maps.png';
import YouTube from '../imagenes/imagen-youtube.png';

function PieDePagina(){
    return(
        <div>
            <hr />
            <p>Transporte, Ingeniería y Maquinaria de Colombia S.A.S.</p>
            <div>
                <img
                className='imagen'
                src={ YouTube }
                alt='Foto de YouTube' />
                <img
                className=''
                src={ Facebook }
                alt='Foto de Facebook' />
                <img
                className=''
                src={ Gmail }
                alt='Foto de Gmail' />
                <img
                className=''
                src={ Maps }
                alt='Foto de Maps' />
                <div>
                    <p>Contacto</p>
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