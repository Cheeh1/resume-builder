import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/AuthButton";
import google from "../../assets/icons/google.svg";
// import back from "../../assets/icons/authback.svg";
import github from "../../assets/icons/github.svg";
import eye from "../../assets/icons/Eye.svg";
import eyeClosed from "../../assets/icons/eye closed.svg";

const Register = () => {
  const [activeTab, setActiveTab] = useState<"register" | "login">("register");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleTabClick = (tab: "register" | "login") => {
    setActiveTab(tab);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  return (
    <>
      <section className="">
        {/* <img className="mt-5 ml-5 cursor-pointer" src={back} alt="back" /> */}
        <div className="flex flex-col gap-1 pt-8 px-24">
          <div className="flex gap-80">
            <p
              onClick={() => handleTabClick("register")}
              className={`relative cursor-pointer ${
                activeTab === "register"
                  ? "text-dark font-semibold"
                  : "text-dark font-semibold"
              }`}
            >
              REGISTER
            </p>

            <p
              onClick={() => handleTabClick("login")}
              className="relative cursor-pointer text-dark font-semibold"
            >
              LOGIN
            </p>
          </div>

          <div className="flex">
            <p
              className={`py-1 rounded-l-sm px-28 ${
                activeTab === "register" ? "bg-secondary" : "bg-[#D9D9D9]"
              }`}
            ></p>
            <p
              className={`py-1 px-28 rounded-r-sm ${
                activeTab === "login" ? "bg-secondary" : "bg-[#D9D9D9]"
              }`}
            ></p>
          </div>
        </div>

        <div className="">
          {activeTab === "register" && (
            <div className="flex flex-col gap-10 pt-9 px-24">
              <form action="" className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email address"
                    className="text-[#404653E5] text-sm"
                  >
                    Email address
                  </label>
                  <input
                    className="py-2 px-3 xl:w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
                    placeholder="johndoe@gmail.com"
                    type="text"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="password"
                    className="text-[#404653E5] text-sm"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="py-2 px-3 xl:w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
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
                      className="py-2 px-3 xl:w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
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
                    className="absolute bottom-2 left-28"
                    src={google}
                    alt="google"
                  />
                </div>

                <div className="relative">
                  <button className="border rounded border-[#D0D0D0] font-medium w-full py-2">
                    Sign up with Github
                  </button>
                  <img
                    className="absolute bottom-2 left-28"
                    src={github}
                    alt="google"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="">
          {activeTab === "login" && (
            <div className="flex flex-col gap-10 pt-9 px-24">
              <form action="" className="flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email address"
                      className="text-[#404653E5] text-sm"
                    >
                      Email address
                    </label>
                    <input
                      className="py-2 px-3 xl:w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
                      placeholder="johndoe@gmail.com"
                      type="text"
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="password"
                      className="text-[#404653E5] text-sm"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        className="py-2 px-3 xl:w-full rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
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
                    <button onClick={() => navigate("/auth/forgotpassword")} className="text-[12px] text-blue-500 text-right">
                      Forgotten password?
                    </button>
                  </div>
                </div>

                {/* <input
                  type="submit"
                  className="w-full border rounded py-3 text-white bg-secondary font-medium"
                  value="Login"
                /> */}

                <AuthButton children="Login" />
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Register;
