import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllUsers } from '../actions/userActions'





class UserList extends Component {


    
      async componentDidMount() {
        this.props.dispatch(getAllUsers());
      }

      render() {
        const listUs = this.props.user ? this.props.user.map((user, i) => {
            return <p key={i}>{user.name}</p>
        }) : <p>There are no users yet</p>
        console.log(this.props.user)
    
        return (
          <div className = "App-header">
              {listUs}

          </div>
        );
      }
    }


    const mapStateToProps = state => {
        return {
            user: state.user.user
        }
    }
    
    export default connect(mapStateToProps)(UserList);