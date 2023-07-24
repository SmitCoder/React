import React, { useState } from "react";
import data from "../data";
import Usestate from "../Usestate";

const Userefactor_usestate = () => {
  const [name, setname] = useState("");
  const [people, setpeople] = useState(data);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (name) {
      setpeople([
        ...people,
        { id: new Date().getTime().toString(), name: name },
      ]);
      setname("");
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
        {people.map((users) => {
          const { id, name } = users;
          return (
            <div key={id}>
              <h4>{name}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Userefactor_usestate;
