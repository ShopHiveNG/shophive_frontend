import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main aria-label="Authentication Page">
      <Outlet />
    </main>
  );
}
