import SkillChoice from "./SkillChoice";
import Responsibilities from "./Responsibilities";
import Review from "./Review";
import SkillObjectives from "./SkillObjectives";
import NavBar from "../presenters/MyNavBar";
import ProgressBar from "../presenters/ProgressBar";
import React, { Component, useEffect, useState } from "react";
function SfiaFrame() {
  const [screenNo, setScreenNo] = useState(0);

  function handleNextClick() {
    if (screenNo < 3) {
      setScreenNo(screenNo + 1);
    }
  }

  function handlePrevClick() {
    if (screenNo > 0) {
      setScreenNo(screenNo - 1);
    }
  }

  var currentPage;
  var currentTitle;
  switch (screenNo) {
    case 0:
      currentPage = <Responsibilities></Responsibilities>;
      currentTitle = "Responsibilities";
      break;
    case 1:
      currentPage = <SkillChoice> </SkillChoice>;
      currentTitle = "Skill Choice";
      break;
    case 2:
      currentPage = <SkillObjectives></SkillObjectives>;
      currentTitle = "Skill Objectives";
      break;
    case 3:
      currentPage = <Review></Review>;
      currentTitle = "Review";
      break;
  }

  return (
    <div>
      <NavBar></NavBar>
      <h1>{currentTitle}</h1>
      <div className="container p-0">
        <ProgressBar progress = {screenNo}></ProgressBar>
      </div>
      {currentPage}
      <div className="row">
        <div className="col">
          <button onClick={() => handlePrevClick()}>Prev</button>
        </div>
        <div className="col">
          <button onClick={() => handleNextClick()}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default SfiaFrame;
