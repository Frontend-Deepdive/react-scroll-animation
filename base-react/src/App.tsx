import './App.css';
import Home from './pages/Home/Home';
import ScrollFramerMotion from './pages/Scroll/ScrollFramerMotion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/framer-motion' element={<ScrollFramerMotion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
