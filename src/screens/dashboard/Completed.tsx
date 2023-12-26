import Resume from "../../components/Resume";
import DashboardNav from "../../components/DashboardNav";
import back from "../../assets/icons/back.svg";
import about from "../../assets/icons/dark-about.svg";
import download from "../../assets/icons/download.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
const Completed = () => {
  const navigate = useNavigate();

  const previousPage = () => {
    navigate("/dashboard/certification");
  };

  return (
    <>
      <main className="bg-[#F9F9F9]">
        <DashboardNav />

        <section className="relative flex justify-between items-center">
          <div onClick={previousPage} className="">
            <img
              className="absolute top-5 left-5 w-5 cursor-pointer"
              src={back}
              alt="back"
            />
          </div>
          <div className="flex relative px-20 flex-col gap-3">
            <h2 className="text-dark text-4xl font-semibold">
              Congratulations!
            </h2>
            <img className="absolute w-8 right-20" src={about} alt="about" />
            <p className="w-80 text-[#4E4D4D] leading-7">
              Your resume is awesome ready for download. Get it in any format of
              your choice.
            </p>
            <div className="relative">
              <Button children="Download" className="w-56" />
              <img
                className="right-36 w-4 top-2.5 absolute"
                src={download}
                alt="download"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <div className="flex justify-between pr-5">
              <p className="text-secondary cursor-pointer text-[12px] font-medium">
                Preview
              </p>
              <p className="text-[#0073E6] cursor-pointer text-[12px] font-medium">
                Edit
              </p>
            </div>
            <Resume />
          </div>
        </section>
      </main>
    </>
  );
};

export default Completed;
