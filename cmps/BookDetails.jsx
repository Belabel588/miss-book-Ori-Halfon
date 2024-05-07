

export function BookDetails({ book, onClose }) {
  return <article>
    <h3>Title:{book.title}</h3>
    <h3>Price:{book.listPrice.amount}</h3>
    <h3>ID:{book.id}</h3>

    <button onClick={onClose} className='close'>X</button>
  </article>

}