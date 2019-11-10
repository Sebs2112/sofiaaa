import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllCategories, selectedCategoryChanged, selectedSubCategoryChanged, addSkillChosen, removeSkillChosen } from '../actions/categoryActions'





class SkillChoice extends Component {


    
      async componentDidMount() {
        this.props.dispatch(getAllCategories());}


      handleCategorySelection(cat){
        this.props.dispatch(selectedCategoryChanged(cat))
        this.props.dispatch(selectedSubCategoryChanged([]))
    }

      handleSubCategorySelection(subcat){
          this.props.dispatch(selectedSubCategoryChanged(subcat))
        }

        handleSkillSelection(skill){
            if(this.props.skillsChosen && !this.props.skillsChosen.includes(skill)){
                this.props.dispatch(addSkillChosen(skill))
            }
        }
        handleSkillRemove(skill){
            this.props.dispatch(removeSkillChosen(skill))
        }

      render() {
          
        console.log(this.props.selectedCategory.cat ? this.props.selectedCategory.cat: "No")
          const dropDownCategories = this.props.category.map((cat,i) => {
            return <span className ="dropdown-item-text" onClick={() =>  this.handleCategorySelection({cat})} key = {i} value ={cat.categoryName} >{cat.categoryName}</span>
          }
          )

          const dropDownSubCategories = this.props.selectedCategory.cat ? this.props.selectedCategory.cat.subCategories.map((cat,i) => {
            return <span className ="dropdown-item-text" onClick={() =>  this.handleSubCategorySelection({cat})}  key = {i} value ={cat.subCategoryName} >{cat.subCategoryName}</span>
          }) : <span className ="dropdown-item-text">Choose a category</span>
          
          const listOfSkills = this.props.selectedSubCategory.cat ? this.props.selectedSubCategory.cat.skills.map((skill,i) =>{
              return <li className="list-group-item" onClick={() =>  this.handleSkillSelection(skill.skill)}>{skill.skill}</li>
          }) : <li className="list-group-item">No skills currently </li>
          
          console.log(this.props.skillsChosen ? this.props.skillsChosen: "No")
        const listOfChosenSkills = this.props.skillsChosen ? this.props.skillsChosen.map((skill, i) => {
            return <li className="list-group-item" onClick={() =>  this.handleSkillRemove(skill)}>{skill}</li>
        })  : <li className="list-group-item">No skills currently </li>
        
        
        return (
           
                
            <div className="container">
         
                <div className="row">
                    <div className="column-sm-4">
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                {this.props.selectedCategory.cat ? this.props.selectedCategory.cat.categoryName : "Category Select"}
                            </button>
                            <div className="dropdown-menu">
                                {dropDownCategories}
                            </div>
                        </div>
                    </div>
                    <div className="column 4">
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                {this.props.selectedSubCategory.cat ? this.props.selectedSubCategory.cat.subCategoryName : "SubCategory Select"}
                            </button>
                            <div className="dropdown-menu">
                                {dropDownSubCategories}
                            </div>
                        </div>
                    </div>
                </div>
                <div className ="row">
                    <div className ="col-4"> 
                    <ul class="list-group">
                        {listOfSkills}
                    </ul>
                    </div>
                    <div className ="col-4"> 
                    <ul class="list-group">
                        {listOfChosenSkills}
                    </ul>
                    </div>
                </div>
            </div>
          
            
        )
      }
    }


    const mapStateToProps = state => {
        return {
            category: state.category.category,
            selectedCategory: state.category.selectedCategory,
            selectedSubCategory: state.category.selectedSubCategory,
            skillsChosen: state.category.skillsChosen
            
        }
    }
    
    export default connect(mapStateToProps)(SkillChoice);