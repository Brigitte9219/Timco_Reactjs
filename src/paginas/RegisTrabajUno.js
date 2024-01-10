import React, { useState } from "react";
import BotonPequeño from "../componentes/BotonPequeño";
import EncabezadoSecundario from "../componentes/EncabezadoSecundario";
import FormInput from "../componentes/FormInput";
import MenuSecundario from "../componentes/MenuSecundario";
import PieDePagina from "../componentes/PieDePagina";
import Texto from "../componentes/Texto";
import TituloPrincipal from "../componentes/TituloPrincipal";
import { useNavigate } from "react-router-dom"; // Cambia a useNavigate

const RegisTrabajUno = () => {

    const navigate = useNavigate(); // Cambia de useHistory a useNavigate

    //Almacena los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    tipoId: "",
    fechaExpedicion:"",
    fechaNacimiento:"",
    edad:"",
    genero:"",
    correo:"",
    numeroId:"",
    ciudadExpedicion:"",
    lugarNacimiento:"",
    estatura:"",
    estadoCivil:""
    // ...otros campos del formulario
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

      const response = await fetch("http://localhost:8080/trabajador", {
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
        const { idTrabajador } = await response.json();

        // Redirige a la siguiente página y pasa el ID como parámetro
        navigate(`/registrabajdos/${idTrabajador}`);
      } else {
        console.error("Error en la solicitud POST");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
    }
  };

  return (
    <div>
      <EncabezadoSecundario />
      <MenuSecundario />
      <TituloPrincipal titulo='Registrar' />
      <Texto descripcion='A continuación, registre los datos del trabajador que ingresa a la compañía' />
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
              name='tipoId'
              value={formData.tipoId}
              placeholder='Tipo de identificación'
              onChange={handleChange} />
            <FormInput
              type='date'
              name='fechaExpedicion'
              value={formData.fechaExpedicion}
              placeholder='Fecha de expedición'
              onChange={handleChange} />
            <FormInput
              type='date'
              name='fechaNacimiento'
              value={formData.fechaNacimiento}
              placeholder='Fecha de nacimiento'
              onChange={handleChange} />
            <FormInput
              type='number'
              name='edad'
              value={formData.edad}
              placeholder='Edad'
              onChange={handleChange} />
            <FormInput
              type='text'
              name='genero'
              value={formData.genero}
              placeholder='Género'
              onChange={handleChange} />
          </div>

          <div className="formulario-der">
            <FormInput
              type='email'
              name='correo'
              value={formData.correo}
              placeholder='Correo electrónico'
              onChange={handleChange} />
            <FormInput
              type='number'
              name='numeroId'
              value={formData.numeroId}
              placeholder='No de identificación'
              onChange={handleChange} />
            <FormInput
              type='text'
              name='ciudadExpedicion'
              value={formData.ciudadExpedicion}
              placeholder='Ciudad de expedición'
              onChange={handleChange} />
            <FormInput
              type='text'
              name='lugarNacimiento'
              value={formData.lugarNacimiento}
              placeholder='Lugar de nacimiento'
              onChange={handleChange} />
            <FormInput
              type='text'
              name='estatura'
              value={formData.estatura}
              placeholder='Estatura'
              onChange={handleChange} />
            <FormInput
              type='text'
              name='estadoCivil'
              value={formData.estadoCivil}
              placeholder='Estado civil'
              onChange={handleChange} />
          </div>
          <BotonPequeño
            texto='Continuar'
            type='submit'
            link={'/registrabajdos'} />
        </form>
      </div>
      <PieDePagina />
    </div>
  );
};

export default RegisTrabajUno;
