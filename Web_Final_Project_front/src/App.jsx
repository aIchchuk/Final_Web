
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs"
import Contact from "./Pages/Contact"
import MoreInfo from "./Pages/MoreInfo"
import NoPage from "./Pages/NoPage";


import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>

        <Route path="/Home" element={<Home/>}></Route>

        <Route path="/AboutUs" element={<AboutUs/>}></Route>

        <Route path="/Contact" element={<Contact/>}></Route>
        
        <Route path="/MoreInfo" element={<MoreInfo/>}></Route>

        <Route path="*" element={<NoPage/>}></Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;