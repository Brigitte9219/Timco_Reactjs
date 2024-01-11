import React, { useState } from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from '../componentes/EncabezadoSecundario';
import FormInput from '../componentes/FormInput';
import FormTextarea from '../componentes/FormTextarea';
import MenuSecundario from '../componentes/MenuSecundario';
import PieDePagina from '../componentes/PieDePagina';
import Texto from '../componentes/Texto';
import TituloPrincipal from '../componentes/TituloPrincipal';
import { useNavigate } from "react-router-dom";

const Contacto = () => {

    //Permite navegar por la aplicación
    const navigate = useNavigate();

    //Almacena los datos del formulario
    const [formData, setFormData] = useState ({
        nombre:"",
        correo:"",
        asunto:"",
        mensaje:""
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

    //Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Enviando formulario:", formData);

        const response = await fetch("http://localhost:8080/contacto", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            // Otras cabeceras según sea necesario
            },
            body: JSON.stringify(formData),
        });

        // Manejar la respuesta del servidor (response)
        if (response.ok) {
            // Realizar acciones después del éxito
            console.log("Solicitud POST exitosa");

            // Obtén el ID del trabajador de la respuesta (ajusta según la estructura de tu respuesta)
            //const { idTrabajador } = await response.json();

            // Redirige a la siguiente página y pasa el ID como parámetro
            navigate("/contactouno");
        } else {
            console.error("Error en la solicitud POST:", response.status, response.statusText);
        }
        } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        }
    };

    return(
        <div>
            <EncabezadoSecundario />
            <MenuSecundario />
            <TituloPrincipal
            titulo='CONTACTO' />
            <Texto
            descripcion='Muchas gracias por su interés, si tiene alguna pregunta. ¡escríbanos un mensaje ahora!' />
            <div className="contenedor-formulario">
            <form onSubmit={handleSubmit}>
            <div className="formulario-izq">
            <FormInput
            type='text'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
            placeholder='Nombres y apellidos' />
            </div>

            <div className="formulario-der">
            <FormInput
            type='email'
            name='correo'
            value={formData.correo}
            onChange={handleChange}
            placeholder='Correo electrónico' />
            </div>
            
            <FormTextarea
            placeholder='Asunto'
            columnas='50'
            filas='1'
            type='text'
            name='asunto'
            value={formData.asunto}
            onChange={handleChange} />
            <FormTextarea
            placeholder='Mensaje'
            columnas='50'
            filas='10'
            type='text'
            name='mensaje'
            value={formData.mensaje}
            onChange={handleChange} />
            <Texto
            descripcion='A continuación puede adjuntar cualquier archivo que considere para complementar. Tenga en cuenta: La persona encargada se comunicará con usted con los datos diligenciados en este formulario.' />
            <br />
            <BotonPequeño
            texto='Enviar'
            type='submit'
            link={'/contactouno'} />
            </form>
            </div>
            <PieDePagina />
        </div>
    );
}

export default Contacto;