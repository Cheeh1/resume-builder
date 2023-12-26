import { useNavigate } from "react-router-dom";
const TechnicalSkills = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/dashboard/education");
  };

  return (
    <>
      <form className="flex flex-col gap-7 pt-10 bg-[#E4E7EB]" action="">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="skill 1" className="text-[#404653E5] text-sm">
              Skill 1
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="Javascript"
              type="text"
              name="skill1"
              id="skill1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skill 2" className="text-[#404653E5] text-sm">
              Skill 2
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="Python"
              type="text"
              name="skill2"
              id="skill2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skill 3" className="text-[#404653E5] text-sm">
              Skill 3
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="PHP"
              type="text"
              name="skill3"
              id="skill3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skill 4" className="text-[#404653E5] text-sm">
              Skill 4
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="UX Designer"
              type="text"
              name="skill4"
              id="skill4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skill 5" className="text-[#404653E5] text-sm">
              Skill 5
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="Sql"
              type="text"
              name="skill5"
              id="skill5"
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

export default TechnicalSkills;
