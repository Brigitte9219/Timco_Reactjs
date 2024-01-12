import React, { useState } from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";
import { useNavigate } from "react-router-dom"; // Cambia a useNavigate

const RegisProducUno = () => {

    const navigate = useNavigate(); // Cambia de useHistory a useNavigate

    //Almacena los datos del formulario
    const [formData, setFormData] = useState({
        nombre:"",
        codigoInterno:"",
        marca:"",
        serie:"",
        fechaFabricacion:"",
        referencia:"",
        lote:"",
        normaTecnica:"",
        cantidad:"",
        proveedor:""
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

    //Validación de campos obligatorios
    if (
      !formData.nombre ||
      !formData.codigoInterno ||
      !formData.marca ||
      !formData.serie ||
      !formData.fechaFabricacion ||
      !formData.referencia ||
      !formData.lote ||
      !formData.normaTecnica ||
      !formData.cantidad ||
      !formData.proveedor
  ) {
      // Si falta algún campo, muestra una alerta al usuario
      alert("Por favor, complete todos los campos obligatorios.");
      return;
  }

    try {
        console.log("Enviando formulario:", formData);

      const response = await fetch("http://localhost:8080/producto", {
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

        //Mostrar una alerta al usuario
        alert('El proceso de registro ha terminado de manera exitosa.');

        // Obtén el ID del trabajador de la respuesta (ajusta según la estructura de tu respuesta)
        //const { idTrabajador } = await response.json();

        // Redirige a la siguiente página y pasa el ID como parámetro
        navigate("/regisproducdos");
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
            titulo='Registrar' />
            <Texto
            descripcion='A continuación, registre los datos del producto que ingresa a la compañía' />
            <div className="contenedor-formulario">
            <form onSubmit={handleSubmit}>
            <div className="formulario-izq">
            <FormInput
            type='text'
            name='nombre'
            value={formData.nombre}
            placeholder='Nombre completo'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='marca'
            value={formData.marca}
            placeholder='Marca'
            onChange={handleChange} />
            <FormInput
            type='date'
            name='fechaFabricacion'
            value={formData.fechaFabricacion}
            placeholder='Fecha de fabricación'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='lote'
            value={formData.lote}
            placeholder='Lote'
            onChange={handleChange} />
            <FormInput
            type='number'
            name='cantidad'
            value={formData.cantidad}
            placeholder='Cantidad'
            onChange={handleChange} />
            </div>

            <div className="formulario-der">
            <FormInput
            type='number'
            name='codigoInterno'
            value={formData.codigoInterno}
            placeholder='Código interno'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='serie'
            value={formData.serie}
            placeholder='Serie'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='referencia'
            value={formData.referencia}
            placeholder='Referencia'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='normaTecnica'
            value={formData.normaTecnica}
            placeholder='Norma técnica'
            onChange={handleChange} />
            <FormInput
            type='text'
            name='proveedor'
            value={formData.proveedor}
            placeholder='Proveedor'
            onChange={handleChange} />
            </div>
            <BotonPequeño
            texto='Guardar'
            type='submit'
            link={'/regisproducdos'} />
            </form>
            </div>
            <PieDePagina />
        </div>
    );
}

export default RegisProducUno;