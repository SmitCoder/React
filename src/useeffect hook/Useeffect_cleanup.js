import React, { useEffect, useState } from "react";

const Useeffect_cleanup = () => {
  const [size, setsize] = useState(window.innerWidth);
  const checksize = () => {
    setsize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => {
      window.removeEventListener("resize", checksize);
    };
  }, []);
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default Useeffect_cleanup;
