import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between px-5 xl:px-20 pt-0 pb-3 items-center border-b">
      <img src={logo} alt="logo" />

      <div className="hidden md:flex xl:flex gap-10">
        {Links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={`${
              pathname === link.path
                ? "text-secondary font-[900]"
                : "text-primary hover:text-secondary"
            } text-sm font-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        onClick={() => navigate("/auth")}
        className="bg-secondary text-white rounded-md py-4 px-6 font-semibold hidden md:block xl:block text-sm"
      >
        Get Started
      </button>

      <img className="xl:hidden md:hidden" src={listmobile} alt="list" />
    </nav>
  );
};
export default Navbar;
