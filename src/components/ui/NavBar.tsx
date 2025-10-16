import { NavLink } from "react-router-dom";

interface NavbarProps {
  label: string;
  path: string;
}

export default function NavBar() {
  const navLists: NavbarProps[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="xs:flex hidden items-center justify-between gap-4">
      <div>Shop by categories</div>

      <div className="flex gap-8">
        {navLists.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-secondary-dark"
                : "text-black-dark dark:text-white"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-2">
        <p>Eng</p>
        <p>NGN</p>
      </div>
    </nav>
  );
}
