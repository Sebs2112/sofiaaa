import SkillChoice from "./SkillChoice";
import NavBar from "../presenters/MyNavBar";
import ProgressBar from "../presenters/ProgressBar"
import React from "react";

export default function SfiaFrame() {
  return (
    <div>
      <NavBar></NavBar>
      <ProgressBar></ProgressBar>
      <h1>The header</h1>
      <SkillChoice />
    </div>
  );
}
