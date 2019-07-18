import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

export const Header =({startLogout})=>{
    return(<div>
       <h1>expensify</h1>
       <NavLink to="/" activeClassName="isactive" exact={true}>dashboard </NavLink>
       <NavLink to="/create" activeClassName="isactive">create expense </NavLink>
       <button onClick={startLogout
       }>Logout</button>       
       </div>

       

    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  });
  
  export default connect(undefined, mapDispatchToProps)(Header);
