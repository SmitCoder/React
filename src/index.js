import react from "react";
import ReactDOM from "react-dom";

//importing css file
import "./index.css";
// function Message() {
//   return (
//     <>
//       <h1>hello world</h1>
//       <Nested />
//     </>
//   );
// }
// const Nested = () => {
//   return <h1>This is Nested Component</h1>;
// };
const img =
  "https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg";
const title = "The Subtle Art of Not Giving a F*ck";
const author = "Mark Manson";
function Booklist() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="full stack" />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* {console.log(props)}; */}
      {props.job}
      {props.title}
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
