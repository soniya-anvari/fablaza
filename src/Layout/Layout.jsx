import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopeBanner from "../Components/MainpageComponents/TopeBanner";
import { useLocation } from "react-router-dom";



function Layout({ children }) {
  const [isPanel, setPanel] = useState(false);
  const location = useLocation(); // گرفتن مسیر فعلی

  useEffect(() => {
    if (location.pathname === "/user-panel") {
      setPanel(true);
    } else {
      setPanel(false);
    }
  }, [location.pathname]); // فقط وقتی مسیر تغییر کرد، اجرا شود.
  return (
    <>
      {console.log()}
      {isPanel ?
        <div>
          {children}
        </div>
        :

        <div>
          <TopeBanner />
          <Navbar />
          {children}
          <Footer />
        </div>

      }
    </>
  );
}

export default Layout;
