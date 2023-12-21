import logo from "../assets/icons/logo.svg";
import Button from "./Button";

const Links = [
  { name: "Home", path: "/" },
  { name: "Template", path: "/template" },
  { name: "Jobs", path: "/jobs" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-5 items-center">
      <img src={logo} alt="logo" />

      <div className="flex gap-10">
        {Links.map((link, index) => (
          <p key={index} className="text-primary text-sm font-medium hover:text-secondary">
            {link.name}
          </p>
        ))}
      </div>

      <Button children="Get Started" className={""} />
    </nav>
  );
};
export default Navbar;
