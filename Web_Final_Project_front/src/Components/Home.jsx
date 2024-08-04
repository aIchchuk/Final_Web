import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header"

import AboutUs from "./AboutUs"
import Contact from "./Contact"
import MoreInfo from "./MoreInfo"

import {createBrowserRouter, RouterProvider} from "react-router-dom";


function Home() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/></>
    },
    
    {
      path: "/aboutus",
      element: <><Header/><AboutUs/></>
    },
    {
      path: "/contact",
      element: <><Header/><Contact/></>
    },
    {
      path: "/moreinfo",
      element: <><Header/><MoreInfo/></>
    }
  ])

return(
  <div className="add">
    <RouterProvider router={router}></RouterProvider>
    <Body></Body>
    <Footer></Footer>

  </div>
  
);
  
}

export default Home
