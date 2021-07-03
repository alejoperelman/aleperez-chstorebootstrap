import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' 
import { NavBarAp } from '../components/navBarAp/NavBarAp'
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/itemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/cart/Cart'
import NotFound from '../components/notFound/NotFound'

export const Routes = () => {
    return (
        <Router>
            <main>
                <NavBarAp user="Alejandro Perez"/>
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
                <Route exact path='/cart'>
                    <Cart />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
            </main>
        </Router>
    )
}