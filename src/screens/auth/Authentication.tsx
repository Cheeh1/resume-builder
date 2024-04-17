import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
// import back from "../../assets/icons/authback.svg";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState<"register" | "login">("register");

  const handleTabClick = (tab: "register" | "login") => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="">
        {/* <img className="mt-5 ml-5 cursor-pointer" src={back} alt="back" /> */}
        <div className="flex flex-col gap-1 pt-8 px-8 xl:px-24">
          <div className="flex gap-48 xl:gap-80">
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
              className={`py-1 rounded-l-sm px-20 xl:px-28 ${
                activeTab === "register" ? "bg-secondary" : "bg-[#D9D9D9]"
              }`}
            ></p>
            <p
              className={`py-1 px-20 xl:px-28 rounded-r-sm ${
                activeTab === "login" ? "bg-secondary" : "bg-[#D9D9D9]"
              }`}
            ></p>
          </div>
        </div>

        <div className="">{activeTab === "register" && <Register />}</div>

        <div className="">{activeTab === "login" && <Login />}</div>
      </section>
    </>
  );
};

export default Authentication;
