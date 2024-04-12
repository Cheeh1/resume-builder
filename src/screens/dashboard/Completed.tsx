import Resume from "../../components/Resume";
import back from "../../assets/icons/back.svg";
import about from "../../assets/icons/dark-about.svg";
import download from "../../assets/icons/download.svg";
import AuthButton from "../../components/AuthButton";
import { useNavigate } from "react-router-dom";
import DashboardTopNav from "../../components/DashboardTopNav";
const Completed = () => {
  const navigate = useNavigate();

  const previousPage = () => {
    navigate("/dashboard/certification");
  };

  return (
    <>
      <main className="bg-[#F9F9F9] h-screen">
        <DashboardTopNav />

        <section className="relative flex flex-col-reverse md:flex-col gap-32 md:gap-10 xl:gap-0 xl:flex-row justify-between items-center">
          <div onClick={previousPage} className="">
            <img
              className="absolute top-28 md:top-10 xl:top-10 left-5 w-8 xl:w-5 cursor-pointer"
              src={back}
              alt="back"
            />
          </div>
          <div className="flex relative xl:px-20 flex-col gap-3">
            <h2 className="text-dark text-4xl font-semibold">
              Congratulations!
            </h2>
            <img className="absolute w-8 right-20" src={about} alt="about" />
            <p className="w-80 text-[#4E4D4D] leading-7">
              Your resume is awesome ready for download. Get it in any format of
              your choice.
            </p>
            <div className="relative">
              <AuthButton children="Download" className="w-64" />
              <img
                className="right-32 w-4 top-5 absolute"
                src={download}
                alt="download"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 pt-5 xl:pt-2">
            <div className="flex gap-64 md:justify-between xl:gap-0 xl:justify-between xl:pr-5">
              <p className="text-secondary cursor-pointer text-[12px] font-semibold">
                Preview
              </p>
              <p className="text-[#0073E6] cursor-pointer text-[12px] font-semibold">
                Edit
              </p>
            </div>

            <div className="hidden md:block xl:block overflow-y-auto max-h-[30rem]">
              <Resume />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Completed;
