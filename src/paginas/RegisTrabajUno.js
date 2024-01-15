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

    //Esto permite navegar entre la aplicacion
    const navigate = useNavigate();

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
    estadoCivil:"",
    // ...otros campos del formulario
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
    profesion:"",
    // ...otros campos del formulario
    tallaCamisa:"",
    tallaPantalon:"",
    tallaChaqueta:"",
    tallaCalzado:"",
    nombreEmergencia:"",
    parentescoEmergencia:"",
    movilEmergencia:"",
    fijoEmergencia:""
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
      !formData.nombre ||
      !formData.tipoId ||
      !formData.fechaExpedicion ||
      !formData.fechaNacimiento ||
      !formData.edad ||
      !formData.genero ||
      !formData.correo ||
      !formData.numeroId ||
      !formData.ciudadExpedicion ||
      !formData.lugarNacimiento ||
      !formData.estatura ||
      !formData.estadoCivil ||
      !formData.rh ||
      !formData.grupoSanguineo ||
      !formData.localidad ||
      !formData.ciudadResidencia ||
      !formData.barrio ||
      !formData.direccion ||
      !formData.telefonoMovil ||
      !formData.telefonoFijo ||
      !formData.eps ||
      !formData.afp ||
      !formData.escolaridad ||
      !formData.profesion ||
      !formData.tallaCamisa ||
      !formData.tallaPantalon ||
      !formData.tallaChaqueta ||
      !formData.tallaCalzado ||
      !formData.nombreEmergencia ||
      !formData.parentescoEmergencia ||
      !formData.movilEmergencia ||
      !formData.fijoEmergencia
    ){
      alert('Por favor, complete todos los campos obligatorios');
    }

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

        //Mostrar una alerta al usuario
        alert('El proceso de registro ha terminado de manera exitosa.');

        // Obtén el ID del trabajador de la respuesta (ajusta según la estructura de tu respuesta)
        //const { idTrabajador } = await response.json();

        // Redirige a la siguiente página y pasa el ID como parámetro
        navigate("/registrabajcuatro");
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
            <Texto
            descripcion='Tallas para dotación' />
            <FormInput
            type='text'
            name='tallaCamisa'
            value={formData.tallaCamisa}
            onChange={handleChange}
            placeholder='Camisa' />
            <FormInput
            type='text'
            name='tallaChaqueta'
            value={formData.tallaChaqueta}
            onChange={handleChange}
            placeholder='Chaqueta' />
            <FormInput
            type='text'
            name='tallaPantalon'
            value={formData.tallaPantalon}
            onChange={handleChange}
            placeholder='Pantalon' />
            <FormInput
            type='text'
            name='tallaCalzado'
            value={formData.tallaCalzado}
            onChange={handleChange}
            placeholder='Calzado' />
            <Texto
            descripcion='En caso de emergencia' />
            <FormInput
            type='text'
            name='nombreEmergencia'
            value={formData.nombreEmergencia}
            onChange={handleChange}
            placeholder='Nombre Completo' />
            <FormInput
            type='number'
            name='movilEmergencia'
            value={formData.movilEmergencia}
            onChange={handleChange}
            placeholder='Telefono móvil' />
            <FormInput
            type='text'
            name='parentescoEmergencia'
            value={formData.parentescoEmergencia}
            onChange={handleChange}
            placeholder='Parentesco' />
            <FormInput
            type='number'
            name='fijoEmergencia'
            value={formData.fijoEmergencia}
            onChange={handleChange}
            placeholder='Telefono fijo' />          
          </div>
          <BotonPequeño
            texto='Continuar'
            type='submit'
            link={'/registrabajcuatro'} />
        </form>
      </div>
      <PieDePagina />
    </div>
  );
};

export default RegisTrabajUno;
