import React, { useState } from "react";

const Short_circuit = () => {
  const [text, settext] = useState("");
  const firstvalue = text || "hello world";
  const sv = text && "hello karan";
  return (
    <>
      <div className="container">
        {/* <h1>{firstvalue}</h1> */}
        {/* <h2>value: {sv}</h2> */}
        {text || <h1>"mari value"</h1>}
        {!text && <h1>"tari value"</h1>}
      </div>
    </>
  );
};

export default Short_circuit;
