import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blogs from './pages/Blogs'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
