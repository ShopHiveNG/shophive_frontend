import { Outlet } from "react-router-dom";

import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

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
