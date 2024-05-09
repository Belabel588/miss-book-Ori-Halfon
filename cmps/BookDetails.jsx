import { LongText } from "./LongText.jsx"

export function BookDetails({ book, onClose }) {
  const { listPrice } = book


  return <article>
    <button onClick={onClose} className='close'>X</button>


    <h3>Title:{book.title}</h3>
    <p>Author:{book.authors}</p>
    <p>Published Date:{book.publishedDate}</p>
    <p>Categories:{book.categories}</p>
    <p>Language:{book.language}</p>
    <p>Page Count:{book.pageCount}</p>
    <LongText txt={book.description} />

    <p>ID:{book.id}</p>


    <p>Price:{book.listPrice.amount}</p>
    <p>Currency:{book.listPrice.currencyCode}</p>
    {listPrice.isOnSale && <img className="on-sale-icon" src="../assets/booksImages/onSale.jpg" alt="" />}
    <img src={book.thumbnail} alt="book-img" />

  </article>

}