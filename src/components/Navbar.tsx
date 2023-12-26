import logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const Links = [
  { name: "Home", path: "/" },
  { name: "Template", path: "/template" },
  { name: "Jobs", path: "/jobs" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-between px-20 py-5 items-center">
      <img src={logo} alt="logo" />

      <div className="flex gap-10">
        {Links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={`${
              pathname === link.path
                ? "text-secondary"
                : "text-primary hover:text-secondary"
            } text-sm font-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <Button children="Get Started" className={""} />
    </nav>
  );
};
export default Navbar;
