import Header from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
