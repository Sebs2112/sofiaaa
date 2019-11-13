import React from "react";

export default function CatDropdown(props) {

  const dropDownCategories = props.cats.map((cat, i) => {
    return (
      <span
        className="dropdown-item-text"
        onClick={() => props.onClickCat({ cat })}
        key={i}
        value={cat.categoryName ? cat.categoryName : cat.subCategoryName}
      >
        {cat.categoryName ? cat.categoryName : cat.subCategoryName}
      </span>
    );
  });

  var dropDownName = "";
  if (props.type === "cat") {
    dropDownName = "Select Category";
  } else {
    dropDownName = "Select Sub-Category";
  }
  if (props.selectedCategory.cat) {
    if (props.selectedCategory.cat.categoryName) {
      dropDownName = props.selectedCategory.cat.categoryName;
    } else if (props.selectedCategory.cat.subCategoryName) {
      dropDownName = props.selectedCategory.cat.subCategoryName;
    }
  }

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
      >
        {dropDownName}
      </button>
      <div className="dropdown-menu">{dropDownCategories}</div>
    </div>
  );
  return <div>Hi</div>;
}
