import React from "react";
import { Link } from "react-router-dom";
import '../estilos/BotonPequeño.css';

function BotonPequeño(props) {
  return (
    <div className="cajita">
      {/* Si el botón es de tipo "submit", debe estar dentro de un formulario */}
      {props.type === "submit" ? (
        <button className='botoncito'>
          {props.texto}
        </button>
      ) : (
        <Link to={props.link} className='botoncito'>
          {props.texto}
        </Link>
      )}
    </div>
  );
}

export default BotonPequeño;
