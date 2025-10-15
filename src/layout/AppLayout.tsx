import { Outlet } from "react-router-dom";

import Footer from "@/layout/Footer";
import NavBar from "@/layout/NavBar";

export default function AppLayout() {
  return (
    <>
      <NavBar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
