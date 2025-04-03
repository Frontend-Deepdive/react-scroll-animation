import './App.css';
import Home from './pages/Home/Home';
import ScrollIntersectionObserver from './pages/Scroll/ScrollIntersectionObserver';
import ScrollFramerMotion from './pages/Scroll/ScrollFramerMotion';
import ScrollGSAP from './pages/Scroll/ScrollGSAP';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/intersection-observer' element={<ScrollIntersectionObserver />} />
          <Route path='/framer-motion' element={<ScrollFramerMotion />} />
          <Route path='/gsap' element={<ScrollGSAP />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
