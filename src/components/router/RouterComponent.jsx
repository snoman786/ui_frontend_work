import { BrowserRouter as Router, Route, Switch, NavLink, HashRouter } from 'react-router-dom'
import ListUserComponent from "../user/list/ListUserComponent";
import AddUserComponent from '../user/add/AddUserComponent';
import EditUserComponent from '../user/edit/EditUserComponent';
import React from "react";
import ProductList from '../product/list/ProductList';
import PersonComponent from '../person/PersonComponent';
import classes from './RouterComponent.module.css';

import logo from  '../../image/logo.jpg';
import { red } from '@material-ui/core/colors';

const AppRouter = (props) => {
    return (
        <Router>
         <div>
            <img src={logo} className="logo" />
            <ul className="header">
            <li><NavLink exact to="/">Users</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/persons">Persons</NavLink></li>
            </ul>
            <div>
                    <div className="content">
                        <Switch>
                            <Route path="/" exact component={ListUserComponent} />
                            <Route path="/users" component={ListUserComponent} />
                            <Route path="/add-user" component={AddUserComponent} />
                            <Route path="/edit-user" component={EditUserComponent} />
                            <Route path="/products" component={ProductList} />
                            <Route path="/persons" component={PersonComponent} />
                        </Switch>
                    </div>
            </div>
            <p>This is sayyed noman registered trademark</p>
        </div>
        </Router>
    )
}

const style = {
    color: 'purple',
    margin: '10px'
}

export default AppRouter;