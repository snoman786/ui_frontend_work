import React, { useEffect, useState } from 'react';

import Person from './Person';
import AddPerson from './AddPerson';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';


const PersonComponent = (props) => {

    const [persons, setPersons] = useState([
        { id: '1', name: 'Sayyed', age: '39' },
        { id: '2', name: 'Musab', age: '8' },
        { id: '3', name: 'Aamir', age: '34' },
        { id: '4', name: 'Affu', age: '3' }
    ]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [error, setError] = useState('');

    const [canAddPerson, setCanAddPersons] = useState(false);

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



    const nameChangeHandler = (event, id) => {

        const personIndex = persons.findIndex(p => p.id === id);
        console.log("Changing the name for id " + personIndex)
        const personToChange = { ...persons[personIndex] };
        console.log("Existing Person " + personToChange.name);
        console.log("New Person " + event.target.value);
        personToChange.name = event.target.value;
        const newPersons = [...persons];
        newPersons[personIndex] = personToChange;
        setPersons(newPersons)
    }

    const deletePerson = (id) => {
        const personIndex = persons.findIndex(p => p.id === id);
        console.log("Deleting the Person from position " + personIndex)
        const personToDelete = { ...persons[personIndex] };
        console.log("Person name who will get deleted " + personToDelete.name);
        const newPersons = [...persons];
        newPersons.splice(personIndex);
        setPersons(newPersons);
    }

    const addPerson = () => {
        console.log("Add Clicked");
        setCanAddPersons(true);

    }

    const validate = (passedPersons) => {

        for(var i = 0 ; i < passedPersons.length ; i++){
            if (id === passedPersons[i].id) {
                setError("Id Already Exists")
                return false;
            }
        }

        // passedPersons.every((person) => {
        //     console.log("Validating the form for id " + person.id);
        //     if (id === person.id) {
        //         setError("Id Already Exists")
        //         return false;
        //     }
        // })
        return true;
    }
    const savePerson = () => {
        const newPersons = [...persons];
        const isValid = validate(newPersons);
        if (isValid) {
            const personToAdd = { id: id, name: name, age: age }
            console.log("Saving Person with values" + personToAdd);

            newPersons.push(personToAdd);
            setPersons(newPersons)
            setCanAddPersons(false); //Setting falg as false so that list should appear
            // Setting the value to blank so it should not populate in next run .
            setId('');
            setName('');
            setAge('');
        }
    }

    let personsList = null;
    let addPersonButton = null;
    if (!canAddPerson) {
        addPersonButton = (<AddPerson clicked={addPerson} />)
        personsList = persons.map((person, id) => (
            <Person id={person.id} name={person.name} age={person.age} key={person.id}
                changed={nameChangeHandler} delete={deletePerson}> </Person>
        ))
    }

    let addPersonComponent = null;
    const classes = useStyles();
    if (canAddPerson) {
        addPersonComponent = (<div>
            <h2 className="text-center">Add Person</h2>
            <form className={classes.root}>
                <div style={{ color: 'red', fontSize: 20 }}>{error}</div>
                <TextField
                    label="Id"
                    variant="filled"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <TextField
                    label="Name"
                    variant="filled"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    label="Age"
                    variant="filled"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <Button startIcon={<SaveIcon />} variant="contained" color="primary" size="small"
                    onClick={savePerson}>Add</Button>

            </form>
        </div>);
    }



    return (<div>
        {addPersonButton}
        {personsList}
        {addPersonComponent}
    </div>
    );
}


export default PersonComponent;