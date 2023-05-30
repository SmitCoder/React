import react from "react";
import ReactDOM from "react-dom";

function Message() {
  return (
    <>
      <h1>hello world</h1>
      <Nested />
    </>
  );
}

const Nested = () => {
  return <h1>This is Nested Component</h1>;
};
ReactDOM.render(<Message />, document.getElementById("root"));
