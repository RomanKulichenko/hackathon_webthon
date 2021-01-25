import React from 'react';
import {Route, Switch } from "react-router-dom";


const AppRouter = () => {
    return (
        <Switch>
            <Route exect path="/" render={()=> <Main />}/>
        </Switch>
    );
};

export default AppRouter;