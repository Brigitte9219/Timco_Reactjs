import React from "react";
import '../estilos/FormTextarea.css';


function FormTextarea(props){
    return(
        <div className='contenedor-textarea'>
            <form>
            <textarea className='formulario-textarea'
                placeholder={ props.placeholder }
                cols={ props.columnas }
                rows={ props.filas }
                type={props.type}
                name={props.name}  // Agrega el atributo name
                value={props.value} // Usa el valor pasado por props
                onChange={props.onChange} // Maneja el cambio de valor
                />
            </form>
        </div>
    );
}

export default FormTextarea;