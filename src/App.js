import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/projects' element={<Project/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
