import { useNavigate } from "react-router-dom";
const Education = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/dashboard/contactInfo");
  };

  return (
    <>
      <form className="flex flex-col gap-3 pt-10 bg-[#E4E7EB]" action="">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="school name" className="text-[#404653E5] text-sm">
              School Name
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g University of Ilorin"
              type="text"
              name="schoolName"
              id="schoolName"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="school location"
              className="text-[#404653E5] text-sm"
            >
              School Location
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g Ilorin"
              type="text"
              name="schoolLocation"
              id="schoolLocation"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="degree/program"
              className="text-[#404653E5] text-sm"
            >
              Degree/Program
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder=""
              type="text"
              name="degree"
              id="degree"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="field of study"
              className="text-[#404653E5] text-sm"
            >
              Field of Study
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder=""
              type="text"
              name="field"
              id="field"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="entry year" className="text-[#404653E5] text-sm">
              Entry Year
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              type="month"
              name="entry"
              id="entry"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="graduation year"
              className="text-[#404653E5] text-sm"
            >
              Graduation Year
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              type="month"
              name="graduation"
              id="graduation"
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

export default Education;
