import React, { useState } from "react";

const Multiple_inputs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [people, setpeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && age) {
      const person = { name: name, email: email, age: age };
      console.log(person);
      setpeople((people) => {
        return [...people, person];
      });
      setname("");
      setemail("");
      setage("");
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
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></input>
            <label>Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></input>
            <label>Age: </label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
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
