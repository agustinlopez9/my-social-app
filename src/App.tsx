import { Outlet } from "react-router";
import Navbar from "components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
}

export default App;
