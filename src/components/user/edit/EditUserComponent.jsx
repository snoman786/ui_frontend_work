import React, {useEffect, useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField,Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
            color: 'springgreen',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
            color: 'springgreen',
        },
    },
}));

function EditUserComponent(props){

    const[id,setId] =useState(['']);
    const[firstName,setFirstName] = useState(['']);
    const[lastName,setLastName]  = useState(['']);
    const[userName,setUserName] = useState(['']);
    const[age,setAge] = useState(['']);
    const[salary,setSalary] = useState(['']);
    const[message,setMessage] = useState();

    const classes = useStyles();

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
                    <form className = {classes.root}>

                <TextField
                label="User Name"
                variant="filled"
                value={userName}
                disabled
                onChange={e => setUserName(e.target.value)}
            />
            <TextField
                label="First Name"
                variant="filled"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="filled"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <TextField
                label="Age"
                variant="filled"
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <TextField
                label="Salary"
                variant="filled"
                value={salary}
                onChange={e => setSalary(e.target.value)}
            />

            <Button startIcon={<SaveIcon/>} variant = "contained" color="primary" size="small" 
              onClick = {saveUser}>Add</Button>
                        
                    </form>
                </div>
        );
}

export default EditUserComponent;