import React, { useState } from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import FormTextarea from "../componentes/FormTextarea";
import ListaDespegable from "../componentes/ListaDespegable";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";
import { useNavigate } from "react-router-dom";

const Pqrsf = () => {

    //Nos permite navegar por la aplicación
    const navigate = useNavigate();

    //Almacenar los datos del formulario
    const [ formData, setFormData ] = useState ({
        nombre:"",
        empresa:"",
        cargo:"",
        ciudad:"",
        celular:"",
        correo:"",
        tramite:"",
        mensaje:""
    });

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

        const response = await fetch("http://localhost:8080/pqrsf", {
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
            navigate("/pqrsfuno");
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
            titulo='PQRSF' />
            <Texto
            descripcion='Al diligenciar el presente formulario usted autoriza el tratamiento de datos personales. Ver nuestra Política de Tratamiento de Datos Personales' />
            <div className="contenedor-formulario">
            <form onSubmit={handleSubmit}>
            <div className="formulario-izq">
            <FormInput
            type='text'
            name='empresa'
            value={formData.empresa}
            onChange={handleChange}
            placeholder='Entidad/Empresa' />
            <FormInput
            type='text'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
            placeholder='Nombre completo' />
            <FormInput
            type='text'
            name='cargo'
            value={formData.cargo}
            onChange={handleChange}
            placeholder='Cargo' />
            </div>

            <div className="formulario-der">
            <FormInput
            type='text'
            name='ciudad'
            value={formData.ciudad}
            onChange={handleChange}
            placeholder='Ciudad' />
            <FormInput
            type='number'
            name='celular'
            value={formData.celular}
            onChange={handleChange}
            placeholder='Celular' />
            <FormInput
            type='email'
            name='correo'
            value={formData.correo}
            onChange={handleChange}
            placeholder='Email' />
            </div>
            
            <Texto
            descripcion='Por favor seleccione el trámite a realizar:' />
            <ListaDespegable />
            <FormTextarea
            placeholder='Mensaje'
            columnas='50'
            filas='10'
            type='text'
            name='mensaje'
            value={formData.mensaje}
            onChange={handleChange} />
            <Texto
            descripcion='A continuación puede adjuntar cualquier archivo que considere para complementar su PQRSF.' />
            <BotonPequeño
            texto='Enviar'
            type='submit'
            link={'/pqrsfuno'} />
            </form>
            </div>
            <PieDePagina />
        </div>
    );
}

export default Pqrsf;