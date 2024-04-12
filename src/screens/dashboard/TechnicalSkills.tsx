import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../../context/ProgressContext";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../components/FormButton";

interface FormData {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
}

const TechnicalSkills = () => {
  const navigate = useNavigate();
  const { goToNextSection } = useContext(ProgressContext);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate("/dashboard/education");
    goToNextSection(); // Update currentSection after navigating to the next section
    console.log(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-7 pt-10 bg-[#E4E7EB]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="skill 1" className="text-[#404653E5] text-sm">
              Skill 1
            </label>
            <input
              {...register("skill1", { required: true })}
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
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
              {...register("skill2", { required: true })}
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
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
              {...register("skill3", { required: true })}
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
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
              {...register("skill4")}
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
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
              {...register("skill5")}
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="Sql"
              type="text"
              name="skill5"
              id="skill5"
            />
          </div>
        </div>
        <FormButton />
      </form>
    </>
  );
};

export default TechnicalSkills;
