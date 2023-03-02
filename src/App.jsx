import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
//const btn = document.getElementById('button');
import { HashRouter, Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import SliderLateral from './components/SliderLateral';
import Email from './components/email';

function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <>
    
    <HashRouter>
    <Routes>
        
        <Route path="/" element={<Home/>} />
        
        {/* <Route path="/proyects" element={<Proyects/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/proyectslinda' element={<ProyectsLinda/>} /> */}
      </Routes>
     
    </HashRouter>

   
 <Email/>
    </>

  )
  
}



export default App;
