import React, {Component} from 'react';

class ListUserComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            users : [],
            message : null
        }
        
    }

   async componentDidMount(){
    const response = await fetch('/users');
    const body = await response.json();
    this.setState({users: body});
    }
    

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    render(){
        const {users} = this.state;
        return(
            <div>
                <h2 className="text-center">User Details</h2>
                <button className="btn btn-danger" onClick={ () => this.addUser()} >Add User</button> 
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Age</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           
                           users && users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.age}</td>
                                        <td>{user.salary}</td>
                                        <td>
                                        <button className="btn btn-success" onClick={() => this.editUser(user.id)}> Edit</button>
                                        </td>
                                    </tr>
                            )
                            }
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListUserComponent;
