import React, { useState } from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import FormTextarea from "../componentes/FormTextarea";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";
import { useNavigate } from "react-router-dom";

const AsignarUno = () => {

    //Permite navegar por la aplicación
    const navigate =useNavigate();

    //Almacena los datos del formulario
    const [formData, setFormData] = useState ({
        fechaAsignacion:"",
        nombreTrabajador:"",
        nombreProducto:"",
        proyecto:"",
        talla:"",
        cantidad:"",
        area:"",
        observaciones:""
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

        if(
            !formData.fechaAsignacion ||
            !formData.nombreTrabajador ||
            !formData.nombreProducto ||
            !formData.proyecto ||
            !formData.talla ||
            !formData.cantidad || 
            !formData.area
        ){
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        try {
            console.log("Enviando formulario:", formData);

        const response = await fetch("http://localhost:8080/asignacion", {
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
            
            //Alerta para el usuario
            alert('La asignación se ha realizado de manera exitosa.');

            // Obtén el ID del trabajador de la respuesta (ajusta según la estructura de tu respuesta)
            //const { idTrabajador } = await response.json();

            // Redirige a la siguiente página y pasa el ID como parámetro
            navigate("/asignardos");
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
    titulo='Asignar' />
    <Texto
    descripcion='Realice la asignación de un producto de acuerdo con la solicitud previa' />
    <div className="contenedor-formulario">
    <form onSubmit={handleSubmit}>
    <div className="formulario-izq">
    <FormInput
    type='date'
    name='fechaAsignacion'
    value={formData.fechaAsignacion}
    placeholder='Fecha de asignación'
    onChange={handleChange} />
    <FormInput
    type='text'
    name='nombreTrabajador'
    value={formData.nombreTrabajador}
    placeholder='Nombre del trabajador'
    onChange={handleChange} />
    <FormInput
    type='text'
    name='nombreProducto'
    value={formData.nombreProducto}
    placeholder='Nombre del producto'
    onChange={handleChange} />
    <FormInput
    type='text'
    name='proyecto'
    value={formData.proyecto}
    placeholder='Proyecto'
    onChange={handleChange} />
    </div>

    <div className="formulario-der">
    <FormInput
    type='text'
    name='talla'
    value={formData.talla}
    placeholder='Talla'
    onChange={handleChange} />
    <FormInput
    type='number'
    name='cantidad'
    value={formData.cantidad}
    placeholder='Cantidad'
    onChange={handleChange} />
    <FormInput
    type='text'
    name='area'
    value={formData.area}
    placeholder='Area'
    onChange={handleChange} />
    </div>
    <FormTextarea
    placeholder='Observaciones'
    columnas='50'
    filas='10'
    type='text'
    name='observaciones'
    value={formData.observaciones}
    onChange={handleChange} /><br /><br />
    <BotonPequeño
    texto='Enviar'
    type='submit'
    link={'/asignardos'} />
    </form>
    </div>
    <PieDePagina />
</div>
    );
}

export default AsignarUno;