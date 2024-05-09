

export function BookPreview({ book }) {
  return <article className="book-preview">
    <h3>{book.title}</h3>
    <p>Author:{book.authors}</p>
    <p>Published Date:{book.publishedDate}</p>


    <p>{book.listPrice.amount}</p>
    <p>Currency:{book.listPrice.currencyCode}</p>
    <img src={book.thumbnail} alt="book-img" />
    <p>Description:{book.description}</p>
  </article>
}