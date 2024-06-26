import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import AuthButton from "../../components/AuthButton";
import eye from "../../assets/icons/Eye.svg";
import eyeClosed from "../../assets/icons/eye closed.svg";
import { useNavigate } from "react-router-dom";

interface FormData {
  password: string;
  confirmPassword: string;
}

const CreatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    navigate("/auth");
    console.log(data);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };
  return (
    <section className="flex flex-col gap-16 pt-16">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-medium">Create Password</h2>
        <p className="text-[#666666] tracking-widest">
          Please create a new password
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 px-10 xl:px-24"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-[#404653E5] text-sm">
            Password
          </label>
          <div className="relative">
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="py-2 px-3 w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
              placeholder="***************"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
            />
            {errors.password && (
              <p className="text-sm text-red-300">
                Password must be at least 6 characters long
              </p>
            )}
            <div
              onClick={handleShowPassword}
              className="absolute cursor-pointer right-5 top-2 w-5"
            >
              {showPassword ? (
                <img src={eye} alt="eye-logo" />
              ) : (
                <img src={eyeClosed} alt="eye-logo" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="confirm password"
            className="text-[#404653E5] text-sm"
          >
            Confirm password
          </label>
          <div className="relative">
            <input
              {...register("confirmPassword", { required: true })}
              className="py-2 px-3 w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
              placeholder="***************"
              type={confirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
            />
            <div
              onClick={handleConfirmPassword}
              className="absolute cursor-pointer right-5 top-2 w-5"
            >
              {confirmPassword ? (
                <img src={eye} alt="eye-logo" />
              ) : (
                <img src={eyeClosed} alt="eye-logo" />
              )}
            </div>
          </div>
        </div>

        <AuthButton children="Submit" />
      </form>
    </section>
  );
};

export default CreatePassword;
