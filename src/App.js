// import logo from './logo.svg';
 import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Header from './components/pages/Header';
import ParticlesEx from './components/inc/ParticlesEx';
import SocialMediaMarketing from './components/pages/SocialMediaMarketing';
import Workingwith from './components/pages/Workingwith';
import SeoStretagy from './components/pages/SeoStretagy';
import DigitalCoomunication from './components/pages/DigitalCoomunication';
import DMServices from './components/pages/DMServices';
import Affordable from './components/pages/Affordable';
import WhyChoose from './components/pages/WhyChoose';
import Footer from './components/pages/Footer';


function App() {
  return (
    <div className="App" >
  {/* <ParticlesEx/> */}
     <Router>
     <Navbar/>
    <Routes>
      <Route path="/name" element={<Home/>}></Route>

    </Routes>
    <Header/>
    <SocialMediaMarketing/>
    <Workingwith/>
    <SeoStretagy/>
    <DigitalCoomunication/>
    <DMServices/>
    <Affordable/>
    <WhyChoose/>
    <Footer/>
     </Router>
  
    </div>
  );
}

export default App;
