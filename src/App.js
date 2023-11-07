import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Inicio';
import Modulos from './paginas/Modulos';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/modulos" element={<Modulos />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
