// const { useState } = React



export function BookFilter() {

  // const [filterBy, setFilterBy] = useState({ ...filterBy })


  return <section className='book-filter'>
    <h3>Filter</h3>
    <input type="text" placeholder="Search by title" />
    <input type="number" placeholder="Min price" />
  </section>
}