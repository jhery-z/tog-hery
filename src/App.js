import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Form from './pages/FormikForm.js';
import './App.css';

function App() {
  return (
       <BrowserRouter>
        <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        </Sidebar>
        </BrowserRouter>
  );
}

export default App;
