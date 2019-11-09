import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllCategories, selectedCategoryChanged } from '../actions/categoryActions'





class SkillChoice extends Component {


    
      async componentDidMount() {
        this.props.dispatch(getAllCategories());

       
      }


      handleCategorySelection(cat){
        this.props.dispatch(selectedCategoryChanged(cat))
        
      }

      render() {
          
        console.log(this.props.selectedCategory.cat ? this.props.selectedCategory.cat: "No")
          const dropDownCategories = this.props.category.map((cat,i) => {
            return <span className ="dropdown-item-text" onClick={() =>  this.handleCategorySelection({cat})} key = {i} value ={cat.categoryName} >{cat.categoryName}</span>
          }
          )

          const dropDownSubCategories = this.props.selectedCategory.cat ? this.props.selectedCategory.cat.subCategories.map((cat,i) => {
            return <span className ="dropdown-item-text"  key = {i} value ={cat.subCategoryName} >{cat.subCategoryName}</span>
          }) : <span className ="dropdown-item-text">Choose a category</span>
          
 
        return (
           
                
            <div className="container">
         
                <div className="row">
                    <div className="column-sm-4">
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                Dropdown button
                            </button>
                            <div className="dropdown-menu">
                                {dropDownCategories}
                            </div>
                        </div>
                    </div>
                    <div className="column 4">
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                Dropdown button
                            </button>
                            <div className="dropdown-menu">
                                {dropDownSubCategories}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            
        )
      }
    }


    const mapStateToProps = state => {
        return {
            category: state.category.category,
            selectedCategory: state.category.selectedCategory
        }
    }
    
    export default connect(mapStateToProps)(SkillChoice);