
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs"
import Contact from "./Pages/Contact"
import MoreInfo from "./Pages/MoreInfo"

import UserAdd from "./Pages/Users/UserAdd";
import UserList from "./Pages/Users/UserList";
import NoPage from "./Pages/NoPage";


import {BrowserRouter, Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App(){

  return(
    <>

    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>

          <Route path="/Home" element={<Home/>}></Route>

          <Route path="/AboutUs" element={<AboutUs/>}></Route>

          <Route path="/Contact" element={<Contact/>}></Route>
          
          <Route path="/MoreInfo" element={<MoreInfo/>}></Route>

          <Route path="/users/add" element={<UserAdd/>}></Route>

          <Route path="/users" element={<UserList/>}></Route>

          <Route path="*" element={<NoPage/>}></Route>

        </Routes>
      
      </BrowserRouter>

    </QueryClientProvider>
    </>
    
  );
}

export default App;