import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "../user/list/ListUserComponent";
import AddUserComponent from '../user/add/AddUserComponent';
import EditUserComponent from '../user/edit/EditUserComponent';
import React from "react";
import './ReactRouter.css';
import ProductList from '../product/list/ProductList';

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="container">
                    <h1 style={style}>React UI Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListUserComponent} />
                        <Route path="/users" component={ListUserComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
                        <Route path= "/products" component ={ProductList} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color: 'purple',
    margin: '10px'
}

export default AppRouter;