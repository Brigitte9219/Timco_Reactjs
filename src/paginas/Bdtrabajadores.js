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

    useEffect(() => {
        todosTrabajadores(setTrabajadores);
    }, []);

    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='BASE DE DATOS' />
            <TituloPrincipal
            titulo='COLABORADORES' />
            
            <table className="tabla-container">
                <thead>
                    <tr>
                        <td colSpan={25}><b>Datos personales</b></td>
                        <td colSpan={4}><b>Tallas</b></td>
                        <td colSpan={4}><b>En caso de emergencia</b></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre trabajador</td>
                        <td>Correo Electrónico</td>
                        <td>Tipo Id</td>
                        <td>Número Id</td>
                        <td>Fecha de expedición</td>
                        <td>Ciudad de expedición</td>
                        <td>Fecha de nacimiento</td>
                        <td>Lugar de nacimiento</td>
                        <td>Edad</td>
                        <td>Estatura</td>
                        <td>Género</td>
                        <td>Estado civil</td>
                        <td>RH</td>
                        <td>Grupo sanguíneo</td>
                        <td>Localidad</td>
                        <td>Ciudad de residencia</td>
                        <td>Barrio</td>
                        <td>Dirección</td>
                        <td>Teléfono Móvil</td>
                        <td>Teléfono fijo</td>
                        <td>EPS</td>
                        <td>Fondo de pensiones</td>
                        <td>Escolaridad</td>
                        <td>Profesión</td>
                        <td>Talla camisa</td>
                        <td>Talla pantalón</td>
                        <td>Talla chaqueta</td>
                        <td>Talla calzado</td>
                        <td>Nombre completo</td>
                        <td>Parentesco</td>
                        <td>Teléfono Móvil</td>
                        <td>Teléfono fijo</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                {trabajadores && trabajadores.map(trabajador => (
                    <tr key={trabajador.idTrabajador}>
                        <td> {trabajador.idTrabajador} </td>
                        <td> {trabajador.nombre} </td>
                        <td> {trabajador.correo} </td>
                        <td> {trabajador.tipoId} </td>
                        <td> {trabajador.numeroId} </td>
                        <td> {trabajador.fechaExpedicion} </td>
                        <td> {trabajador.ciudadExpedicion} </td>
                        <td> {trabajador.fechaNacimiento} </td>
                        <td> {trabajador.lugarNacimiento} </td>
                        <td> {trabajador.edad} </td>
                        <td> {trabajador.estatura} </td>
                        <td> {trabajador.genero} </td>
                        <td> {trabajador.estadoCivil} </td>
                        
                        <td> {trabajador.rh} </td>
                        <td> {trabajador.grupoSanguineo} </td>
                        <td> {trabajador.localidad} </td>
                        <td> {trabajador.ciudadResidencia} </td>
                        <td> {trabajador.barrio} </td>
                        <td> {trabajador.direccion} </td>
                        <td> {trabajador.telefonoMovil} </td>
                        <td> {trabajador.telefonoFijo} </td>
                        <td> {trabajador.eps} </td>
                        <td> {trabajador.afp} </td>
                        <td> {trabajador.escolaridad} </td>
                        <td> {trabajador.profesion} </td>

                        <td> {trabajador.tallaCamisa} </td>
                        <td> {trabajador.tallaPantalon} </td>
                        <td> {trabajador.tallaChaqueta} </td>
                        <td> {trabajador.tallaCalzado} </td>
                        <td> {trabajador.nombreEmergencia} </td>
                        <td> {trabajador.parentescoEmergencia} </td>
                        <td> {trabajador.movilEmergencia} </td>
                        <td> {trabajador.fijoEmergencia} </td>
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