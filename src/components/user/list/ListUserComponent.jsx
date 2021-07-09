import React, {useEffect, useState} from 'react';
import './ListUser.css';

function ListUserComponent(props){

    const[users,setUsers] =useState([]);
    const[message,setMessage] = useState();

    useEffect(() => {
        loadUserData();
      }, []);


    const loadUserData = async () => {
        const response = await fetch('/users');
        const body = await response.json();
        setUsers(body);
    }

    const addUser = () => {
        window.localStorage.removeItem("userId");
        props.history.push('/add-user');
    }

    const editUser = (id) => {
        window.localStorage.setItem("userId", id);
        props.history.push('/edit-user');
    }

    const deleteUser = (id) => {
        console.log("Deleting the Id ::: >> " + id);
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch('/users/'+id, requestOptions)
        .then(res => {
        setMessage('User Deleted successfully.')
        setUsers(users.filter(user => user.id !== id));
        })
        props.history.push('/users');   
    }
    return(
        <div>
            <h2>User Details</h2>
            <button onClick={ () => addUser()} >Add User</button> 
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
                                    <button onClick={() => editUser(user.id)}> Edit</button>
                                    <button  onClick={() => deleteUser(user.id)}> Delete</button>
                                    </td>
                                </tr>
                        )
                        }
                    
                </tbody>
            </table>
        </div>
    );

}
   
export default ListUserComponent;
