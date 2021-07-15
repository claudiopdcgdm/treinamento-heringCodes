import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Repositores from './pages/Repo'
import Home from './pages/Home'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/repositores' component={Repositores} />
            </Switch>
        </BrowserRouter>
    )
}
