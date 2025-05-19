import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function AppLayout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
