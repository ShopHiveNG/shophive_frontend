import { Outlet } from "react-router-dom";

import Footer from "@/components/ui/Footer";
import HeaderBar from "@/components/ui/HeaderBar";

export default function AppLayout() {
  return (
    <>
      <HeaderBar />

      <main className="mx-auto max-w-360 pt-30">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
