import React from "react";
import { todosTrabajadores } from "../funciones/funciones";
import { useEffect, useState } from "react";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import MenuSecundario from "../componentes/MenuSecundario";
import TituloPrincipal from "../componentes/TituloPrincipal";
import PieDePagina from "../componentes/PieDePagina";
import BotonPequeño from "../componentes/BotonPequeño";

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

            <>
            {trabajadores != null? (
                trabajadores.map(trabajador => (
                    <div key={trabajador.idTrabajador}>
                        <p> {trabajador.idTrabajador} </p>
                        <p> {trabajador.nombre} </p>
                        <p> {trabajador.correo} </p>
                        <p> {trabajador.tipoId} </p>
                        <p> {trabajador.numeroId} </p>
                        <p> {trabajador.fechaExpedicion} </p>
                        <p> {trabajador.ciudadExpedicion} </p>
                        <p> {trabajador.fechaNacimiento} </p>
                        <p> {trabajador.lugarNacimiento} </p>
                        <p> {trabajador.edad} </p>
                        <p> {trabajador.estatura} </p>
                        <p> {trabajador.genero} </p>
                        <p> {trabajador.estadoCivil} </p>

                        <p> {trabajador.rh} </p>
                        <p> {trabajador.grupoSanguineo} </p>
                        <p> {trabajador.localidad} </p>
                        <p> {trabajador.ciudadResidencia} </p>
                        <p> {trabajador.barrio} </p>
                        <p> {trabajador.direccion} </p>
                        <p> {trabajador.telefonoMovil} </p>
                        <p> {trabajador.telefonoFijo} </p>
                        <p> {trabajador.eps} </p>
                        <p> {trabajador.afp} </p>
                        <p> {trabajador.escolaridad} </p>
                        <p> {trabajador.profesion} </p>

                        <p> {trabajador.tallaCamisa} </p>
                        <p> {trabajador.tallaPantalon} </p>
                        <p> {trabajador.tallaChaqueta} </p>
                        <p> {trabajador.tallaCalzado} </p>

                        <p> {trabajador.nombreEmergencia} </p>
                        <p> {trabajador.parentescoEmergencia} </p>
                        <p> {trabajador.movilEmergencia} </p>
                        <p> {trabajador.fijoEmergencia} </p>
                    </div>
                ))
            ) : ('No hay trabajadores')}
            </>

            <BotonPequeño
            link={'/trabajadores'}
            texto='Regresar' />
            <PieDePagina />
        </div>
    );
}

export default BdTrabajadores;