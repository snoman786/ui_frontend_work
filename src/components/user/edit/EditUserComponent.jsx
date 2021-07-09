import React, {useEffect, useState} from 'react';

function EditUserComponent(props){
    const[id,setId] =useState(['']);
    const[firstName,setFirstName] = useState(['']);
    const[lastName,setLastName]  = useState(['']);
    const[userName,setUserName] = useState(['']);
    const[age,setAge] = useState(['']);
    const[salary,setSalary] = useState(['']);
    const[message,setMessage] = useState();

    useEffect(() => {
        loadUser();
      }, []);

    const loadUser =  async ()  => {
        let response = await fetch('/users/'+window.localStorage.getItem("userId"));
        let result = await response.json();
        setId(result.id);
        setUserName(result.userName);
        setFirstName(result.firstName);
        setLastName(result.lastName);
        setAge(result.age);
        setSalary(result.salary);
    }

     const  saveUser = (e) => {
           let requestBody = {id: id , firstName: firstName , lastName: lastName , age: age , salary: salary , userName:userName};
            console.log("Hello" + requestBody);
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            };
           fetch('/users/'+id, requestOptions)
                .then(response => response.json())
                .then(data => setMessage('User Updated successfully.'));
            
             props.history.push('/users');
        }
    
        return(
            <div>
                    <h2 className="text-center">Edit User</h2>
                    <form>
    
                        <div className="form-group">
                            <label>User Name:</label>
                            <input type="text" placeholder="userName" name="userName" className="form-control" readonly="true" 
                            defaultValue={userName}/>
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
                            <input type="number" placeholder="salary" name="salary" className="form-control" value={salary} 
                            onChange = { e => setSalary(e.target.value)}/>
                        </div>
    
                        <button className="btn btn-success" onClick={saveUser}>Save</button>
                    </form>
                </div>
        );
}

export default EditUserComponent;