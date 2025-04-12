import { Routes, Route } from "react-router-dom";
// import Home from './Components/Home';
import Support from "./Components/Support";
import DeliveryPartners from "./Components/DeliveryPartners";
import Easymoviers from './Components/Easymoviers'
import ForEnterprise from "./Components/ForEnterprise";
import Contact from "./Components/Contact";



function App() {

  return (
    <>
    <Routes>

    {/* <Route path='/' element={<Home/>}/> */}
    <Route path='/' element={<Easymoviers/>}/>    
    <Route path='/Support' element={<Support/>}/>
    <Route path='/DeliveryPartners' element={<DeliveryPartners/>}/>
    <Route path='/ForEnterprise' element={<ForEnterprise/>}/>
    <Route path='/Contact' element={< Contact/>}/>


    </Routes>
    
    </>
  )
}

export default App
