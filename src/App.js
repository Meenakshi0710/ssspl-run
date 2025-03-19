
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';

import Harvestchart from './Components/Harvestchart';

import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';


function App() {
 

 

 
  return (
    
  
      <>
        <ScrollToTop/>
    <Navbar/>
        
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
      
        <Route exact path="/harvestchart" element={<Harvestchart/>} />
        <Route exact path="/contact" element={<Contactus/>} />
       
        
        
        
     
    </Routes>
   
    <Footer/>
    
      </>
  
  );
}

export default App;
