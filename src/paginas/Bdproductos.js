import React from "react";
import { todosProductos } from "../funciones/funciones";
import { useEffect, useState } from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import TituloPrincipal from "../componentes/TituloPrincipal";
import PieDePagina from "../componentes/PieDePagina";
import BotonPequeño from "../componentes/BotonPequeño";
import '../estilos/Bdtrabajadores.css';

function BdProductos(){

    const [productos, setProductos] = useState(null)

    const [orden, setOrden] = useState('asc'); // Puede ser 'asc' o 'desc'

    useEffect(() => {
        todosProductos(setProductos);
    }, []);

    const handleSort = (columna) => {
        const nuevosProductos = [...productos];
        nuevosProductos.sort((a, b) => {
            const factorOrden = (orden === 'asc') ? 1 : -1;
            return factorOrden * (a[columna] - b[columna]);
        });
        setProductos(nuevosProductos);
        setOrden(orden === 'asc' ? 'desc' : 'asc');
    };

    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='BASE DE DATOS PRODUCTOS' />
            <table className="tabla-container">
                <thead>
                    <tr>
                        <td onClick={() => handleSort('idProducto')}>Id</td>
                        <td>Nombre producto</td>
                        <td>Código interno</td>
                        <td>Marca</td>
                        <td>Serie</td>
                        <td>Fecha de fabricación</td>
                        <td>Referencia</td>
                        <td>Lote</td>
                        <td>Norma técnica</td>
                        <td>Cantidad</td>
                        <td>Proveedor</td>
                    </tr>
                </thead>
                <tbody>
                {productos && productos.map(producto => (
                    <tr key={producto.idProducto}>
                        <td> {producto.idProducto} </td>
                        <td> {producto.nombre} </td>
                        <td> {producto.codigoInterno} </td>
                        <td> {producto.marca} </td>
                        <td> {producto.serie} </td>
                        <td> {producto.fechaFabricacion} </td>
                        <td> {producto.referencia} </td>
                        <td> {producto.lote} </td>
                        <td> {producto.normaTecnica} </td>
                        <td> {producto.cantidad} </td>
                        <td> {producto.proveedor} </td>
                        <td><button>Editar</button></td>
                        <td><button>Eliminar</button></td>
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

export default BdProductos;