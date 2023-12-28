import Button from "../components/Button";
import profile from "../assets/icons/profile.svg";
import arrow1 from "../assets/icons/arrow-1.svg";
import arrow2 from "../assets/icons/arrow-2.svg";
import about from "../assets/icons/about.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="py-5">
      <Navbar />
      <section className="flex flex-col md:flex-row xl:flex-row gap-10 md:gap-10 xl:gap-0 justify-around items-center px-5 md:px-10 xl:px-0 pt-28 md:pt-10 xl:pt-10">
        <section className="flex flex-col gap-4 items-start">
          <h1 className="text-dark text-[40px] w-80 font-bold leading-none">
            <span className="text-secondary text-[55px]">Create</span> a career
            in tech.
          </h1>
          <p className="xl:w-96 text-primary">
            The template includes carefully structured sections for personal
            information, summary or objective, work experience, education,
            skills, projects, certifications, and more. You can easily customize
            these sections to fit your unique background.
          </p>

          <Button children="Create Resume for free" className="" />
        </section>
        <section className="flex flex-col gap-3">
          <div className="border rounded-md flex gap-5 py-5 px-8 items-start">
            <img className="w-12" src={profile} alt="profile" />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-primary font-medium">Jane Doe</p>
                <p className="text-[#404653B2] font-medium text-sm">
                  Frontend Developer
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-primary font-medium">Bio</p>
                <p className="text-[#404653B2] font-medium xl:w-96 text-sm">
                  I’m a frontend developer with 3years experience in ReactJs and
                  VueJs
                </p>
              </div>
            </div>
          </div>

          <div className="border flex flex-col rounded-md gap-5 py-5 px-8">
            <p className="text-primary font-medium capitalize">work history</p>
            <p className="text-primary font-medium w-52 text-sm">
              Cloud Engineer | Yep!, USA March 2022 - Present
            </p>
            <p className="xl:w-[30rem] text-[#404653B2] text-sm capitalize">
              I am Christian Chiemela
              <br />
              A cloud engineer, A Nigerian with the passion for creating
              stunning and user-friendly websites and applications. With 3years
              plus experience in the industry, I have honed skills in HTML, CSS,
              Javascript, as well as modern frontend frameworks such as ReactJs
              And VueJs. <br /> I began my career at Esoft response a United
              Kingdom base company where I quickly develop the interest in
              frontend development. Years later I moved to YEP! a United States
              of America base company where I am responsible for the development
              and maintenance of several high-traffic websites. <br /> I have
              the ability of turning complex design concepts into highly
              optimized and accessible user interfaces, which are up to date
              with the latest trends and technologies in the industry. I am
              always looking for ways to improve the user experience and
              performance of my projects.
            </p>
          </div>
        </section>
      </section>

      <section className="py-28 flex flex-col gap-16">
        <h2 className="text-secondary text-center font-medium text-3xl">
          Features
        </h2>

        <div className="flex flex-col md:flex-row xl:flex-row gap-72 md:gap-14 xl:gap-0 justify-between px-10 xl:px-20 items-center">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-dark font-medium text-lg">Templates</p>
              <p className="text-primary text-sm xl:w-[30rem]">
                A variety of pre-designed and customizable resume templates
                catering to different industries, roles, and design preferences.
              </p>
            </div>
            <img
              className="w-80 xl:w-[30rem]"
              src="/images/feature-img.png"
              alt="feature"
            />
            <div className="flex flex-col gap-1">
              <p className="text-dark font-medium text-lg">
                Customization Options
              </p>
              <p className="text-primary text-sm xl:w-[30rem]">
                Ability to customize templates by changing colors, layouts, and
                adding personal branding elements, drag-and-drop functionality
                to rearrange sections and content blocks.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-8">
            <img
              className="xl:w-72 md:w-64 md:bottom-48 absolute bottom-56 xl:bottom-40 xl:-left-28"
              src={arrow1}
              alt="arrow"
            />
            <div className="flex flex-col gap-2">
              <p className="text-dark font-medium text-lg">Free Cover Letter</p>
              <p className="text-primary text-sm xl:w-[30rem]">
                With each of our professionally designed resume templates,
                you'll receive a FREE cover letter template that's perfectly
                matched to your chosen resume style. Our cover letter templates
                are designed to help you:
              </p>
              <img
                className="xl:w-72 md:w-40 hidden md:block xl:block absolute md:top-40 xl:top-32 xl:-left-28"
                src={arrow2}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col md:flex-row xl:flex-row gap-20 md:gap-10 xl:gap-0 px-10 justify-between xl:px-20">
        <div className="z-10 flex flex-col gap-5 xl:gap-2">
          <h2 className="font-medium text-dark text-4xl w-80 leading-10">
            Join the ceVBuilder family
          </h2>
          <p className="xl:w-96 md:w-80 text-primary text-sm">
            We're thrilled to welcome you to the ceVBuilder family, where your
            journey to crafting exceptional resumes begins!
          </p>
          <Button children="Join ceVBuilder" className="w-40" />
        </div>
        <div className="z-10">
          <img
            className="w-96 h-60"
            src="/images/join-img.png"
            alt="join-img"
          />
        </div>
        <img
          className="absolute right-12 md:left-5 w-80 xl:left-6 top-32 xl:top-20 h-28 md:h-36 xl:h-56"
          src="/images/transparent.png"
          alt="transparent"
        />
      </section>

      <section className="relative py-20 md:pt-36 xl:py-40 flex flex-col px-10 xl:pl-28 gap-5">
        <h2 className="text-secondary font-medium text-3xl">
          About ceVBuilder
        </h2>
        <p className="xl:w-[39rem] text-primary text-sm">
          Are you ready to take your career journey to the next level? Look no
          further than our state-of-the-art Resume Builder application! We
          understand that crafting a compelling resume is your ticket to landing
          your dream job, and our platform is designed to empower you in this
          endeavor.
        </p>
        <img
          className="absolute w-10 md:left-64 right-20 xl:left-80"
          src={about}
          alt="about"
        />
      </section>
      <Footer />
    </main>
  );
};
export default Home;
