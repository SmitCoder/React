import React, { useState } from "react";
import data from "./data";
const UseArray = () => {
  const [people, setpeople] = useState(data);
  const remove = (id) => {
    const newpeople = people.filter((person) => person.id !== id);
    setpeople(newpeople);
  };

  return (
    <>
      <h1>UseArray Example</h1>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div>
            <h2>{name}</h2>
            <button type="button" onClick={() => remove(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => setpeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseArray;
