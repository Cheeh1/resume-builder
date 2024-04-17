import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import eye from "../../assets/icons/Eye.svg";
import eyeClosed from "../../assets/icons/eye closed.svg";
import AuthButton from "../../components/AuthButton";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
    const {
      register,
      handleSubmit
    } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate("/dashboard");
    console.log(data);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-10 pt-9 px-10 xl:px-24">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="email address" className="text-[#404653E5] text-sm">
              Email address
            </label>
            <input
              {...register("email", { required: true })}
              className="py-2 px-3 w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
              placeholder="johndoe@gmail.com"
              type="text"
              name="email"
              id="email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-[#404653E5] text-sm">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                className="py-2 px-3 w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
                placeholder="***************"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
              />
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
            <button
              onClick={() => navigate("/auth/forgotpassword")}
              className="text-[12px] text-blue-500 text-right"
            >
              Forgotten password?
            </button>
          </div>
        </div>

        <AuthButton children="Login" />
      </form>
    </div>
  );
};

export default Login;
