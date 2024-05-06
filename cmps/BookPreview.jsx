

export function BookPreview({ book }) {
  return <article className="book-preview">
    <h3>{book.title}</h3>
    <img src={`../assets/BooksImages/${book}.png`} alt="some book img" />
    <p>{book.listPrice}</p>
  </article>
}