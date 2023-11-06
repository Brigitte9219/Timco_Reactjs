import './App.css';
import Boton from './componentes/Boton';
import EncabezadoSecundario from './componentes/EncabezadoSecundario';
import MenuSecundario from './componentes/MenuSecundario';
import PieDePagina from './componentes/PieDePagina';
import TituloPrincipal from './componentes/TituloPrincipal';

function App() {
  return (
    <div className="App">
      <EncabezadoSecundario />
      <MenuSecundario/>
      <TituloPrincipal
      titulo='MÓDULOS' />
      <Boton
      texto='Gestión de usuarios' />
      <Boton
      texto='Gestion' />
      <Boton
      texto='Gestión de usuarios' />
      <Boton
      texto='Gestión de usuarios' />
      <Boton
      texto='Gestión de usuarios' />
      <PieDePagina />
    </div>
  );
}

export default App;
