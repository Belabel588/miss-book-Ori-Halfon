const { Link } = ReactRouterDOM

import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books }) {


  return <section className="book-list">
    <ul>

      {books.map(book =>
        <li key={book.id}>
          <BookPreview book={book} />

          <Link to={`/Book/${book.id}`}><button>Details</button> </Link>
        </li>)}
    </ul>
  </section>
}
