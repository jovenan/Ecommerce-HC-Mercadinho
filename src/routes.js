import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cart' component={Cart} />
                <Route path='/cadastrar' exact component={Register} />
                <Route path='/login' exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}
