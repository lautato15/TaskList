import React from "react";
import reduxLogo from "../assets/redux.png";

const FrontPage = ({ title, icon }) => {
  return (
    <>
      <div className="bg-black py-2 rounded-2 d-flex align-items-center justify-content-center p-2">
        <h3 className="text-white me-4">{title}</h3>
        {icon}
      </div>
    </>
  );
};

export default FrontPage;
