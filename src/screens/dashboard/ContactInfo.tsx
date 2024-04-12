import { useContext } from "react";
import { ProgressContext } from "../../context/ProgressContext";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../components/FormButton";

interface FormData {
  phone: number;
  linkedin: string;
  github: string;
  portfolio: string;
}

const ContactInfo = () => {
  const navigate = useNavigate();
  const { goToNextSection } = useContext(ProgressContext);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate("/dashboard/certification");
    goToNextSection(); // Update currentSection after navigating to the next section
    console.log(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-10 pt-10 bg-[#E4E7EB]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="phone number" className="text-[#404653E5] text-sm">
              Phone Number
            </label>
            <input
              {...register("phone", { required: true })}
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
              {...register("linkedin")}
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
              {...register("github")}
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
              {...register("portfolio")}
              className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="e.g https/johndoe"
              type="url"
              name="portfolio"
              id="portfolio"
            />
          </div>
        </div>
        <FormButton />
      </form>
    </>
  );
};

export default ContactInfo;
