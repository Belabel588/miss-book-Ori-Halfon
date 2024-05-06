import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
}

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY)
    .then(books => {
      if (filterBy.txt) {
        const regExp = new RegExp(filterBy.txt, 'i')
        books = books.filter(book => regExp.test(book.title))
      }

      if (filterBy.minPrice) {
        books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
      }

      return books
    })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getEmptyBook(title = '', listPrice = { amount: 0 }) {
  return { title, listPrice }
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    books = []
    for (let i = 0; i < 3; i++) {
      books.push(_createBook(utilService.makeLorem(6), { amount: utilService.getRandomIntInclusive(10, 100) }))
    }
    utilService.saveToStorage(BOOK_KEY, books)
  }
}

function _createBook(title, listPrice) {
  const book = getEmptyBook(title, listPrice)
  book.id = utilService.makeId()
  return book
}