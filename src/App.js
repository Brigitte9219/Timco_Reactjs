import './App.css';
import EncabezadoPrincipal from './componentes/EncabezadoPrincipal';
import ImagenRetro from './componentes/ImagenRetro';
import MenuPrincipal from './componentes/MenuPrincipal';
import PieDePagina from './componentes/PieDePagina';

function App() {
  return (
    <div className="App">
      <EncabezadoPrincipal />
      <MenuPrincipal />
      <ImagenRetro />
      <PieDePagina />
    </div>
  );
}

export default App;
