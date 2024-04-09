import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../../context/ProgressContext";
import add from "../../assets/icons/add.svg";
import deleteIcon from "../../assets/icons/delete.svg";

const Certification = () => {
  const navigate = useNavigate();
  const { goToNextSection } = useContext(ProgressContext);

  const nextPage = () => {
    navigate("/completed");
    goToNextSection();
  };

  const [certifications, setCertifications] = useState([
    { id: 1, name: "" }, // initial certification field
  ]);

  const handleAddCertification = () => {
    setCertifications((prevCertifications) => [
      ...prevCertifications,
      {
        id: prevCertifications.length + 1,
        name: "",
      },
    ]);
  };

  const handleDeleteCertfication = (id: number) => {
    setCertifications((prevCertification) =>
      prevCertification.filter((Certification) => Certification.id !== id)
    );
  };

  const handleCertficationChange = (id: number, value: string) => {
    setCertifications((prevCertifications) =>
      prevCertifications.map((certification) =>
        certification.id === id
          ? { ...certification, name: value }
          : certification
      )
    );
  };

  return (
    <>
      <form className="flex flex-col gap-7 pt-10 bg-[#E4E7EB]" action="">
        <div className="flex flex-col gap-4">
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

export default Certification;
