import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contacts from './components/Contacts';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
