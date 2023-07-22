import React, { useState } from "react";
import Usestate from "../Usestate";

const Multiple_inputs = () => {
  //   const [name, setname] = useState("");
  //   const [email, setemail] = useState("");
  //   const [age, setage] = useState("");
  const [person, setperson] = useState({ name: "", email: "", age: "" });
  const [people, setpeople] = useState([]);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setperson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newperson = { ...person };
      setpeople([...people, newperson]);
      setperson({ name: "", email: "", age: "" });
    } else {
      return "empty values";
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handlechange}
            ></input>
            <label>Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handlechange}
            ></input>
            <label>Age: </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handlechange}
            ></input>
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person, index) => {
          const { id, name, email, age } = person;
          return (
            <div key={index} className="item">
              <h4>{name}</h4>
              <h4>{age}</h4>
              <h4>{email}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Multiple_inputs;
