import React from "react";
import '../estilos/FormCheckbox.css';

function FormCheckbox(props){
    return(
        <div>
            <form className="formu">
                <input type="checkbox" id="caja" />
                <label for="caja">{ props.texto}</label>
            </form>
        </div>
    );
}

export default FormCheckbox;