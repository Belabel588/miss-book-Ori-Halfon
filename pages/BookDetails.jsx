const { useParams, useNavigate } = ReactRouter
const { useEffect, useState } = React

const { Link } = ReactRouterDOM

import { LongText } from "../cmps/LongText.jsx"
import { bookService } from "../services/Books.service.js"



export function BookDetails({ }) {
  const [book, setBook] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    bookService.get(params.bookId)
      .then(book => {
        setBook(book)
        console.log(book);
        setIsLoading(false)
      })

      .catch(() => {
        alert('Book not found')
        navigate('/bookIndex')


          .finally(() => {

            setIsLoading(false)
          })
      })
  }, [params.bookId])




  if (isLoading) return <div>Loading...</div>
  const { listPrice } = book
  return <article>
    <Link to="/bookIndex"><button>x</button></Link>


    <h3>Title:{book.title}</h3>
    <p>Author:{book.authors}</p>
    <p>Published Date:{book.publishedDate}</p>
    <p>Categories:{book.categories}</p>
    <p>Language:{book.language}</p>
    <p>Page Count:{book.pageCount}</p>
    <LongText txt={book.description} />

    <p>ID:{book.id}</p>


    <p>Price:{book.listPrice.amount}</p>
    <p>Currency:{book.listPrice.currencyCode}</p>
    {listPrice.isOnSale && <img className="on-sale-icon" src="../assets/booksImages/onSale.jpg" alt="" />}
    <img src={book.thumbnail} alt="book-img" />

    <Link to={`/Book/${book.prevBookId}`}><button>Prev</button></Link>
    <Link to={`/Book/${book.nextBookId}`}><button>Next</button></Link>

  </article>

}