const { useState, useEffect } = React


import { bookService } from '../services/Books.service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from './BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'



export function BookIndex() {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

  useEffect(() => {
    bookService.query(filterBy)
      .then(books => setBooks(books))
  }, [filterBy])


  function onSetFilterBy(newFilter) {
    setFilterBy(newFilter)
  }

  function showDetails(book) {
    setSelectedBook(book)

  }


  return <section className='books-container'>
    {!selectedBook && <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />}
    {!selectedBook && <BookList books={books} onShowDetails={showDetails} />}
  </section>
}