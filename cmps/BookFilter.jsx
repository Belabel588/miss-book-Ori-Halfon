const { useState } = React

import { bookService } from '../services/Books.service.js'

export function BookFilter() {

  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
  // console.log('filterBy:', filterBy)

  // function onTxtChange({ target }) {
  //   setFilterBy(prevFilterby => ({ ...prevFilterby, title: target.value }))
  // }
  // function onPriceChange({ target }) {
  //   setFilterBy(prevFilterby => ({ ...prevFilterby, minPrice: +target.value }))
  // }

  function handleChange() {
    const { name, type } = target
    const value = (type === 'number') ? +target.value : target.value
    setFilterBy(prevFilterby => ({ ...prevFilterby, [name]: value }))
  }

  return <section className='book-filter'>
    <h3>Filter</h3>
    <input onChange={handleChange} value={filterBy.title} name="txt" type="text" placeholder="Search by title" />
    <input onChange={handleChange} value={filterBy.minPrice} name="minPrice" type="number" placeholder="Min price" />
  </section>
}