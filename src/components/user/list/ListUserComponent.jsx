import React, {useEffect, useState} from 'react';
import { Button,ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function ListUserComponent(props){
    const classes = useStyles();

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
            <Button startIcon={<SaveIcon/>} variant = "contained" color="primary" size="small" 
              onClick = {addUser}>Add User</Button>
            
            <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.firstName}</TableCell>
              <TableCell align="right">{user.lastName}</TableCell>
              <TableCell align="right">{user.userName}</TableCell>
              <TableCell align="right">{user.age}</TableCell>
              <TableCell align="right">{user.salary}</TableCell>
              <ButtonGroup>
              <Button startIcon={<EditIcon/>} variant = "contained" color="primary" size="small" 
                   onClick = {() => editUser(user.id)}></Button>
              <Button startIcon={<DeleteIcon />} variant = "contained" color="secondary" size="small"  
              onClick = {() => deleteUser(user.id)}></Button>
              </ButtonGroup>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
        </div>
    );

}
   
export default ListUserComponent;
