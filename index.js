// const BASE_URL = 'http://localhost:3000';

// function fetchBooks() {
//    fetch(`${BASE_URL}/books`)
// .then(r => r.json())
// .then(console.log) 
// };

// function fetchBooksById(bookId) {
//     fetch(`${BASE_URL}/books/${bookId}`)
//  .then(r => r.json())
//  .then(console.log) 
//  };

// fetchBooks();
// fetchBooksById(1);

// const BASE_URL = 'http://localhost:3000';

// const newBook = {
//     "title": "FOZZY",
//     "author": "kJKKFCNBmbMnbmvDNBSMNB",
//     "genres": [
//       "LKFNV"
//     ],
//     "rating": 5.5,
//   };

//   function addBook(book) {
//      const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options)
//   .then(r => r.json())
//   .then(console.log) 
//   };

//   addBook(newBook);

// const BASE_URL = 'http://localhost:3000';

// const newBook = {
//     "title": "Flay is the sky"
// }

// function updateBooks(book, idBook) {
// const options = {
// method: 'PATCH',
// headers: {
//     'Content-Type': 'application/json',
// },
// body:JSON.stringify(book),
// }

//     fetch(`${BASE_URL}/books/${idBook}`, options)
//     .then(r => r.json())
// };

// updateBooks(newBook, 7).then(createBook);

// function createBook() {
//     console.log
// };

// const BASE_URL = 'http://localhost:3000';

// function deleteBook(idBook) {
//     const options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };

//     return fetch(`${BASE_URL}/books/${idBook}`, options)
//                 .then(r => r.json())
// };

// deleteBook(6).then(r => console.log(r))
