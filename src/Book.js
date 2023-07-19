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
export default Book;
