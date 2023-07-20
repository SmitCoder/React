import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";
const Useeffect_fetchdata = () => {
  const [user, setuser] = useState([]);

  const getuser = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setuser(user);
    console.log(user);
  };

  useEffect(() => {
    getuser();
  }, []);
  return (
    <>
      <h1>fetching Data</h1>

      {user.map((users) => {
        const { id, login, avatar_url, html_url } = users;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>{login}</div>
          </li>
        );
      })}
    </>
  );
};

export default Useeffect_fetchdata;
