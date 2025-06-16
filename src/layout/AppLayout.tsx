import { Outlet } from "react-router-dom";

import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

export default function AppLayout() {
  return (
    <div className="relative isolate">
      <NavBar />

      <main className="pt-20 selection:bg-[var(--color-primary)] selection:text-white dark:bg-gray-800">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
