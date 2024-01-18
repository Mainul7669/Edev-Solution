
import { Outlet } from "react-router-dom";
import Navbar from "../pages.jsx/Shared/Navbar/Navbar";
import Footer from "../pages.jsx/Shared/Footer/Footer";


 const Main = () => {

 

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </div>
  );
};


export default Main;