import { Outlet } from "react-router";
import Navbar from "components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto my-20 max-w-3xl">
        <Outlet />
      </div>
    </>
  );
}

export default App;
