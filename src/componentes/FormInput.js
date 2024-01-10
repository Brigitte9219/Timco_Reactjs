import React from "react";
import '../estilos/FormInput.css';


function FormInput(props){
    return(
        <div className='contenedor-input'>
            <form className="form">
            <input
          className='formulario-input'
          type={props.type}
          name={props.name}  // Agrega el atributo name
          value={props.value} // Usa el valor pasado por props
          placeholder={props.placeholder}
          onChange={props.onChange} // Maneja el cambio de valor
        />
            </form>
        </div>
    );
}

export default FormInput;