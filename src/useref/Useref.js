import React, { useEffect, useRef } from "react";
//perserves a values
//doent trigger re render
// DOM values/nodes
const Useref = () => {
  let refcontainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refcontainer.current);
    // refcontainer;
  };
  useEffect(() => {
    refcontainer.current.focus();
  });
  const handleclick = () => {
    refcontainer.current = refcontainer.current + 1;
    console.log(refcontainer.current);
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            Name:- <input type="text" ref={refcontainer} />
          </div>
          <button type="submit">Button</button>
        </form>
      </article>
      <button type="button" onClick={handleclick}>
        Click me
      </button>
    </>
  );
};

export default Useref;
