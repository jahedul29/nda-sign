import React, { useRef, forwardRef, useEffect  } from "react";
import { useBasicInfo } from "./Context/StatesProvider";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";

const Preview = forwardRef((props, ref) => {
  const { profile, textcolor } = useBasicInfo();

  return (
    <div ref={ref}>
      <div
        className="final px-4 py-4"
        style={{
          height: "100%",
        }}
      >
        {/* ------Header--------- */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
            margin: "20px 0 40px 0",
          }}
        >
          <span>
            <b>WEBSITE DEVELOPER AGREEMENT</b>
          </span>
        </div>

        <div className="final_profile">{profile}</div>

        <div className="row my-2">
          <div className="col-6" style={{ fontWeight: "500" }}>
            By:
            <div
              className="lib fw-bold"
              style={{
                marginTop: "42px",
                fontSize: "1rem",
                borderBottom: `2px solid black`,
              }}
            ></div>
          </div>
          <div className="col-6" style={{ fontWeight: "500" }}>
            By:
            <div className="lib fw-bold mt-2">
              <h3
                style={{
                  fontFamily: "Ink Free",
                  borderBottom: `2px solid black`,
                }}
              >
                Nicolas Salomon
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Final = () => {
  const navigate = useNavigate();
  const componentRef = useRef();
  
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (!userID) {
      navigate("/");
    }
  });

  const {
    setCurrentPage,
    handleColorChange,
    handleTextColorChange,
    color,
    setImage,
  } = useBasicInfo();

  const handleBack = () => {
    setCurrentPage("basicinfo");
    navigate("/createresume");
  };

  return (
    <>
      <div className="container final my-3">
        <h5 className="adb display-5 center color">Final Preview</h5>
        <div className="row d-flex justify-content-around final_row ">
          <div
            className="col-lg-7  col-sm-12 "
            style={{ border: "2px solid #e5e5e5" }}
          >
            <Preview ref={componentRef} />
          </div>
          {/* ---------Customize --------*/}
          <div className="col-lg-4 final_customize  position-relative">
            {/* -------Buttons--------- */}
            <div
              className="row d-flex my-2 justify-content-around my-5 position-absolute"
              style={{ right: "3rem" }}
            >
              <div className="col-5 center">
                <button
                  style={{ borderRadius: "4px" }}
                  className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
              <div className="col-5 center">
                <ReactToPrint
                  trigger={() => (
                    <button className="button bgcolorful text-white px-3 shadow-btn pointer py-2">
                      Download
                    </button>
                  )}
                  content={() => componentRef.current}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
