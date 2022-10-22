import React from 'react'
import Person from './Person';

export default function PersonList(props) {

    let personsList =  props.personList.map((person, id) => (
        <Person id={person.id} name={person.name} age={person.age} key={person.id}
            changed={props.nameChangeHandler} delete={props.deletePerson}> 
        </Person>
    ));

  return (
    <div>
     {personsList}
    </div>
  )
}
