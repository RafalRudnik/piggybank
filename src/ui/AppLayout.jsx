import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import LoginPage from "../components/LoginPage";
import { useSelector } from "react-redux";

function AppLayout() {
  const user = useSelector((store) => store.user);

  return (
    <div className="mx-auto grid min-h-screen max-w-5xl grid-rows-[auto_1fr_auto] font-sans">
      <Header />
      <main className="mx-auto flex w-full flex-wrap justify-center gap-2 overflow-hidden rounded-t-lg bg-indigo-50 px-4 py-4 md:flex-nowrap">
        {!user.isAuthenticated ? (
          <LoginPage />
        ) : (
          <>
            <Outlet />
            <Sidebar />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
