const { useState } = React

import { bookService } from '../services/Books.service.js'

export function BookFilter() {

  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
  // console.log('filterBy:', filterBy)

  function onTxtChange({ target }) {
    setFilterBy(prevFilterby => ({ ...prevFilterby, title: target.value }))
  }
  function onPriceChange({ target }) {
    setFilterBy(prevFilterby => ({ ...prevFilterby, minPrice: +target.value }))
  }

  return <section className='book-filter'>
    <h3>Filter</h3>
    <input onChange={onTxtChange} value={filterBy.title} type="text" placeholder="Search by title" />
    <input onChange={onPriceChange} value={filterBy.minPrice} type="number" placeholder="Min price" />
  </section>
}