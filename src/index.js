import react from "react";
import ReactDOM from "react-dom";
import { books } from "./books";
import Book from "./Book";
import "./index.css";
import Usestate from "./Usestate";
import UseArray from "./UseArray";
import Useobject from "./Useobject";
import Userefactor_usestate from "./useref/Userefactor_usestate";
import Usereducer_refactor from "./useref/Usereducer_refactor";
import Propdrilling from "./propdrilling/Propdrilling";

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

<Userefactor_usestate />;
<Usereducer_refactor />;
<Propdrilling />;
ReactDOM.render(<Propdrilling />, document.getElementById("root"));
