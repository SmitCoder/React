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
import Short_circuit from "./conditional rendering/Short_circuit";
import Show_hide from "./conditional rendering/Show_hide";
import Basic from "./Forms/Basic";
import Multiple_inputs from "./Forms/Multiple_inputs";
import Useref from "./useref/Useref";
import Userefactor_usestate from "./useref/Userefactor_usestate";

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
<Useref />;
<Userefactor_usestate />;
ReactDOM.render(<Userefactor_usestate />, document.getElementById("root"));
