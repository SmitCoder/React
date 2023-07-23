import React, { useRef } from "react";

const Useref = () => {
  const refcontainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refcontainer.current.value);
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
    </>
  );
};

export default Useref;
