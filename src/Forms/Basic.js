import React, { useState } from "react";

const Basic = () => {
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("firstname", firstname);
    console.log("email ", email);
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstname">Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <button type="submit">Add Person</button>
          </div>
        </form>
      </article>
    </>
  );
};

export default Basic;
