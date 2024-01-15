import React from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import TituloPrincipal from "../componentes/TituloPrincipal";
import PieDePagina from "../componentes/PieDePagina";
import BotonPequeño from "../componentes/BotonPequeño";
import { useState, useEffect } from "react";
import { todosAsignaciones } from "../funciones/funciones";

function Bdasignar (){

    const [asignaciones, setAsignaciones] = useState(null)

    const [orden, setOrden] = useState('asc'); // Puede ser 'asc' o 'desc'

    useEffect(() => {
        todosAsignaciones(setAsignaciones);
    }, []);

    const handleSort = (columna) => {
        const nuevosProductos = [...asignaciones];
        nuevosProductos.sort((a, b) => {
            const factorOrden = (orden === 'asc') ? 1 : -1;
            return factorOrden * (a[columna] - b[columna]);
        });
        setAsignaciones(nuevosProductos);
        setOrden(orden === 'asc' ? 'desc' : 'asc');
    };

    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='BASE DE DATOS ASIGNACIONES' />
            <table>
                <thead>
                    <tr>
                        <td onClick={() => handleSort('idAsignacion')}>Id</td>
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
                {asignaciones && asignaciones.map(asignacion => (
                    <tr key={asignacion.idAsignacion}>
                        <td> {asignacion.idAsignacion} </td>
                        <td> {asignacion.fechaAsignacion} </td>
                        <td> {asignacion.nombreTrabajador} </td>
                        <td> {asignacion.nombreProducto} </td>
                        <td> {asignacion.cantidad} </td>
                        <td> {asignacion.talla} </td>
                        <td> {asignacion.proyecto} </td>
                        <td> {asignacion.area} </td>
                        <td> {asignacion.observaciones} </td>
                    </tr>
                ))}
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