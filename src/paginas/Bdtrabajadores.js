import React from "react";
import { todosTrabajadores } from "../funciones/funciones";
import { useEffect, useState } from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import TituloPrincipal from "../componentes/TituloPrincipal";
import PieDePagina from "../componentes/PieDePagina";
import BotonPequeño from "../componentes/BotonPequeño";
import '../estilos/Bdtrabajadores.css';

function BdTrabajadores(){

    const [trabajadores, setTrabajadores] = useState(null)

    const [orden, setOrden] = useState('asc'); // Puede ser 'asc' o 'desc'

    useEffect(() => {
        todosTrabajadores(setTrabajadores);
    }, []);

    const handleSort = (columna) => {
        const nuevosTrabajadores = [...trabajadores];
        nuevosTrabajadores.sort((a, b) => {
            const factorOrden = (orden === 'asc') ? 1 : -1;
            return factorOrden * (a[columna] - b[columna]);
        });
        setTrabajadores(nuevosTrabajadores);
        setOrden(orden === 'asc' ? 'desc' : 'asc');
    };

    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='BASE DE DATOS COLABORADORES' />
            <table className="tabla-container">
                <thead>
                    <tr>
                        <td colSpan={6}><b>DATOS PERSONALES</b></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td onClick={() => handleSort('idTrabajador')}>Id</td>
                        <td>Nombre trabajador</td>
                        <td>Tipo Id</td>
                        <td>Número Id</td>                        
                    </tr>
                </thead>
                <tbody>
                {trabajadores && trabajadores.map(trabajador => (
                    <tr key={trabajador.idTrabajador}>
                        <td> {trabajador.idTrabajador} </td>
                        <td> {trabajador.nombre} </td>                        
                        <td> {trabajador.tipoId} </td>
                        <td> {trabajador.numeroId} </td>                        
                        <td><button>Actualizar</button></td>
                        <td><button>Eliminar</button></td>
                    </tr>
                ))}      
                </tbody>
            </table>

            <>
            {trabajadores != null? ("") : ('No hay trabajadores')}
            </>

            <BotonPequeño
            link={'/trabajadores'}
            texto='Regresar' />
            <PieDePagina />
        </div>
    );
}

export default BdTrabajadores;