import react from "react";
import ReactDOM from "react-dom";
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

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Img />
      <Title />
      <Author />
    </article>
  );
};
const Img = () => (
  <img src="https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg" />
);

const Title = () => <h3>The Subtle Art of Not Giving a F*ck</h3>;

const Author = () => <h4>Mark Manson</h4>;

ReactDOM.render(<Booklist />, document.getElementById("root"));
