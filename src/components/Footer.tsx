import logo from "../assets/icons/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 px-20">
      <div className="flex justify-between">
        <img src={logo} alt="logo" />
        <div className="flex gap-10">
          <div className="flex flex-col gap-1 text-sm">
            <h3 className="font-semibold">Our story</h3>
            <p className="text-primary">FAQ</p>
            <p className="text-primary">Contact</p>
          </div>
          <div className="flex flex-col text-sm gap-1">
            <h3 className="font-semibold">Services</h3>
            <p className="text-primary">Build Resume</p>
            <p className="text-primary">Cover Letter</p>
            <p className="text-primary">Template</p>
          </div>
          <div className="flex flex-col text-sm gap-1">
            <h3 className="font-semibold">About us</h3>
            <p className="text-primary">Developers</p>
            <p className="text-primary">Meet our team</p>
            <p className="text-primary">Join ceVBuilder</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm text-primary">Updates right to your Inbox</h3>
          <div className="flex gap-3">
            <input className="border rounded-md pl-2 text-sm w-56" type="text" name="" id="" />
            <button className="bg-secondary py-1 px-4 rounded-md text-white text-sm font-semibold">Subscribe</button>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-5" src={facebook} alt="facebook" />
          <img className="w-5" src={linkedin} alt="linkedin" />
          <img className="w-5" src={instagram} alt="instagram" />
          <img className="w-5" src={twitter} alt="twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
