

export function BookPreview({ book }) {
  return <article className="book-preview">
    <h3>{book.title}</h3>
    <p>{book.listPrice.amount}</p>
  </article>
}