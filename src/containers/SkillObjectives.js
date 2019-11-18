import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function SkillObjectives({ skillsChosen, skills, ...props }) {

const theSkills = skillsChosen ? skillsChosen.map(skill => { 
    return skills.filter(s => s.skillName === skill)
}) : []

const skillsToTable = theSkills ? theSkills.map(skill => { 

    console.log(skill[0].skillLevels.filter(lev=> lev.level === 4)[0].objectives.map(obj => {return obj.objective}))

    return ( <tr>   
                <th>{skill[0].skillName}</th>
                <td>
                    {skill[0].skillLevels.filter(lev=> lev.level === 1)[0] ? 
                    skill[0].skillLevels.filter(lev=> lev.level === 1)[0].objectives.map(obj => {return obj.objective})
                    : "No content"}
                </td>
                <td>
                    {skill[0].skillLevels.filter(lev=> lev.level === 2)[0] ? 
                    skill[0].skillLevels.filter(lev=> lev.level === 2)[0].objectives.map(obj => {return obj.objective})
                    : "No content"}
                </td>
                <td>
                    {skill[0].skillLevels.filter(lev=> lev.level === 3)[0] ? 
                    skill[0].skillLevels.filter(lev=> lev.level === 3)[0].objectives.map(obj => {return obj.objective})
                    : "No content"}
                </td>
                <td>
                    {skill[0].skillLevels.filter(lev=> lev.level === 4)[0] ? 
                    skill[0].skillLevels.filter(lev=> lev.level === 4)[0].objectives.map(obj => {return obj.objective})
                    : "No content"}
                </td>
                <td>
                    {skill[0].skillLevels.filter(lev=> lev.level === 5)[0] ? 
                    skill[0].skillLevels.filter(lev=> lev.level === 5)[0].objectives.map(obj => {return obj.objective})
                    : "No content"}
                </td>
                <td>
                    {skill[0].skillLevels.filter(lev=> lev.level === 6)[0] ? 
                    skill[0].skillLevels.filter(lev=> lev.level === 6)[0].objectives.map(obj => {return obj.objective})
                    : "No content"}
                </td>
                <td>
                    {skill[0].skillLevels.filter(lev=> lev.level === 7)[0] ? 
                    skill[0].skillLevels.filter(lev=> lev.level === 7)[0].objectives.map(obj => {return obj.objective})
                    : "No content"}
                </td>
                </tr>
                 )
}) : <tr></tr>

// console.log(theSkills[0][0])



  return <div className="container" style =  {{
    backgroundColor: "#41669d",
    overflowX: "scroll",
    minHeight: "70vh"
  }}> 
  <thead>
    <tr>
      <th scope="col">Skill</th>
      <th scope="col">Level 1</th>
      <th scope="col">Level 2</th>
      <th scope="col">Level 3</th>
      <th scope="col">Level 4</th>
      <th scope="col">Level 5</th>
      <th scope="col">Level 6</th>
      <th scope="col">Level 7</th>

    </tr>
  </thead>
  <tbody>
      {skillsToTable}
  </tbody>
  </div>;
}

const mapStateToProps = state => {
  return {
    skillsChosen: state.category.skillsChosen,
    skills: state.skills.skills
  };
};

export default connect(mapStateToProps)(SkillObjectives);
