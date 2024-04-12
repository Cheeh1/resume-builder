import { Link, useLocation } from "react-router-dom";
import Button from "./FormButton";
import logo from "../assets/icons/logo.svg";
import listmobile from "../assets/icons/listmobile.svg";

const Links = [
  { name: "Home", path: "/" },
  { name: "Template", path: "/template" },
  { name: "Jobs", path: "/jobs" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-between px-5 xl:px-20 py-5 items-center border-b">
      <img src={logo} alt="logo" />

      <div className="hidden md:flex xl:flex gap-10">
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

      <Button children="Get Started" className={"hidden md:block xl:block"} />

      <img className="xl:hidden md:hidden" src={listmobile} alt="list" />
    </nav>
  );
};
export default Navbar;
