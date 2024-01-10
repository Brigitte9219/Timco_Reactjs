import React from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Cambia a useNavigate

const RegisTrabajDos = () => {

    const navigate = useNavigate(); // Cambia de useHistory a useNavigate
   

    //Almacena los datos del formulario
    const [formData, setFormData] = useState({
        rh:"",
        grupoSanguineo:"",
        localidad:"",
        ciudadResidencia:"",
        barrio:"",
        direccion:"",
        telefonoMovil:"",
        telefonoFijo:"",
        eps:"",
        afp:"",
        escolaridad:"",
        profesion:""
    });

    //Actualiza el estado al cambiar los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Campo ${name} cambiado a: ${value}`);
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Enviando formulario:", formData);

          const response = await fetch("http://localhost:8080/trabajador/ID", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              // Otras cabeceras según sea necesario
            },
            body: JSON.stringify(formData),
          });
    
          // Manejar la respuesta del servidor (response)
          if (response.ok) {
            // Realizar acciones después del éxito
            console.log("Solicitud PUT exitosa");
    
            // Redirige a la siguiente página después de un envío exitoso
            navigate("/registrabajtres"); // Cambia de history.push a navigate
          } else {
            console.error("Error en la solicitud PUT:", response.status, response.statusText);

            // Puedes intentar obtener más detalles del error si el servidor proporciona un cuerpo JSON en la respuesta
            const errorResponse = await response.json();
            console.error("Detalles del error:", errorResponse);
          }
        } catch (error) {
          console.error("Error al realizar la solicitud PUT:", error);
        }
      };

    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='Registrar' />
            <Texto
            descripcion='Continúe registrando los datos' />
            <div className="contenedor-formulario">
            <form onSubmit={handleSubmit}>
            <div className="formulario-izq">
            <FormInput
            type='text'
            name='rh'
            value={formData.rh}
            placeholder='RH'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='localidad'
            value={formData.localidad}
            placeholder='Localidad'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='barrio'
            value={formData.barrio}
            placeholder='Barrio'
            onChange={handleChange} />
            <FormInput
            type='number'
            name='telefonoMovil'
            value={formData.telefonoMovil}
            placeholder='Telefono Móvil'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='eps'
            value={formData.eps}
            placeholder='EPS'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='escolaridad'
            value={formData.escolaridad}
            placeholder='Escolaridad'
            onChange={handleChange} />
            </div>

            <div className="formulario-der">
            <FormInput
            type='text'
            name='grupoSanguineo'
            value={formData.grupoSanguineo}
            placeholder='Grupo sanguíneo'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='ciudadResidencia'
            value={formData.ciudadResidencia}
            placeholder='Ciudad de residencia'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='direccion'
            value={formData.direccion}
            placeholder='Dirección'
            onChange={handleChange} />
            <FormInput
            type='number'
            name='telefonoFijo'
            value={formData.telefonoFijo}
            placeholder='Telefono fijo'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='afp'
            value={formData.afp}
            placeholder='Fondo de pensiones'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='profesion'
            value={formData.profesion}
            placeholder='Profesión'
            onChange={handleChange} />
            </div>
            <BotonPequeño
            texto='Continuar'
            type='submit'
            link={'/RegisTrabajTres'} />
            </form>
            </div>
            <PieDePagina />
        </div>
    );
}

export default RegisTrabajDos;