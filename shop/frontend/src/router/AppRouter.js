import React from 'react';
import { Route, Switch } from "react-router-dom";


const AppRouter = () => {
    return (
        <Switch>
            <Route exect path="/" render={()=> <h1>hi</h1>}/>
        </Switch>
    );
};

export default AppRouter;