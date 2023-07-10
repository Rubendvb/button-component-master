import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
