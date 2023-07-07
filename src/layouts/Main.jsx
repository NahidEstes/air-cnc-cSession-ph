import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet />
      </div>
      {/* <Portfolio /> */}
    </div>
  );
};

export default Main;
