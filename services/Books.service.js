import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'


const BOOKS_KEY = 'booksDB'
_createBooks()

export const bookService = {
  query,
}


function query() {
  return storageService.query(BOOKS_KEY)
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOKS_KEY)
  if (!books || !books.length) {
    books = []
    for (let i = 0; i < 3; i++) {
      books.push(_createBook())
    }
    utilService.saveToStorage(BOOKS_KEY, books)

  }
  console.log(books)
}

function _createBook() {
  return {
    id: utilService.makeId(),
    title: utilService.makeLorem(6),
    listPrice: {
      amount: utilService.getRandomIntInclusive(10, 100),
      currencyCode: 'EUR',
      isOnSale: false
    }

  }
}