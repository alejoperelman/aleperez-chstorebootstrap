import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' 
import { Home } from './home/Home'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='*'>
                    <div>
                        <h1>No exite esa ruta</h1>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}