import React, { createContext, useState, useContext } from "react";
import content from "./NDAcontent";
const BasicInfoContext = createContext();

var currentdate = new Date();
var datetime =
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear();

const StatesProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("basicinfo");
  const [color, setColor] = useState("black");
  const [textcolor, settextcolor] = useState("black");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleTextColorChange = (e) => {
    settextcolor(e.target.value);
  };
  const [basicInfo, setBasicInfo] = useState({
    date: datetime,
    name: "Robert",
  });

  const [profile, setProfile] = useState(
    content(basicInfo.date, basicInfo.name)
  );

  const handlePrev = () => {
    if (currentPage === "final") {
      navigate("/createresume");
      setCurrentPage("basicinfo");
    }
  };
  return (
    <>
      <BasicInfoContext.Provider
        value={{
          currentPage,
          setCurrentPage,
          basicInfo,
          setBasicInfo,
          handlePrev,
          profile,
          setProfile,
          color,
          setColor,
          handleTextColorChange,
          textcolor,
          handleColorChange,
        }}
      >
        {children}
      </BasicInfoContext.Provider>
    </>
  );
};
const useBasicInfo = () => {
  const context = useContext(BasicInfoContext);
  if (context === undefined) {
    throw new Error("useBasicInfo must be used within a BasicInfoProvider");
  }
  return context;
};
export { StatesProvider, useBasicInfo };
