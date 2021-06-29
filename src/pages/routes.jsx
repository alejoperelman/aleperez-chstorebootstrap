import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' 
import { NavBarAp } from '../components/navBarAp/NavBarAp'
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/itemDetailContainer/ItemDetailContainer'

export const Routes = () => {
    return (
        <Router>
            <main>
                <NavBarAp />
            <Switch>
                <Route exact path='/'>
                    <ItemListContainer />
                </Route>
                <Route exact path='/category/:id'>
                    <ItemListContainer />
                </Route>
                <Route exact path='/item/:id'>
                    <ItemDetailContainer />
                </Route>
                <Route path='*'>
                    <div>
                        <h1>No exite esa ruta</h1>
                    </div>
                </Route>
            </Switch>
            </main>
        </Router>
    )
}