export function BookList({ books }) {
  return <section>
    <h2>
      Books
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </h2>
  </section>
}