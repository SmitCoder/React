import React, { useContext, useState } from "react";
import data from "../data";
// more components
// fix - context api, redux (for more complex cases)
const Person = React.createContext();
const Usecontext = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <Person.Provider value={{ removePerson }}>
      <section>
        <h3>prop drilling</h3>
        <List people={people} />
      </section>
    </Person.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(Person);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default Usecontext;
