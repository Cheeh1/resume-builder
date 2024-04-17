import success from "../../assets/icons/success.svg";

const ResetSuccess = () => {
  return (
    <section className="flex flex-col px-5 xl:px-40 gap-5 pt-32">
      <img className="bg-[#CBF4CF] rounded-full w-40 ml-20" src={success} alt="success" />
      <p className="text-[#666666] text-center tracking-widest">
        We emailed a link to you. Please click on the link for account
        verification
      </p>
    </section>
  );
};

export default ResetSuccess;
