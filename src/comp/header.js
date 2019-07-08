import React from 'react';
import {NavLink} from 'react-router-dom';

const Header =()=>{
    return(<div>
       <h1>expensify</h1>
       <NavLink to="/" activeClassName="isactive" exact={true}>dashboard </NavLink>
       <NavLink to="/create" activeClassName="isactive">create  </NavLink>
       

       <NavLink to="/help" activeClassName="isactive">help </NavLink>
       </div>

       

    )
}
export default Header;