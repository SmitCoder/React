import React, { useState } from "react";

const Usestate = () => {
  const [text, settext] = useState("random title");
  const eventhandler = () => {
    if (text === "random title") {
      settext("smit here");
    } else {
      settext("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" onClick={eventhandler}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default Usestate;
