import React, { useEffect } from "react";
import { useBasicInfo } from "../Context/StatesProvider";

const Preview = () => {
  const {
    profile,
    color,
  } = useBasicInfo();
  return (
    <div
      className="preview_holder bg-white p-3"
      style={{
        height: "700px",
        overflowY: "scroll",
        border: "2px solid #e5e5e5",
      }}
    >
      {/* ------Header--------- */}
      <div style={{display: "flex", justifyContent: "center", fontSize: "25px", margin:"20px 0 40px 0"}}>
        <span><b>WEBSITE DEVELOPER AGREEMENT</b></span>
      </div>
      {/* -----------Profile -------------- */}
      <div className="profile">
        <div className="" style={{ fontSize: ".8rem" }}>
          {profile}
        </div>
      </div>
      <div className="row my-2">
        <div className="col-6" style={{ fontWeight: "500" }}>
          By:
          <div
            className="lib fw-bold"
            style={{
              marginTop: "42px",
              fontSize: "1rem",
              borderBottom: `2px solid ${color}`,
              color: color,
            }}
          ></div>
        </div>
        <div className="col-6" style={{ fontWeight: "500" }}>
          By:
          <div className="lib fw-bold mt-2">
            <h3
              style={{
                fontFamily: "Ink Free",
                borderBottom: `2px solid ${color}`,
                color: color,
              }}
            >
              Nicolas Salomon
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
