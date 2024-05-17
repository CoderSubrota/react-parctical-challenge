import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";

const MainLayOut = () => {
return (
    <>
     <Navbar></Navbar>
     <div style={{height:"100%"}}>
     <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </>
)
}

export default MainLayOut;