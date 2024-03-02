import React, { useEffect } from "react";
import BasicInfo from "./components/BasicInfo";
import Preview from "./components/Preview";
import { useBasicInfo } from "./Context/StatesProvider";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { currentPage, setCurrentPage, handlePrev } = useBasicInfo();
  const navigate = useNavigate();

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (!userID) {
      navigate("/");
    }
  });

  const handleNext = () => {
    if (currentPage === "basicinfo") {
      navigate("/final");
      setCurrentPage("final");
    } else if (currentPage === "final") {
      setCurrentPage("basicinfo");
    }
  };

  return (
    <>
      {/* <div className="landingpage"></div> */}
      <div
        className={`container my-2 mb-5 ${
          window.innerWidth < 500 && "position-relative"
        }`}
      >
        <div className="row d-flex home_row py-2 justify-content-between  ">
          <div className="col-lg-5 home_preview_holder col-sm-12">
            <Preview />
          </div>
          <div
            className={`col-lg-7 px-4 bg-white col-sm-12  ${
              window.innerWidth > 500 && "position-relative"
            }`}
          >
            <div className="editor">
              {currentPage === "basicinfo" && (
                <BasicInfo handleNext={handleNext} />
              )}
            </div>
            <div
              className="row d-flex navigate position-absolute my-2 mt-5 align-items-center"
              style={{ right: "4rem" }}
            >
              {currentPage === "basicinfo" && (
                <div className="col-6">
                  <Link
                    to={"/"}
                    style={{ borderRadius: "4px" }}
                    className="button text-decoration-none bgcolorful text-white px-3 shadow-btn pointer py-2"
                  >
                    Home
                  </Link>
                </div>
              )}
              {currentPage !== "basicinfo" && (
                <div className="col-6">
                  <button
                    style={{ borderRadius: "4px" }}
                    className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                    onClick={handlePrev}
                  >
                    Back
                  </button>
                </div>
              )}
              <div className="col-6">
                <button
                  style={{ borderRadius: "4px" }}
                  className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                  onClick={handleNext}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
