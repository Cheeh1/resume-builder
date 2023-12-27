import share from "../assets/icons/share.svg";
import logo from "../assets/icons/logo.svg";

const DashboardNav = () => {
  return (
    <>
      <div className="flex justify-between py-5 px-5 border-b-2 border-[#dedede]">
        <img src={logo} alt="logo" />
        <div className="flex border rounded-md border-secondary gap-2 px-2 items-center">
          <button className="text-secondary text-sm">Share</button>
          <img className="" src={share} alt="share" />
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
