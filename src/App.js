import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contacts from './components/Contacts';
import './styles/App.css';
import 'normalize.css';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
