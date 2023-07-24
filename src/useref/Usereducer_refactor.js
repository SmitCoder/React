import React, { useReducer, useState } from "react";
import data from "../data";
import Usestate from "../Usestate";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
    const newPeople = [...state.people, action.payload];
    return { ...state, people: newPeople, modelcontent: "item added" };
  }
  //   if (action.type === "NOTHING");
  //   {
  //     console.log(state, action);
  //     return { ...state, modelcontent: "please enter a nsme" };
  //   }
  if (action.type === "REMOVE_ITEMS");
  {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  return new Error("no matching type");
};
const defaultstate = {
  people: [],
  modelcontent: "hello world",
};
const Userefactor_usestate = () => {
  const [name, setname] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultstate);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newpeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEMS", payload: newpeople });
      setname("");
    } else {
      dispatch({ type: "NOTHING" });
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handlesubmit}>
          <div className="form-control">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <button type="submit">Add people</button>
        </form>
        {state.people.map((users) => {
          const { id, name } = users;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEMS", payload: id })}
              >
                remove
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Userefactor_usestate;
