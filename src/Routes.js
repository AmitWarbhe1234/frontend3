import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
          {/* <Routes> */}
             <Route path="/" exact component={Home}/>
          {/* </Routes> */}
        </Switch>
        </BrowserRouter>
    );
};
 
export default Routes;