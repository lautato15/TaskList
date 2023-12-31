import React from "react";
import "./Home.css";
import reduxLogo from "../assets/redux.png";
import FrontPage from "./FrontPage";
import MotherOfLists from "./MotherOfLists";
const Home = () => {
  return (
    <>
      <FrontPage
        title={"Redux HackList"}
        icon={
          <a href="https://redux.js.org/" target="_blank">
            <img
              src={reduxLogo}
              className="logo redux img-fluid"
              alt="Vite logo"
            />
          </a>
        }
      />
      <MotherOfLists />
    </>
  );
};

export default Home;
