import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import Enlace from "../componentes/Enlace";
import FormCheckbox from "../componentes/FormCheckbox";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import TituloPrincipal from "../componentes/TituloPrincipal";
import '../estilos/SesionUno.css';

function SesionUno(){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Inicia sesión' />
            <div className="">
            <form className="sesion">
                <input  className="sesionformul" type="text" placeholder="Usuario" />
                <input className="sesionformul" type="password" placeholder="Contraseña" />
            </form>
            </div>
            <FormCheckbox
            texto='Mostrar contraseña' />
            <div className="caja-grande">
            <div className="caja-izq">
            <BotonPequeño
            texto='Crear cuenta'
            link={'/cuentauno'} />
            </div>
            <div className="caja-der">
            <BotonPequeño
            texto='Iniciar sesión'
            link={'/sesionuno'} />
            </div>
            </div>
            <Enlace
            texto='¿Has olvidado tu contraseña?' />
            <PieDePagina />
        </div>
    );
}

export default SesionUno;