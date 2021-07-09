import React, {useEffect, useState} from 'react';

function AddUserComponent(props){

    const[firstName,setFirstName] = useState(['']);
    const[lastName,setLastName]  = useState(['']);
    const[userName,setUserName] = useState(['']);
    const[age,setAge] = useState(['']);
    const[salary,setSalary] = useState(['']);
    const[message,setMessage] = useState();

const saveUser = (e) => {
    e.preventDefault();
    console.log("Adding the user for body :::: >>>" + 
    {userName: userName, firstName: firstName, 
        lastName: lastName, age: age, salary: salary});
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName: userName, firstName: firstName, 
            lastName: lastName, age: age, salary: salary})
    };
    fetch('/users', requestOptions)
        .then(response => response.json())
        .then(data => setMessage('User added successfully.'));
    
    }

    return(<div>
        <h2 className="text-center">Add User</h2>
        <form>
        <div className="form-group">
            <label>User Name:</label>
            <input type="text" placeholder="userName" name="userName" className="form-control" 
            value={userName} onChange = { e => setUserName(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>First Name:</label>
            <input placeholder="First Name" name="firstName" className="form-control" value={firstName} 
             onChange = { e => setFirstName(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Last Name:</label>
            <input placeholder="Last name" name="lastName" className="form-control" value={lastName} 
            onChange = { e => setLastName(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Age:</label>
            <input type="number" placeholder="age" name="age" className="form-control" value={age} 
            onChange = { e => setAge(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Salary:</label>
            <input type="number" placeholder="salary" name="salary" className="form-control" 
            value={salary} onChange = { e => setSalary(e.target.value)}/>
        </div>

        <button className="btn btn-success" onClick={saveUser}>Save</button>
    </form>
</div>);

}

export default AddUserComponent;