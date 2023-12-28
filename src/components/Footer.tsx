import logo from "../assets/icons/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 md:px-10 xl:px-20 border-t pt-10">
      <div className="flex flex-col gap-20 md:gap-0 xl:gap-0 md:flex-row xl:flex-row justify-between items-center">
        <img className="w-36" src={logo} alt="logo" />
        <div className="flex gap-5 xl:gap-10">
          <div className="flex flex-col gap-5 text-sm">
            <h3 className="font-semibold">Our story</h3>
            <p className="text-primary">FAQ</p>
            <p className="text-primary">Contact</p>
            <p className="text-primary">Privacy policy</p>
            <p className="text-primary">Terms of use</p>
          </div>
          <div className="flex flex-col text-sm gap-5">
            <h3 className="font-semibold">Services</h3>
            <p className="text-primary">Build Resume</p>
            <p className="text-primary">Cover Letter</p>
            <p className="text-primary">Template</p>
          </div>
          <div className="flex flex-col text-sm gap-5">
            <h3 className="font-semibold">About us</h3>
            <p className="text-primary">Developers</p>
            <p className="text-primary">Meet our team</p>
            <p className="text-primary">Join ceVBuilder</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row xl:flex-row items-center xl:items-end gap-10 md:gap-0 xl:gap-0 justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm text-primary">Updates right to your Inbox</h3>
          <div className="flex gap-3">
            <input
              className="border rounded-md pl-2 text-sm w-56 py-2"
              placeholder="Email Address"
              type="text"
              name=""
              id=""
            />
            <button className="bg-secondary py-2 px-4 rounded-md text-white text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-8 xl:w-5" src={facebook} alt="facebook" />
          <img className="w-8 xl:w-5" src={linkedin} alt="linkedin" />
          <img className="w-8 xl:w-5" src={instagram} alt="instagram" />
          <img className="w-8 xl:w-5" src={twitter} alt="twitter" />
        </div>
      </div>

      <div className="">
        <p className="text-sm text-dark font-medium text-center">&copy; ceVBuilder 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
