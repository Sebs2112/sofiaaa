import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    getAllResponsibilities
  } from "../actions/responsibilityActions";
  

function Responsibilities({responsibilities, getAllResponsibilities, ...props}){

    useEffect(() => {
        if (responsibilities.length === 0) {
          getAllResponsibilities();
        
        }
      });
    
    console.log(responsibilities)
    return(
        <div className="container"> Responsibilities</div>
    )
}



const mapDispatchToProps = {
    getAllResponsibilities
  };
  
  const mapStateToProps = state => {
    return {
      responsibilities: state.responsibility.responsibility
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Responsibilities);