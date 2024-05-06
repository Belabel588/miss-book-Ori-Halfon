export function BookList({ books }) {
  return <section>
    <h2>
      Books
      <ul>

        {books.map(book => <li key={book.id}>{book.title}</li>)
        /* <pre>{JSON.stringify(books, null, 2)}</pre> */}
      </ul>
    </h2>
  </section>
}