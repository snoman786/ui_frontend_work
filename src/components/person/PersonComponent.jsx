import React, { useEffect, useState } from "react";

import Person from "./Person";
import AddPersonButton from "./AddPersonButton";

import PersonList from "./PersonList";
import PersonAdd from "./PersonAdd";

const PersonComponent = (props) => {
  const [persons, setPersons] = useState([
    { id: "1", name: "Sayyed", age: "39" },
    { id: "2", name: "Musab", age: "8" },
    { id: "3", name: "Aamir", age: "34" },
    { id: "4", name: "Affu", age: "3" },
  ]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");

  const [canAddPerson, setCanAddPersons] = useState(false);

  const nameChangeHandler = (event, id) => {
    const personIndex = persons.findIndex((p) => p.id === id);
    console.log("Changing the name for id " + personIndex);
    const personToChange = { ...persons[personIndex] };
    console.log("Existing Person " + personToChange.name);
    console.log("New Person " + event.target.value);
    personToChange.name = event.target.value;
    const newPersons = [...persons];
    newPersons[personIndex] = personToChange;
    setPersons(newPersons);
  };

  const deletePerson = (id) => {
    console.log("Deleting for Id  " +id);
    const personIndex = persons.findIndex((p) => p.id === id);
    console.log("Deleting the Person from position " + personIndex);
    const personToDelete = { ...persons[personIndex] };
    console.log("Person name who will get deleted " + personToDelete.name);
    const newPersons = [...persons];
    newPersons.splice(personIndex,1);
    console.log("New Person Length : " + newPersons.length);
    setPersons(newPersons);
  };

  const addPerson = () => {
    console.log("Add Clicked");
    setCanAddPersons(true);
  };

  const validate = (passedPersons) => {
    for (var i = 0; i < passedPersons.length; i++) {
      if (id === passedPersons[i].id) {
        setError("Id Already Exists");
        return false;
      }
    }
    return true;
  };
  const savePerson = () => {
    const newPersons = [...persons];
    const isValid = validate(newPersons);
    if (isValid) {
      const personToAdd = { id: id, name: name, age: age };
      console.log("Saving Person with name " + personToAdd.name +  " and age " +personToAdd.age);

      newPersons.push(personToAdd);
      setPersons(newPersons);
      setCanAddPersons(false); 
      setId("");
      setName("");
      setAge("");
    }
  };

  let personsList = null;
  let addPersonButton = null;
  let addPersonComponent = null;
  if (!canAddPerson) {
    addPersonButton = <AddPersonButton clicked={addPerson} />;
    personsList = (
      <PersonList
        personList={persons}
        nameChangeHandler={nameChangeHandler}
        deletePerson={deletePerson}
      />
    );
  }

  if (canAddPerson) {
    addPersonComponent = (
      <PersonAdd
        savePerson={savePerson}
        setId={setId}
        setName={setName}
        setAge={setAge}
        id={id}
        name={name}
        age={age}
        error={error}
      />
    );
  }

  return (
    <div>
      {addPersonButton}
      {personsList}
      {addPersonComponent}
    </div>
  );
};

export default PersonComponent;
