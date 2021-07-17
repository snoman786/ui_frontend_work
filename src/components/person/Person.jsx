import React, { useEffect, useState } from 'react';

import classes from './Person.module.css';

function Person(props){

    return(<div className = {classes.Person} onClick = {() => props.delete(props.id)}>
           <p> My Name is {props.name} and age is {props.age} </p>
           <input type="text" value={props.name} onChange={(event) => props.changed(event,props.id)}/>
           </div>
    )
}

export default Person;