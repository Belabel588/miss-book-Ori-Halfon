

export function BookPreview({ book }) {
  return <article className="book-preview">
    <h3>{book.title}</h3>
    <p>{book.id}</p>
    <p>{book.listPrice}</p>
  </article>
}