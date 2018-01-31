const mockBooks = [
  {
    id: '3h8kf3if',
    title: 'Harry Potter and the Sorcerer\'s stone',
    rating: 3,
    year: 1947,
    authorId: '38kf7uds', // J.K. Rowling
  },
  {
    id: '4kdhg7us',
    title: 'Harry Potter and the Chamber of sectrets',
    rating: 3,
    year: 1948,
    authorId: '38kf7uds',
  },
  {
    id: '5kg9dk3y',
    title: 'Jurassic Park',
    rating: 3.5,
    year: 1960,
    authorId: 'jfkrid8w', // Michael Crichton
  },
];

export const list = () => mockBooks;

export const get = (id) => mockBooks.find(book => book.id === id);
export const find = (fields) => mockBooks.filter(book => {
  let ok = true;
  Object.keys(fields).forEach(key => ok = ok && book[key] === fields[key]);
  return ok;
});
