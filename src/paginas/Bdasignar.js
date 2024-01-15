import React from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import TituloPrincipal from "../componentes/TituloPrincipal";
import PieDePagina from "../componentes/PieDePagina";
import BotonPequeño from "../componentes/BotonPequeño";

function Bdasignar (){
    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='BASE DE DATOS ASIGNACIONES' />
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Fecha de asignación</td>
                        <td>Nombre de trabajador</td>
                        <td>Nombre del producto</td>
                        <td>Cantidad</td>
                        <td>Talla</td>
                        <td>Proyecto</td>
                        <td>Area</td>
                        <td>Observaciones</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>fdgf</td>
                        <td>rtr</td>
                    </tr>
                </tbody>
            </table>
            <BotonPequeño
            link={'/asignar'}
            texto='Regresar' />
            <PieDePagina />
        </div>

    );
}

export default Bdasignar;