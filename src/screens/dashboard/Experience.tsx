import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProgressContext } from "../../context/ProgressContext";

const Experience = () => {
  const navigate = useNavigate();
  const {goToNextSection} =  useContext(ProgressContext);

  const nextPage = () => {
    navigate("/dashboard/technicalSkills");
    goToNextSection();
  };

  return (
    <>
      <form className="flex flex-col gap-5 pt-5 bg-[#E4E7EB]" action="">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-[#404653E5] text-sm">
              Company
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="E.g Google"
              type="text"
              name="company"
              id="company"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="employer" className="text-[#404653E5] text-sm">
              Employer
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="Employer’s name"
              type="text"
              name="employer"
              id="employer"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-[#404653E5] text-sm">
              Role
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="E.g Software Engineer"
              type="text"
              name="role"
              id="role"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-[#404653E5] text-sm">
              Address
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="NG 1112 oreville"
              type="text"
              name="address"
              id="address"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="start date" className="text-[#404653E5] text-sm">
                Start Date
              </label>
              <input
                className="py-2 px-3 w-28 md:w-40 xl:w-36 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="MM/YY"
                type="month"
                name="start"
                id="start"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="state" className="text-primary text-sm">
                Finish Date
              </label>
              <input
                className="py-2 px-3 w-28 md:w-52 xl:w-40 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="MM/YY"
                type="month"
                name="finish"
                id="finish"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" name="" id="" />
            <p className="text-sm text-primary">Currently work here</p>
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

export default Experience;
