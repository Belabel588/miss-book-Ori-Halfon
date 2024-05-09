import { LongText } from "./LongText.jsx"

export function BookPreview({ book }) {
  const { listPrice } = book

  return <article className="book-preview">
    <h3>{book.title}</h3>
    <p>Author:{book.authors}</p>
    <p>Published Date:{book.publishedDate}</p>


    <p>Price{book.listPrice.amount}</p>
    <p>Currency:{book.listPrice.currencyCode}</p>
    <img src={book.thumbnail} alt="book-img" />
    <LongText txt={book.description} />
    {listPrice.isOnSale && <img className="on-sale-icon" src="../assets/booksImages/onSale.jpg" alt="" />}
  </article>
}