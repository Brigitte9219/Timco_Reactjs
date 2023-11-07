import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './paginas/Contacto';
import Inicio from './paginas/Inicio';
import Modulos from './paginas/Modulos';
import Pqrsf from './paginas/Pqrsf';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pqrsf" element={<Pqrsf />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
