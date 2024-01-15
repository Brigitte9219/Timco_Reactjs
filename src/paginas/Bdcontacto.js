import React, { useState, useEffect } from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import TituloPrincipal from "../componentes/TituloPrincipal";
import PieDePagina from "../componentes/PieDePagina";
import BotonPequeño from "../componentes/BotonPequeño";
import { todosContacto } from "../funciones/funciones";

function Bdcontacto(){

    const [contactos, setContactos] = useState(null)

    const [orden, setOrden] = useState('asc'); // Puede ser 'asc' o 'desc'

    useEffect(() => {
        todosContacto(setContactos);
    }, []);

    const handleSort = (columna) => {
        const nuevosProductos = [...contactos];
        nuevosProductos.sort((a, b) => {
            const factorOrden = (orden === 'asc') ? 1 : -1;
            return factorOrden * (a[columna] - b[columna]);
        });
        setContactos(nuevosProductos);
        setOrden(orden === 'asc' ? 'desc' : 'asc');
    };

    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='BASE DE DATOS CONTACTO' />

            <table>
                <thead>
                    <tr>
                        <td onClick={() => handleSort('idContacto')}>Id</td>
                        <td>Nombre</td>
                        <td>Correo</td>
                        <td>Asunto</td>
                        <td>Mensaje</td>
                    </tr>
                </thead>
                <tbody>
                    {contactos && contactos.map(contacto =>(
                    <tr>
                        <td> {contacto.idContacto} </td>
                        <td> {contacto.nombre} </td>
                        <td> {contacto.correo} </td>
                        <td> {contacto.asunto} </td>
                        <td> {contacto.mensaje} </td>
                        <td></td>
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

export default Bdcontacto;