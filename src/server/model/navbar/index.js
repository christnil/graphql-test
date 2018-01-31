import shortid from 'shortid';

const ids = [];

const urls = {};

const books = {
  id: shortid.generate(),
  text: 'Books',
  url: '/books',
};

const authors = {
  id: shortid.generate(),
  text: 'Authors',
  url: '/authors',
};

ids.push(books.id);
ids.push(authors.id);
urls[books.id] = books;
urls[authors.id] = authors;

export const list = () => ids.map(id => urls[id]);
