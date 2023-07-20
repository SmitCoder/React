import React, { useEffect, useState } from "react";

const Useeffect_basic = () => {
  const [value, setevalue] = useState(0);
  // default runs every time after re render
  useEffect(() => {
    console.log("calling use effect");
    //conditional re rendering
    if (value >= 1) document.title = `New Messages(${value})`;
  });
  console.log("rendering component");
  return (
    <>
      <h1>{value}</h1>
      <button type="button" onClick={() => setevalue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default Useeffect_basic;
