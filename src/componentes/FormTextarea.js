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
                />
            </form>
        </div>
    );
}

export default FormTextarea;