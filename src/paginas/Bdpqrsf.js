import React from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import TituloPrincipal from "../componentes/TituloPrincipal";
import PieDePagina from "../componentes/PieDePagina";
import BotonPequeño from "../componentes/BotonPequeño";
import { useState, useEffect } from "react";
import { todosPqrsf } from "../funciones/funciones";

function Bdpqrsf(){

    const [pqrsf, setPqrsf] = useState(null)

    const [orden, setOrden] = useState('asc'); // Puede ser 'asc' o 'desc'

    useEffect(() => {
        todosPqrsf(setPqrsf);
    }, []);

    const handleSort = (columna) => {
        const nuevosProductos = [...pqrsf];
        nuevosProductos.sort((a, b) => {
            const factorOrden = (orden === 'asc') ? 1 : -1;
            return factorOrden * (a[columna] - b[columna]);
        });
        setPqrsf(nuevosProductos);
        setOrden(orden === 'asc' ? 'desc' : 'asc');
    };


    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='BASE DE DATOS PQRSF' />

            <table>
                <thead>
                    <tr>
                        <td onClick={() => handleSort('idPqrsf')}>Id</td>
                        <td>Empresa</td>
                        <td>Nombre</td>
                        <td>Cargo</td>
                        <td>Ciudad</td>
                        <td>Celular</td>
                        <td>Correo</td>
                        <td>Trámite</td>
                        <td>Mensaje</td>
                    </tr>
                </thead>
                <tbody>
                    {pqrsf && pqrsf.map(pqrsf =>(
                    <tr key={pqrsf.idPqrsf}>
                        <td> {pqrsf.idPqrsf} </td>
                        <td> {pqrsf.empresa} </td>
                        <td> {pqrsf.nombre} </td>
                        <td> {pqrsf.cargo} </td>
                        <td> {pqrsf.ciudad} </td>
                        <td> {pqrsf.celular} </td>
                        <td> {pqrsf.correo} </td>
                        <td> {pqrsf.tramite} </td>
                        <td> {pqrsf.mensaje} </td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <BotonPequeño
            texto='Regresar'
            link={'/reportesuno'} />
            <PieDePagina />
        </div>
    );
}

export default Bdpqrsf;