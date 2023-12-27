import { Outlet } from "react-router-dom";
import Resume from "../../components/Resume";
import DashboardTopNav from "../../components/DashboardTopNav";
import DashboardSideNav from "../../components/DashboardSideNav";

const Layout = () => {
  return (
    <main className="flex flex-col bg-[#E4E7EB] h-screen">
      <DashboardTopNav />

      <section className="flex gap-5 md:gap-10 xl:gap-5">
        <DashboardSideNav />

        <Outlet />

        <div className="hidden xl:block overflow-y-auto max-h-[32.5rem]">
          <Resume />
        </div>
      </section>
    </main>
  );
};

export default Layout;
