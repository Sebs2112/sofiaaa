import React from "react";

export default function CatDropdown(props) {
  
    console.log(props.cats)
  const dropDownCategories = props.cats.map((cat, i) => {
    return (
      <span
        className="dropdown-item-text"
        onClick={() => props.onClickCat({ cat })}
        key={i}
        value={cat.categoryName ?cat.categoryName : cat.subCategoryName}
      >
        {cat.categoryName ?cat.categoryName : cat.subCategoryName}
      </span>
    );
  });

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
      >
        {props.selectedCategory.cat
          ? props.selectedCategory.cat.categoryName
          : "Category Select"}
      </button>
      <div className="dropdown-menu">{dropDownCategories}</div>
    </div>
  );
  return <div>Hi</div>;
}
