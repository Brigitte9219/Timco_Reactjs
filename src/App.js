import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Asignar from './paginas/Asignar';
import AsignarUno from './paginas/AsignarUno';
import Contacto from './paginas/Contacto';
import CuentaDos from './paginas/CuentaDos';
import CuentaUno from './paginas/CuentaUno';
import Inicio from './paginas/Inicio';
import Modulos from './paginas/Modulos';
import Pqrsf from './paginas/Pqrsf';
import Productos from './paginas/Productos';
import RegisProducUno from './paginas/RegisProducUno';
import RegisTrabajDos from './paginas/RegisTrabajDos';
import RegisTrabajTres from './paginas/RegisTrabajTres';
import RegisTrabajUno from './paginas/RegisTrabajUno';
import Reportes from './paginas/Reportes';
import Solicitar from './paginas/Solicitar';
import SolicitarUno from './paginas/SolicitarUno';
import Trabajadores from './paginas/Trabajadores';
import Usuarios from './paginas/Usuarios';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pqrsf" element={<Pqrsf />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cuentauno" element={<CuentaUno />} />
        <Route path="/cuentados" element={<CuentaDos />} />
        <Route path="/trabajadores" element={<Trabajadores />} />
        <Route path="/registrabajuno" element={<RegisTrabajUno />} />
        <Route path="/registrabajdos" element={<RegisTrabajDos />} />
        <Route path="/registrabajtres" element={<RegisTrabajTres />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/regisproducuno" element={<RegisProducUno />} />
        <Route path="/solicitar" element={<Solicitar />} />
        <Route path="/solicitaruno" element={<SolicitarUno />} />
        <Route path="/asignar" element={<Asignar />} />
        <Route path="/asignaruno" element={<AsignarUno />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
