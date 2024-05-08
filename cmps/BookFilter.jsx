const { useState, useEffect } = React



export function BookFilter({ filterBy, onSetFilterBy }) {

  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const { name, type } = target
    const value = (type === 'number') ? +target.value : target.value
    setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
  }

  return <section className='book-filter'>
    <h3>Filter</h3>
    <input onChange={handleChange} value={filterByToEdit.title} name="title" type="text" placeholder="Search by title" />
    <input onChange={handleChange} value={filterByToEdit.minPrice} name="minPrice" type="number" placeholder="Min price" />
  </section>
}