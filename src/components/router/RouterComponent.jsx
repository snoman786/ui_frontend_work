import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "../user/list/ListUserComponent";
import AddUserComponent from '../user/add/AddUserComponent';
import EditUserComponent from '../user/edit/EditUserComponent';
import React from "react";
import './ReactRouter.css';

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="container">
                    <h1 style={style}>React User Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListUserComponent} />
                        <Route path="/users" component={ListUserComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
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