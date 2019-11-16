import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import CatDropdown from "../presenters/CatDropdown";
import {
  getAllCategories,
  selectedCategoryChanged,
  selectedSubCategoryChanged,
  addSkillChosen,
  removeSkillChosen
} from "../actions/categoryActions";

import { getAllSkills, selectedSkillChanged } from "../actions/skillActions";

function SkillChoice({
  category,
  selectedCategory,
  selectedSubCategory,
  skillsChosen,
  getAllCategories,
  getAllSkills,
  selectedCategoryChanged,
  selectedSubCategoryChanged,
  selectedSkillChanged,
  addSkillChosen,
  removeSkillChosen,
  ...props
}) {
  // In a function there is no component did mount, so this method is called if category is equal to zero, therefore at the start
  useEffect(() => {
    if (category.length === 0) {
      getAllCategories();
      getAllSkills();
    }
  });

  function handleCategorySelection(cat) {
    selectedCategoryChanged(cat);
    selectedSubCategoryChanged([]);
  }

  function handleSubCategorySelection(subcat) {
    selectedSubCategoryChanged(subcat);
  }

  function handleSkillSelection(skill) {
    selectedSkillChanged(skill);
  }

  function handleSkillSelection(skill) {
    if (skillsChosen && !skillsChosen.includes(skill)) {
      addSkillChosen(skill);
    }
  }
  function handleSkillRemove(skill) {
    removeSkillChosen(skill);
  }

  const listOfSkills = selectedSubCategory.cat ? (
    selectedSubCategory.cat.skills.map((skill, i) => {
      return (
        <li
          className="list-group-item"
          onClick={() => handleSkillSelection(skill.skill)}
        >
          {skill.skill}
        </li>
      );
    })
  ) : (
    <li className="list-group-item">No skills currently </li>
  );

  const listOfChosenSkills = skillsChosen ? (
    skillsChosen.map((skill, i) => {
      return (
        <li
          className="list-group-item sm"
          onClick={() => handleSkillRemove(skill)}
        >
          {skill}
        </li>
      );
    })
  ) : (
    <li className="list-group-item">No skills currently </li>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="column-sm-4">
          <CatDropdown
            type="cat"
            cats={category}
            onClickCat={handleCategorySelection}
            selectedCategory={selectedCategory}
          ></CatDropdown>
        </div>
        <div className="column 4">
          <CatDropdown
            type="subcat"
            cats={
              selectedCategory.cat ? selectedCategory.cat.subCategories : []
            }
            onClickCat={handleSubCategorySelection}
            selectedCategory={selectedSubCategory}
          ></CatDropdown>
        </div>
      </div>
      <div className="row">
        <div
          className="col-4"
          style={{
            backgroundColor: "#41669d",
            height: "70vh",
            overflowY: "scroll"
          }}
        >
          <ul className="list-group">{listOfSkills}</ul>
        </div>
        <div
          className="col-4"
          style={{
            backgroundColor: "#41669d",
            height: "70vh",
            overflowY: "scroll"
          }}
        >
          <ul className="list-group">{}</ul>
        </div>
        <div
          className="col-4"
          style={{
            backgroundColor: "#41669d",
            height: "70vh",
            overflowY: "scroll"
          }}
        >
          <ul className="list-group">{listOfChosenSkills}</ul>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  getAllCategories,
  selectedCategoryChanged,
  selectedSubCategoryChanged,
  addSkillChosen,
  removeSkillChosen,
  getAllSkills,
  selectedSkillChanged
};

const mapStateToProps = state => {
  return {
    category: state.category.category,
    selectedCategory: state.category.selectedCategory,
    selectedSubCategory: state.category.selectedSubCategory,
    skillsChosen: state.category.skillsChosen,
    skills: state.skills.skills,
    skillChosen: state.skills.skillChosen
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillChoice);
