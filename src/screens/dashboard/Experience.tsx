import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProgressContext } from "../../context/ProgressContext";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../components/FormButton";

interface FormData {
  company: string;
  employer: string;
  role: string;
  location: string;
  sdate: Date;
  fdate: Date;
  currentlyWorking: string;
}

const Experience = () => {
  const navigate = useNavigate();
  const { goToNextSection } = useContext(ProgressContext);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const watchStartDate = watch("sdate");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate("/dashboard/technicalSkills");
    goToNextSection(); // Update currentSection after navigating to the next section
    console.log(data);
  };

  const [hideFinishDate, setHideFinishDate] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHideFinishDate(event.target.checked);
    setValue("currentlyWorking", event.target.checked ? "Present" : "");
  };

  return (
    <>
      <form
        className="flex flex-col gap-5 pt-5 bg-[#E4E7EB]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-[#404653E5] text-sm">
              Company
            </label>
            <div className="">
              <input
                {...register("company", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="E.g Google"
                type="text"
                name="company"
                id="company"
              />
              {errors.company && (
                <p className="text-[10px] font-medium text-red-300">
                  Input company name
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="employer" className="text-[#404653E5] text-sm">
              Employer
            </label>
            <div className="">
              <input
                {...register("employer", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="Employer’s name"
                type="text"
                name="employer"
                id="employer"
              />
              {errors.employer && (
                <p className="text-[10px] font-medium text-red-300">
                  Input employer name
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-[#404653E5] text-sm">
              Role
            </label>
            <div className="">
              <input
                {...register("role", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="E.g Software Engineer"
                type="text"
                name="role"
                id="role"
              />
              {errors.role && (
                <p className="text-[10px] font-medium text-red-300">
                  Input role
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-[#404653E5] text-sm">
              Location
            </label>
            <div className="">
              <input
                {...register("location", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="NG oreville"
                type="text"
                name="location"
                id="location"
              />
              {errors.location && (
                <p className="text-[10px] font-medium text-red-300">
                  Input location
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="start date" className="text-[#404653E5] text-sm">
                Start Date
              </label>
              <div className="">
                <input
                  {...register("sdate", { required: true })}
                  className="py-2 px-3 w-28 md:w-40 xl:w-36 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                  placeholder="MM/YY"
                  type="month"
                  name="sdate"
                  id="sdate"
                />
                {errors.sdate && (
                  <p className="text-[10px] font-medium text-red-300">
                    Pick a date
                  </p>
                )}
              </div>
            </div>
            {!hideFinishDate && (
              <div className="flex flex-col gap-2">
                <label htmlFor="finish state" className="text-primary text-sm">
                  Finish Date
                </label>
                <div className="">
                  <input
                    {...register("fdate", {
                      required: !hideFinishDate,
                      validate: (value) =>
                        value >= watchStartDate ||
                        "Finish date must be later than start date",
                    })}
                    className="py-2 px-3 w-28 md:w-52 xl:w-40 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                    placeholder="MM/YY"
                    type="month"
                    name="fdate"
                    id="fdate"
                  />
                  {errors.fdate && (
                    <p className="text-[10px] font-medium text-red-300">
                      {errors.fdate.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-1">
            <input
              {...register("currentlyWorking")}
              type="checkbox"
              name="check"
              id="check"
              onChange={handleCheckboxChange}
            />
            <p className="text-sm text-primary">Currently work here</p>
            {errors.currentlyWorking && (
              <p className="">{errors.currentlyWorking.message}</p>
            )}
          </div>
        </div>
        <FormButton />
      </form>
    </>
  );
};

export default Experience;
