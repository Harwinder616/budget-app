import React from 'react';
import{ BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';
import create from '../comp/create';
import sagar from '../comp/sagar';
import edit from '../comp/edit';
import help from '../comp/help';
import error from '../comp/error';
import Header from '../comp/header';
import LoginPage from '../comp/login';




const Routes=()=>{

return(
    
    <BrowserRouter>
    <div>
        <Header />
    <Switch>
    <Route path="/" component={LoginPage} exact={true}/>
    <Route path="/dashboard" component={sagar} />

    <Route path="/create" component={create} />
    <Route path="/edit/:id" component={edit} />
    <Route path="/help" component={help} />
    <Route component={error} />


    </Switch>
    </div>

    
    </BrowserRouter>
)
}







export default Routes;

