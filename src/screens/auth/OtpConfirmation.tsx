import AuthButton from "../../components/AuthButton";

const OtpConfirmation = () => {
  return (
    <section className="flex flex-col gap-16 pt-16">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-medium">Enter confirmation code</h2>
        <p className="text-[#666666] tracking-widest">
          We emailed you a code. Please input the code here for account
          verification
        </p>
      </div>

      <div className="flex px-5 gap-5 justify-center">
        <input className="py-5 border-2 w-20" type="text" name="" id="" />
        <input className="border-2 w-20 py-5" type="text" name="" id="" />
        <input className="border-2 w-20 py-5" type="text" name="" id="" />
        <input className="border-2 w-20 py-5" type="text" name="" id="" />
      </div>

      <div className="px-20">
        <AuthButton children="Continue" />
      </div>
    </section>
  );
};

export default OtpConfirmation;
