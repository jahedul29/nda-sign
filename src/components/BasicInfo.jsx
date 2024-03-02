import React from "react";
import { useBasicInfo } from "../Context/StatesProvider";
import content from "../Context/NDAcontent";

const BasicInfo = () => {
  const { basicInfo, setBasicInfo, setImage, setProfile } = useBasicInfo();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo({ ...basicInfo, [name]: value });
    setProfile(content(basicInfo.date, basicInfo.name));
  };
  return (
    <>
      <div className="basicinfo">
        <div className="basicinfo_header">
          <h2 className="colorh">NDA info</h2>
          <p className="text-muted">Include today's date and your name</p>
        </div>
        <div className="basicinfo_body">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="date"
                  value={basicInfo.date}
                  name="date"
                  placeholder="
          date"
                />
                <label htmlFor="date">Date</label>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="name"
                  value={basicInfo.name}
                  name="name"
                  placeholder="
          name"
                />
                <label htmlFor="name">Name</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
