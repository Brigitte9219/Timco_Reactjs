import React from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import TituloPrincipal from "../componentes/TituloPrincipal";
import { useState, useEffect } from "react";
import { todosSolicitudes } from "../funciones/funciones";
import BotonPequeño from "../componentes/BotonPequeño";


function Bdsolicitudes(){

    const [solicitudes, setSolicitudes] = useState(null)

    //const [orden, setOrden] = useState('asc'); // Puede ser 'asc' o 'desc'

    useEffect(() => {
        todosSolicitudes(setSolicitudes);
    }, []);

    /*const handleSort = (columna) => {
        const nuevosProductos = [...solicitudes];
        nuevosProductos.sort((a, b) => {
            const factorOrden = (orden === 'asc') ? 1 : -1;
            return factorOrden * (a[columna] - b[columna]);
        });
        setSolicitudes(nuevosProductos);
        setOrden(orden === 'asc' ? 'desc' : 'asc');
    };*/

    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='BASE DE DATOS SOLICITUDES' />
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Fecha de solicitud</td>
                        <td>Nombre de trabajador</td>
                        <td>Nombre del producto</td>
                        <td>Cantidad</td>
                        <td>Talla</td>
                        <td>Actividad a realizar</td>
                        <td>Proyecto</td>
                        <td>Área</td>
                        <td>Observaciones</td>
                    </tr>
                </thead>
                <tbody>
                {solicitudes && solicitudes.map(solicitud => (
                    <tr key={solicitud.idSolicitud}>
                        <td> {solicitud.idSolicitud} </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}   
                </tbody>
            </table>
            <BotonPequeño
            link={'/productos'}
            texto='Regresar' />
            <PieDePagina />

        </div>
      );
}

export default Bdsolicitudes;