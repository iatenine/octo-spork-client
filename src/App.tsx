import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Results from './pages/results';
import Details from './pages/details';
import About from './pages/about'
import Navigation from './component/Navbar';


import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <Navigation />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results' element={<Results/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  </>
  );
}
 
export default App;
