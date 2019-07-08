import React from 'react';
import{ BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';
import create from '../comp/create';
import sagar from '../comp/sagar';
import edit from '../comp/edit';
import help from '../comp/help';
import error from '../comp/error';
import Header from '../comp/header';





const Routes=()=>{

return(
    
    <BrowserRouter>
    <div>
        <Header />
    <Switch>
    <Route path="/" component={sagar} exact={true}/>

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

