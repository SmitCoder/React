import React, { useEffect, useState } from "react";

const Show_hide = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className="container">
        <button className="btn" onClick={() => setshow(!show)}>
          Show/Hide
        </button>
        {show && <Item />}
      </div>
    </>
  );
};
const Item = () => {
  const [size, setsize] = useState(window.innerWidth);
  const checksize = () => {
    setsize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => {
      window.removeEventListener("resize", checksize);
    };
  });
  return (
    <>
      <div className="container">
        <h1> made by tirth</h1>
        <h2>Size: {size}</h2>
      </div>
    </>
  );
};

export default Show_hide;
