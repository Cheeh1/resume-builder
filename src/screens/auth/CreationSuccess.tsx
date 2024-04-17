import success from "../../assets/icons/success.svg";
import { useNavigate } from "react-router-dom";

const CreationSuccess = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f6f4f4] h-screen flex justify-center px-5 xl:px-0">
      <div className="flex flex-col gap-5 pt-40">
        <img
          className="bg-[#CBF4CF] rounded-full w-40 ml-20"
          src={success}
          alt="success"
        />
        <p className="text-[#666666] text-center xl:text-left tracking-widest">
          Your account has been created successfully
        </p>

        <button
          onClick={() => navigate("/auth")}
          className="w-full border rounded-md py-3 text-white bg-secondary font-medium"
        >
          Done
        </button>
      </div>
    </section>
  );
};

export default CreationSuccess;
