import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Inicio';
import Modulos from './paginas/Modulos';

function App() {
  return (
    <div className="App">
      <Inicio />
      <Router>
      <Routes>
        <Route path="/Modulos" element={<Modulos />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
