import React from "react";
import logo from "./assets/nda.jpeg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const pagesWithoutNavbar = ["/signup"]

const Navbar = () => {
  const location = useLocation();

  return (
    !pagesWithoutNavbar.includes(location.pathname) ? (
      <div className="py-3 nav">
        <div className="container ">
          <div style={{borderBottom:"3px solid #ff4dd2"}} className="row py-2 justify-content-between ">
            <div
              className={`col-${
                window.innerWidth < 500 ? "12" : "4"
              } center d-flex `}
            >
              <div
                className="image"
                style={{
                  width: "3rem",
                  height: "3rem",
                }}
              >
                <img
                  className="img-fluid"
                  style={{ borderRadius: "50%", height: "100%" }}
                  src={logo}
                  alt=""
                />
              </div>
              <span className="adb color pointer fw-bolder fs-3 mx-4">
                <Link to="/">NDA sign</Link>
              </span>
            </div>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    ) : null
  );
};

export default Navbar;
