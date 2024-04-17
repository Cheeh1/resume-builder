import { Outlet, useNavigate } from "react-router-dom";
import back from "../../assets/icons/authback.svg";

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex">
        <section className="xl:block hidden bg h-screen w-full">
          <div className="logo h-screen py-40"></div>
        </section>
        <div className="bg-[#f6f4f4] w-full h-screen">
          <img onClick={() => navigate(-1)} className="mt-5 ml-5 cursor-pointer" src={back} alt="back" />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
