import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl px-6 md:px-12 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
