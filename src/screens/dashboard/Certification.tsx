import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProgressContext } from "../../context/ProgressContext";
import FormButton from "../../components/FormButton";
// import add from "../../assets/icons/add.svg";
// import deleteIcon from "../../assets/icons/delete.svg";

interface FormData {
  certificationOne: string;
  certificationTwo: string;
  certificationThree: string;
}

const Certification = () => {
  const navigate = useNavigate();
  const { goToNextSection } = useContext(ProgressContext);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    navigate("/completed");
    goToNextSection();
    console.log(data);
  };

  // const [certifications, setCertifications] = useState([
  //   { id: 1, name: "" }, // initial certification field
  // ]);

  // const handleAddCertification = () => {
  //   setCertifications((prevCertifications) => [
  //     ...prevCertifications,
  //     {
  //       id: prevCertifications.length + 1,
  //       name: "",
  //     },
  //   ]);
  // };

  // const handleDeleteCertfication = (id: number) => {
  //   setCertifications((prevCertification) =>
  //     prevCertification.filter((Certification) => Certification.id !== id)
  //   );
  // };

  // const handleCertficationChange = (id: number, value: string) => {
  //   setCertifications((prevCertifications) =>
  //     prevCertifications.map((certification) =>
  //       certification.id === id
  //         ? { ...certification, name: value }
  //         : certification
  //     )
  //   );
  // };

  return (
    <>
      <form
        className="flex flex-col gap-7 pt-10 bg-[#E4E7EB]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <div className="flex flex-col gap-4">
          {certifications.map((Certification) => (
            <div key={Certification.id} className="flex flex-col gap-2">
              <label
                htmlFor={`certification - ${Certification.id}`}
                className="text-[#404653E5] text-sm"
              >
                Certification #{Certification.id}
              </label>
              <div className="relative">
                <input
                  className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                  placeholder={`e.g Certification #${Certification.id}`}
                  type="text"
                  name={`certification - ${Certification.id}`}
                  id={`certification - ${Certification.id}`}
                  value={Certification.name}
                  onChange={(e) =>
                    handleCertficationChange(Certification.id, e.target.value)
                  }
                />
                <img
                  className="absolute right-3 top-2.5 cursor-pointer w-5"
                  onClick={() => handleDeleteCertfication(Certification.id)}
                  src={deleteIcon}
                  alt="X"
                />
              </div>
            </div>
          ))}
          <div
            className="flex gap-2 cursor-pointer"
            onClick={handleAddCertification}
          >
            <img className="w-4" src={add} alt="add" />
            <p className="text-sm text-primary">Add Certification / License</p>
          </div>
        </div> */}

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="certification" className="text-[#404653E5] text-sm">
              Certification #1
            </label>
            <div className="relative">
              <input
                {...register("certificationOne", { required: true })}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="Google UX"
                type="text"
                name="certificationOne"
                id="certificationOne"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="certification" className="text-[#404653E5] text-sm">
              Certification #2
            </label>
            <div className="relative">
              <input
                {...register("certificationTwo")}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="W3schools Certificatiion"
                type="text"
                name="certificationTwo"
                id="certificationTwo"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="certification" className="text-[#404653E5] text-sm">
              Certification #3
            </label>
            <div className="relative">
              <input
                {...register("certificationThree")}
                className="py-2 px-3 w-60 md:w-96 xl:w-80 rounded-sm text-sm border-[1.5px] border-[#d2d3d5] placeholder:text-[#66666680]"
                placeholder="Coursera Certification"
                type="text"
                name="certificationThree"
                id="certificationThree"
              />
            </div>
          </div>
        </div>

        <FormButton />
      </form>
    </>
  );
};

export default Certification;
