import { useNavigate } from "react-router-dom";
import add from "../../assets/icons/add.svg"
const Certification = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/completed");
  };

  return (
    <>
      <form className="flex flex-col gap-7 pt-10 bg-[#E4E7EB]" action="">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="Certification" className="text-[#404653E5] text-sm">
              Certification #1
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g Frontend development certficate"
              type="text"
              name="skill1"
              id="skill1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="certification" className="text-[#404653E5] text-sm">
              Certification #2
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g Certificate of Design"
              type="text"
              name="skill2"
              id="skill2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skill 3" className="text-[#404653E5] text-sm">
              Certification #3
            </label>
            <input
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g Certificate of Engineering"
              type="text"
              name="skill3"
              id="skill3"
            />
          </div>
          <div className="flex gap-2 cursor-pointer">
            <img className="w-4" src={add} alt="add" />
            <p className="text-sm text-primary">Add Certification / License</p>
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

export default Certification;
