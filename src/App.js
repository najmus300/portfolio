import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Botnet from './Components/Botnet';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Testemonials from './pages/Testemonials';

function App() {
  return (
<BrowserRouter>
<Navbar/>

<Botnet/>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/experience" element={<Experience />} />
 <Route path="/projects" element={<Projects />} />
 <Route path="/certificates" element={<Certificates />} />
 <Route path="/testimonials" element={<Testemonials />} />
 <Route path="/skills" element={<Skills />} />
</Routes>

<Footer/>
</BrowserRouter>
  );
}

export default App;