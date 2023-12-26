import profile from "../assets/icons/profile.svg";
import check from "../assets/icons/check.svg";
import certLogo from "../assets/icons/cert.svg";

const Skills = [
  "Javascript",
  "Sql",
  "Python",
  "Java",
  "PHP",
  "HTML5",
  "UX Designer",
  "Ruby",
];

const Certifications = [
  "Product Design",
  "Frontend Developer",
  "Backend Developer",
];

const Resume = () => {
  return (
    <>
      <div className="relative overflow-y-auto max-h-[32.5rem]">
        <section className="flex flex-col gap-2 pt-1">
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 border-[1.5px] border-[#d2d3d5] w-[39rem] bg-white rounded-sm py-6 px-10">
              <div className="flex items-center gap-5">
                <img className="w-10" src={profile} alt="profile" />
                <div className="flex flex-col">
                  <p className="text-lg text-[#393E4DE5] font-medium">
                    Jane Doe
                  </p>
                  <p className="text-sm text-[#404553E5]">
                    +234(0)8123456789 ||{" "}
                    <span className="">johndoe@gmail.com</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#393E4DE5] text-md font-medium">Address</p>
                <p className="text-[#404553CC] text-sm">NG 112 oreville</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#393E4DE5] text-md font-medium">Bio</p>
                <p className="text-[#404553CC] text-sm w-[28rem] leading-6">
                  Explain briefly who you are and your background here in not
                  more than 3 lines. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit ut aliquam,
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 border-[1.5px] border-[#d2d3d5] bg-white py-4 w-[15rem] rounded-sm">
                <p className="text-[#393E4DE5] pl-8 font-medium">
                  Technical Skills
                </p>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-y-1 gap-x-3">
                    {Skills.map((skill, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <img src={check} alt="check" />
                        <p className="text-[#404553CC] text-[12px]">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-4 border-[1.5px] border-[#d2d3d5] bg-white py-4 w-[15rem] rounded-sm">
                <p className="text-[#393E4DE5] font-medium">Education</p>
                <p className="text-[#404653E5] font-medium text-[10px]">
                  <span className="">B.Sc</span> in{" "}
                  <span className="">Computer Science</span>
                </p>
                <p className="text-primary text-[12px] w-48">
                  National Open University of Nigeria
                </p>
                <p className="text-[#404653B2] font-medium text-[10px]">
                  <span className="">2015</span>- <span className="">2019</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 px-4 border-[1.5px] border-[#d2d3d5] bg-white py-4 w-[15rem] rounded-sm">
                <p className="text-[#393E4DE5] font-medium">Certification</p>
                <div className="flex flex-col gap-2">
                  {Certifications.map((cert, index) => (
                    <div key={index} className="flex gap-2">
                      <img className="w-3" src={certLogo} alt="logo" />
                      <p className="text-primary text-sm">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-[1.5px] border-[#d2d3d5] bg-white flex flex-col rounded-sm gap-2 py-3 px-8 w-full">
              <p className="text-[#393E4DE5] font-medium capitalize">
                work history
              </p>
              <div className="flex flex-col">
                <p className="text-[#404653E5] font-medium text-[12px]">
                  <span className="">Cloud Engineer</span> |{" "}
                  <span className="">Yep!</span>, <span className="">USA</span>{" "}
                </p>
                <p className="text-[#404653E5] font-medium text-[12px]">
                  <span className="">March 2022</span> -{" "}
                  <span className="">Present</span>
                </p>
              </div>
              <p className="w-[19rem] text-[#404653B2] text-[12px] capitalize">
                I am Christian Chiemela
                <br />
                A cloud engineer, A Nigerian with the passion for creating
                stunning and user-friendly websites and applications. With
                3years plus experience in the industry, I have honed skills in
                HTML, CSS, Javascript, as well as modern frontend frameworks
                such as ReactJs And VueJs. <br /> I began my career at Esoft
                response a United Kingdom base company where I quickly develop
                the interest in frontend development. Years later I moved to
                YEP! a United States of America base company where I am
                responsible for the development and maintenance of several
                high-traffic websites. <br /> I have the ability of turning
                complex design concepts into highly optimized and accessible
                user interfaces, which are up to date with the latest trends and
                technologies in the industry. I am always looking for ways to
                improve the user experience and performance of my projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resume;
