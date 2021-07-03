import React, {Component} from 'react';
import './ListUser.css';

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

    deleteUser(id){
        console.log("Deleting the Id ::: >> " + id);
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch('/users/'+id, requestOptions)
        .then(res => {
        this.setState({ message : 'User Deleted successfully.'});
        this.setState({users: this.state.users.filter(user => user.id !== id)});
        })
        this.props.history.push('/users');   
    }

    render(){
        const {users} = this.state;
        return(
            <div>
                <h2>User Details</h2>
                <button onClick={ () => this.addUser()} >Add User</button> 
                <table>
                    <thead>
                        <tr>
                            <th className="header">Id</th>
                            <th className="header">FirstName</th>
                            <th className="header">LastName</th>
                            <th className="header">UserName</th>
                            <th className="header">Age</th>
                            <th className="header">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           
                           users && users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.salary}</td>
                                        <td className="xyz">
                                        <button onClick={() => this.editUser(user.id)}> Edit</button>
                                        <button  onClick={() => this.deleteUser(user.id)}> Delete</button>
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
