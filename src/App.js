import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './paginas/Contacto';
import CuentaDos from './paginas/CuentaDos';
import CuentaUno from './paginas/CuentaUno';
import Inicio from './paginas/Inicio';
import Modulos from './paginas/Modulos';
import Pqrsf from './paginas/Pqrsf';
import RegisTrabajDos from './paginas/RegisTrabajDos';
import RegisTrabajTres from './paginas/RegisTrabajTres';
import RegisTrabajUno from './paginas/RegisTrabajUno';
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
      </Routes>
      </Router>
    </div>
  );
}

export default App;
