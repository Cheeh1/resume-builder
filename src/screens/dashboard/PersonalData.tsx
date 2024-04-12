import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../../context/ProgressContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormButton from "../../components/FormButton";

interface FormData {
  name: string;
  email: string;
  profession: string;
  address: string;
  city: string;
  state: string;
}

const schema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z
    .string()
    .min(5, { message: "Email is required" })
    .email("Invalid Email Address"),
  profession: z.string().min(3, { message: "Profession is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
});

const PersonalData = () => {
  const navigate = useNavigate();
  const { goToNextSection } = useContext(ProgressContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate("/dashboard/experience");
    goToNextSection(); // Update currentSection after navigating to the next section
    console.log(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-7 pt-5 bg-[#E4E7EB]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="full name" className="text-[#404653E5] text-sm">
              Full Name
            </label>
            <div className="">
              <input
                {...register("name")}
                className="py-2 px-3 w-60 md:w-full xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="John Doe"
                type="text"
                name="name"
                id="name"
              />
              {errors.name && (
                <p className="text-[10px] font-medium text-red-300">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email address" className="text-[#404653E5] text-sm">
              Email address
            </label>
            <div className="">
              <input
                {...register("email")}
                className="py-2 px-3 w-60 md:w-full xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="Johndoe@gmail.com"
                type="text"
                name="email"
                id="email"
              />
              {errors.email && (
                <p className="text-[10px] font-medium text-red-300">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="profession" className="text-[#404653E5] text-sm">
              Profession
            </label>
            <div className="">
              <input
                {...register("profession")}
                className="py-2 px-3 w-60 md:w-full xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="E.g Software Engineer"
                type="text"
                name="profession"
                id="profession"
              />
              {errors.profession && (
                <p className="text-[10px] font-medium text-red-300">
                  {errors.profession.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-[#404653E5] text-sm">
              Address
            </label>
            <div className="">
              <input
                {...register("address")}
                className="py-2 px-3 w-60 md:w-full xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="NG 1112 oreville"
                type="text"
                name="address"
                id="address"
              />
              {errors.address && (
                <p className="text-[10px] font-medium text-red-300">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="text-[#404653E5] text-sm">
                City
              </label>
              <div className="">
                <input
                  {...register("city")}
                  className="py-2 px-3 w-28 md:w-48 xl:w-36 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                  placeholder="Orlean"
                  type="text"
                  name="city"
                  id="city"
                />
                {errors.city && (
                  <p className="text-[10px] font-medium text-red-300">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="state" className="text-primary text-sm">
                State
              </label>
              <div className="">
                <input
                  {...register("state")}
                  className="py-2 px-3 w-28 md:w-48 xl:w-40 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                  placeholder="New Jersey"
                  type="text"
                  name="state"
                  id="state"
                />
                {errors.state && (
                  <p className="text-[10px] font-medium text-red-300">
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <FormButton />
      </form>
    </>
  );
};

export default PersonalData;
