import './App.css';
import EncabezadoSecundario from './componentes/EncabezadoSecundario';
import ImagenRetro from './componentes/ImagenRetro';
import MenuPrincipal from './componentes/MenuPrincipal';
import PieDePagina from './componentes/PieDePagina';

function App() {
  return (
    <div className="App">
      
      <EncabezadoSecundario />
      <MenuPrincipal />
      <ImagenRetro />
      <PieDePagina />
    </div>
  );
}

export default App;
