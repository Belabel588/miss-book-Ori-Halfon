const { useState, useEffect } = React


import { bookService } from '../services/Books.service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from '../cmps/BookDetails.jsx'


export function BookIndex() {

  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    bookService.query()
      .then(books => setBooks(books))
  }, [])

  function showDetails(book) {
    setSelectedBook(book)

  }

  return <section className='books-container'>
    <h2>Books list</h2>
    {!selectedBook && <BookList books={books} onShowDetails={showDetails} />}
    {selectedBook && <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />}
  </section>
}