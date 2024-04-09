import { useContext } from "react";
import { ProgressContext } from "../../context/ProgressContext";
import { useNavigate } from "react-router-dom";


const ContactInfo = () => {
  const navigate = useNavigate();
  const {goToNextSection} = useContext(ProgressContext);

  const nextPage = () => {
    navigate("/dashboard/certification");
    goToNextSection();
  };

  return (
    <>
      <form className="flex flex-col gap-10 pt-10 bg-[#E4E7EB]" action="">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="phone number" className="text-[#404653E5] text-sm">
              Phone Number
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="+234 81******"
              type="text"
              name="phone"
              id="phone"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="linkedin profile link"
              className="text-[#404653E5] text-sm"
            >
              Linkedin Profile Link
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g https/johndoe"
              type="url"
              name="linkedin"
              id="linkedin"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="github profile link"
              className="text-[#404653E5] text-sm"
            >
              GitHub Profile Link
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g https/johndoe"
              type="url"
              name="github"
              id="github"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="portfolio link"
              className="text-[#404653E5] text-sm"
            >
              Portfolio Link
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g https/johndoe"
              type="url"
              name="portfolio"
              id="portfolio"
            />
          </div>
        </div>
        <input
          className="bg-secondary py-2 text-white rounded-sm cursor-pointer font-semibold"
          type="submit"
          value="Next"
          onClick={nextPage}
        />
      </form>
    </>
  );
};

export default ContactInfo;
