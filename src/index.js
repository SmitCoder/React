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

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img="https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
        title="The Subtle Art of Not Giving a F*ck"
        author="Mark Manson"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsum
          optio aliquam recusandae totam corporis natus libero, ipsa veritatis
          amet.
        </p>
      </Book>

      <Book
        img="https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
        title="The Subtle Art of Not Giving a F*ck"
        author="Mark Manson"
      />
    </section>
  );
}
const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
