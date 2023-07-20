import react from "react";
import ReactDOM from "react-dom";
import { books } from "./books";
import Book from "./Book";
import "./index.css";
import Usestate from "./Usestate";
import UseArray from "./UseArray";
import Useobject from "./Useobject";
import Simplecounter from "./Simplecounter";
import Useeffect_basic from "./useeffect hook/Useeffect_basic";
import Useeffect_cleanup from "./useeffect hook/Useeffect_cleanup";
import Useeffect_fetchdata from "./useeffect hook/Useeffect_fetchdata";
import Multiple_returns from "./useeffect hook/Multiple_returns";

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
<Usestate />;
<UseArray />;
<Useobject />;
<Simplecounter />;
<Useeffect_basic />;
<Useeffect_cleanup />;
<Useeffect_fetchdata />;
<Multiple_returns />;

ReactDOM.render(<Multiple_returns />, document.getElementById("root"));
