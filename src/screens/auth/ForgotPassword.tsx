import AuthButton from "../../components/AuthButton";


const ForgotPassword = () => {
 
  return (
    <section className="flex flex-col gap-16 pt-20">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-medium">Forgot Password</h2>
        <p className="text-[#666666] text-sm xl:text-md tracking-widest">
          Enter the email address associated with your account
        </p>
      </div>
      <form action="" className="flex flex-col px-10 xl:px-32 gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="email address" className="text-[#404653E5] text-sm">
            Email address
          </label>
          <input
            className="py-2 px-3 rounded-lg text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680] bg-white"
            placeholder="johndoe@gmail.com"
            type="text"
            name="email"
            id="email"
          />
        </div>

        <AuthButton children="Send" />
      </form>
    </section>
  );
};

export default ForgotPassword;
