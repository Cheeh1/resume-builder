import {  Link, useLocation } from "react-router-dom";
import list from "../assets/icons/list.svg";
import listmobile from "../assets/icons/listmobile.svg";

const Links = [
  {
    path: "/dashboard",
    name: "Personal information",
    img: "/images/personal.svg",
  },
  {
    path: "/dashboard/experience",
    name: "Experience",
    img: "/images/experience.svg",
  },
  {
    path: "/dashboard/technicalSkills",
    name: "Technical Skills",
    img: "/images/technical.svg",
  },
  {
    path: "/dashboard/education",
    name: "Education",
    img: "/images/education.svg",
  },
  {
    path: "/dashboard/contactInfo",
    name: "Contact information",
    img: "/images/contact.svg",
  },
  {
    path: "/dashboard/certification",
    name: "Certification",
    img: "/images/certification.svg",
  },
];

const DashboardSideNav = () => {
    const { pathname } = useLocation();

  return (
    <nav className="relative flex flex-col gap-12 pt-10 pb-18 bg-[#ffffff] border-r-2 border-[#dedede] w-24 md:w-72 xl:w-64">
      <img
        className="absolute hidden md:block xl:block top-3 right-3 w-5"
        src={list}
        alt="list"
      />
      <img
        className="absolute top-3 md:hidden xl:hidden right-3 w-5"
        src={listmobile}
        alt="list"
      />
      <div className="flex flex-col gap-5">
        {Links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={`${
              pathname === link.path
                ? "bg-[#EB575733] font-semibold text-dark py-3"
                : "hover:bg-[#EB575733] font-medium text-primary"
            } flex gap-3 items-center py-3 px-10`}
          >
            <img className="" src={link.img} alt={link.name} />
            <p className="hidden md:block xl:block text-sm capitalize">
              {link.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col px-5">
        <p className="text-[#404653E5] font-semibold text-sm">Progress</p>
        <div className="flex gap-5 items-center">
          <div className="bg-[#E4E7EB] h-3 w-36 rounded-lg">
            <p className="bg-secondary w-5 h-3 rounded-l-lg"></p>
          </div>
          <p className="text-[#969696] text-sm font-medium">10%</p>
        </div>
      </div>
    </nav>
  );
};

export default DashboardSideNav;
