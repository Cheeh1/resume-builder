import { Outlet, Link, useLocation } from "react-router-dom";
import Resume from "../../components/Resume";
import DashboardNav from "../../components/DashboardNav";
import list from "../../assets/icons/list.svg";

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

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <main className="flex flex-col bg-[#E4E7EB]">
      <DashboardNav />

      <section className="flex gap-5">
        <nav className="relative flex flex-col gap-20 pt-10 pb-18 bg-[#ffffff] border-r-2 border-[#dedede]">
          <img className="absolute top-3 right-3 w-5" src={list} alt="list" />
          <div className="flex flex-col gap-8">
            {Links.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className={`${
                  pathname === link.path
                    ? "bg-[#EB575733] font-semibold text-dark py-3"
                    : "hover:bg-[#EB575733] font-medium text-primary hover:w-full hover:py-3"
                } flex gap-3 items-center px-10 `}
              >
                <img className="" src={link.img} alt={link.name} />
                <p className="text-sm capitalize">{link.name}</p>
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

        <Outlet />

        <Resume />
      </section>
    </main>
  );
};

export default Layout;
