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
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/819ydKopYiL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
    title:
      "11 Years JEE (Main) (2013-2023) Chapterwise Topicwise Chemistry Solved Questions",
    author: "cengage india",
  },
];
//rendering array
// const names = ["smit", "karna", "dev"];
// const newname = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newname);

//rendering an array having objects

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const clickhandler = (title) => {
  console.log(title);
};
const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={() => clickhandler(title)}>
        Reference example
      </button>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
