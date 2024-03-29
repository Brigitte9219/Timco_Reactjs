import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Asignar from './paginas/Asignar';
import AsignarDos from './paginas/AsignarDos';
import AsignarUno from './paginas/AsignarUno';
import Contacto from './paginas/Contacto';
import ContactoUno from './paginas/ContactoUno';
import CuentaDos from './paginas/CuentaDos';
import CuentaTres from './paginas/CuentaTres';
import CuentaUno from './paginas/CuentaUno';
import Inicio from './paginas/Inicio';
import Modulos from './paginas/Modulos';
import Pqrsf from './paginas/Pqrsf';
import PqrsfUno from './paginas/PqrsfUno';
import Productos from './paginas/Productos';
import RegisProducDos from './paginas/RegisProducDos';
import RegisProducUno from './paginas/RegisProducUno';
import RegisTrabajCuatro from './paginas/RegisTrabajCuatro';
import RegisTrabajDos from './paginas/RegisTrabajDos';
import RegisTrabajTres from './paginas/RegisTrabajTres';
import RegisTrabajUno from './paginas/RegisTrabajUno';
import Reportes from './paginas/Reportes';
import ReportesDos from './paginas/ReportesDos';
import ReportesUno from './paginas/ReportesUno';
import SesionUno from './paginas/SesionUno';
import Solicitar from './paginas/Solicitar';
import SolicitarDos from './paginas/SolicitarDos';
import SolicitarUno from './paginas/SolicitarUno';
import Trabajadores from './paginas/Trabajadores';
import Usuarios from './paginas/Usuarios';
import BdTrabajadores from './paginas/Bdtrabajadores';
import BdProductos from './paginas/Bdproductos';
import Bdsolicitudes from './paginas/Bdsolicitudes';
import Bdasignar from './paginas/Bdasignar';
import Bdcontacto from './paginas/Bdcontacto';
import Bdpqrsf from './paginas/Bdpqrsf';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/contactouno" element={<ContactoUno />} />
        <Route path="/pqrsf" element={<Pqrsf />} />
        <Route path="/pqrsfuno" element={<PqrsfUno />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cuentauno" element={<CuentaUno />} />
        <Route path="/cuentados" element={<CuentaDos />} />
        <Route path="/cuentatres" element={<CuentaTres />} />
        <Route path="/trabajadores" element={<Trabajadores />} />
        <Route path="/registrabajuno" element={<RegisTrabajUno />} />
        <Route path="/registrabajdos" element={<RegisTrabajDos />} />
        <Route path="/registrabajtres" element={<RegisTrabajTres />} />
        <Route path="/registrabajcuatro" element={<RegisTrabajCuatro />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/regisproducuno" element={<RegisProducUno />} />
        <Route path="/regisproducdos" element={<RegisProducDos />} />
        <Route path="/solicitar" element={<Solicitar />} />
        <Route path="/solicitaruno" element={<SolicitarUno />} />
        <Route path="/solicitardos" element={<SolicitarDos />} />
        <Route path="/asignar" element={<Asignar />} />
        <Route path="/asignaruno" element={<AsignarUno />} />
        <Route path="/asignardos" element={<AsignarDos />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/reportesuno" element={<ReportesUno />} />
        <Route path="/reportesdos" element={<ReportesDos />} />
        <Route path="/sesionuno" element={<SesionUno />} />
        <Route path="/bdtrabajadores" element={<BdTrabajadores />} />
        <Route path="/bdproductos" element={<BdProductos />} />
        <Route path="/bdsolicitudes" element={<Bdsolicitudes />} />
        <Route path='/bdasignar' element={<Bdasignar /> } />
        <Route path='/bdcontacto' element={<Bdcontacto />} />
        <Route path='/bdpqrsf' element={<Bdpqrsf />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
