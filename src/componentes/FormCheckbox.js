import React from "react";
import '../estilos/FormCheckbox.css';

function FormCheckbox(){
    return(
        <div>
            <form className="formu">
                <input type="checkbox" id="caja" />
                <label for="caja">Acepto términos y condiciones</label>
            </form>
        </div>
    );
}

export default FormCheckbox;