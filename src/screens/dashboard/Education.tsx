import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProgressContext } from "../../context/ProgressContext";
import { useNavigate } from "react-router-dom";
import FormButton from "../../components/FormButton";

interface FormData {
  schoolName: string;
  schoolLocation: string;
  degree: string;
  field: string;
  entryYear: Date;
  graduationYear: Date;
}

const Education = () => {
  const navigate = useNavigate();
  const { goToNextSection } = useContext(ProgressContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const watchEntryDate = watch("entryYear");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate("/dashboard/contactInfo");
    goToNextSection(); // Update currentSection after navigating to the next section
    console.log(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-3 pt-5 bg-[#E4E7EB]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="school name" className="text-[#404653E5] text-sm">
              School Name
            </label>
            <div className="">
              <input
                {...register("schoolName", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="e.g University of Ilorin"
                type="text"
                name="schoolName"
                id="schoolName"
              />
              {errors.schoolName && (
                <p className="text-[10px] font-medium text-red-300">
                  Input school name
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="school location"
              className="text-[#404653E5] text-sm"
            >
              School Location
            </label>
            <div className="">
              <input
                {...register("schoolLocation", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="e.g Ilorin"
                type="text"
                name="schoolLocation"
                id="schoolLocation"
              />
              {errors.schoolName && (
                <p className="text-[10px] font-medium text-red-300">
                  Input school location
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="degree/program"
              className="text-[#404653E5] text-sm"
            >
              Degree/Program
            </label>
            <div className="">
              <input
                {...register("degree", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder=""
                type="text"
                name="degree"
                id="degree"
              />
              {errors.degree && (
                <p className="text-[10px] font-medium text-red-300">
                  Input degree type
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="field of study"
              className="text-[#404653E5] text-sm"
            >
              Field of Study
            </label>
            <div className="">
              <input
                {...register("field", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder=""
                type="text"
                name="field"
                id="field"
              />
              {errors.field && (
                <p className="text-[10px] font-medium text-red-300">
                  Input field of study
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="entry year" className="text-[#404653E5] text-sm">
              Entry Year
            </label>
            <div className="">
              <input
                {...register("entryYear", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                type="month"
                name="entryYear"
                id="entryYear"
              />
              {errors.entryYear && (
                <p className="text-[10px] font-medium text-red-300">
                  Input entry year
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="graduation year"
              className="text-[#404653E5] text-sm"
            >
              Graduation Year
            </label>
            <div className="">
              <input
                {...register("graduationYear", {
                  required: true,
                  validate: (value) =>
                    value >= watchEntryDate ||
                    "Date must be later than Entry date",
                })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                type="month"
                name="graduationYear"
                id="graduationYear"
              />
              {errors.graduationYear && (
                <p className="text-[10px] font-medium text-red-300">
                  Input graduation year
                </p>
              )}
            </div>
          </div>
        </div>
        <FormButton />
      </form>
    </>
  );
};

export default Education;
