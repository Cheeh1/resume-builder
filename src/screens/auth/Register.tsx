import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import AuthButton from "../../components/AuthButton";
import github from "../../assets/icons/github.svg";
import eye from "../../assets/icons/Eye.svg";
import eyeClosed from "../../assets/icons/eye closed.svg";
import google from "../../assets/icons/google.svg";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
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
    navigate("/dashboard");
    console.log(data);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };
  return (
    <div className="flex flex-col gap-10 pt-9 px-10 xl:px-24">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="email address" className="text-[#404653E5] text-sm">
            Email address
          </label>
          <div className="">
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Invalid email address",
                },
              })}
              className="py-2 px-3 w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
              placeholder="johndoe@gmail.com"
              type="text"
              name="email"
              id="email"
            />
            {errors.email && (
              <p className="text-red-300 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

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

        <AuthButton children="Create account" />
      </form>

      <div className="flex flex-col gap-3">
        <div className="relative">
          <button className="border rounded border-[#D0D0D0] font-medium w-full py-2">
            Sign up with Google
          </button>
          <img
            className="absolute bottom-2 left-12 xl:left-28"
            src={google}
            alt="google"
          />
        </div>

        <div className="relative">
          <button className="border rounded border-[#D0D0D0] font-medium w-full py-2">
            Sign up with Github
          </button>
          <img
            className="absolute bottom-2 xl:left-28 left-12"
            src={github}
            alt="google"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
