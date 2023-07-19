import React, { useState } from "react";
import Usestate from "./Usestate";

const Useobject = () => {
  const [person, setPerson] = useState({
    name: "smit",
    age: 12,
    message: "Currently learning react.js",
  });
  const changeevent = () => {
    setmessage("hellpo ewiorth"); //spread operator
  };
  const [name, setname] = useState("smit");
  const [age, setage] = useState(34);
  const [message, setmessage] = useState("hi there");
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{message}</h1>
      <button type="button" onClick={changeevent}>
        Change title
      </button>
    </>
  );
};

export default Useobject;
