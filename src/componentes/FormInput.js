import React from "react";
import '../estilos/FormInput.css';


function FormInput(props){
    return(
        <div className='contenedor-input'>
            <form className="form">
                <input className='formulario-input'
                type={ props.type }
                placeholder={ props.placeholder}
                />
            </form>
        </div>
    );
}

export default FormInput;