import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users/smitcoder";
const Multiple_returns = () => {
  const [loading, setisloadong] = useState(true);
  const [error, seterror] = useState(false);
  const [user, setuser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 || res.status <= 299) {
          return res.json();
        }
      })
      .then((user) => {
        const { login } = user;
        setuser(login);
        setisloadong(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (loading) {
    return (
      <>
        <h1>loading...</h1>;
      </>
    );
  }
  if (error) {
    return (
      <>
        <h1>Error...</h1>
      </>
    );
  }
  return <>{user}</>;
};

export default Multiple_returns;
