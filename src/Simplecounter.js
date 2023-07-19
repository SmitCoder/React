import React, { useState } from "react";

const Simplecounter = () => {
  const [count, setcount] = useState(0);

  const complexcounter = () => {
    setTimeout(() => {
      setcount((value) => {
        return value + 1;
      });
    }, 2000);
  };
  return (
    <>
      <div>
        Simplecounter
        <h1>{count}</h1>
        <button type="button" onClick={() => setcount(count + 1)}>
          increase
        </button>
        <button type="button" onClick={() => setcount(0)}>
          reset
        </button>
        <button type="button" onClick={() => setcount(count - 1)}>
          decerease
        </button>
      </div>
      <div>
        Complex counter
        <h1>{count}</h1>
        <button type="button" onClick={complexcounter}>
          increase comple after a timeout
        </button>
      </div>
    </>
  );
};

export default Simplecounter;
