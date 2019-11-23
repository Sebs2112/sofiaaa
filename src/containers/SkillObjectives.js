import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    removeObjective,
    addObjective
  } from "../actions/objectiveActions";
  


function SkillObjectives({ skillsChosen, skills,addObjective,removeObjective,selectedObjectives, ...props }) {
  const theSkills = skillsChosen
    ? skillsChosen.map(skill => {
        return skills.filter(s => s.skillName === skill);
      })
    : [];

    console.log(selectedObjectives)
    function onObjectiveClick(obj){

        if(selectedObjectives.includes(obj)){
            removeObjective(obj)
        }else{
            addObjective(obj)
        }
    }

  function tableColumns(skill, levelNo) {
    return (
      <td>
        {skill[0].skillLevels.filter(lev => lev.level === levelNo)[0] ? (
          <ul>
            {skill[0].skillLevels
              .filter(lev => lev.level === levelNo)[0]
              .objectives.map(obj => {
                const col = !selectedObjectives.includes(obj.objective) ? 'transparent' : "#8BBEB2"
                console.log(col)
                return <li onClick={()=> onObjectiveClick(obj.objective)} style={{backgroundColor: col, borderRadius: "25px",padding: "5px"}} >{obj.objective}</li>;
              })}
          </ul>
        ) : (
          "No content"
        )}
      </td>
    );
  }

  const skillsToTable = theSkills ? (
    theSkills.map(skill => {
      return (
        <tr>
          <th>{skill[0].skillName}</th>
          {tableColumns(skill, 1)}
          {tableColumns(skill, 2)}
          {tableColumns(skill, 3)}
          {tableColumns(skill, 4)}
          {tableColumns(skill, 5)}
          {tableColumns(skill, 6)}
          {tableColumns(skill, 7)}
        </tr>
      );
    })
  ) : (
    <tr></tr>
  );

  // console.log(theSkills[0][0])

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#41669d",
        overflowX: "scroll",
        minHeight: "70vh"
      }}
    >
      <table class="table" style={{ tableLayout: "fixed", width: "2000px" }}>
        <thead>
          <tr>
            <th scope="col">Skill</th>
            <th scope="col">Level 1</th>
            <th scope="col">Level 2</th>
            <th scope="col">Level 3</th>
            <th scope="col"> Level 4</th>
            <th scope="col">Level 5</th>
            <th scope="col">Level 6</th>
            <th scope="col">Level 7</th>
          </tr>
        </thead>
        <tbody>{skillsToTable}</tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = {
    addObjective,
    removeObjective
  };

const mapStateToProps = state => {
  return {
    skillsChosen: state.category.skillsChosen,
    skills: state.skills.skills,
    selectedObjectives: state.objectives.selectedObjectives
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SkillObjectives);
