import { useNavigate } from "react-router-dom";
const PersonalData = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/dashboard/experience");
  };
  return (
    <>
      <form className="flex flex-col gap-7 pt-5 bg-[#E4E7EB]" action="">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="full name"
              className="text-[#404653E5] text-sm"
            >
              Full Name
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="John Doe"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email address"
              className="text-[#404653E5] text-sm"
            >
              Email address
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="Johndoe@gmail.com"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="profession"
              className="text-[#404653E5] text-sm"
            >
              Profession
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="E.g Software Engineer"
              type="text"
              name="profession"
              id="profession"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="address"
              className="text-[#404653E5] text-sm"
            >
              Address
            </label>
            <input
              className="py-2 px-3 w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
              placeholder="NG 1112 oreville"
              type="text"
              name="address"
              id="address"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="city"
                className="text-[#404653E5] text-sm"
              >
                City
              </label>
              <input
                className="py-2 px-3 w-36 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="Orlean"
                type="text"
                name="city"
                id="city"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="state"
                className="text-primary text-sm"
              >
                State
              </label>
              <input
                className="py-2 px-3 w-40 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="New Jersey"
                type="text"
                name="state"
                id="state"
              />
            </div>
          </div>
        </div>
        <input
          className="bg-secondary py-2 text-white rounded-sm cursor-pointer font-semibold"
          type="submit"
          value="Next"
          onClick={nextPage}
        />
      </form>
    </>
  );
};

export default PersonalData;
