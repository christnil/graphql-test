import shortid from 'shortid';

const ids = [];
const urls = {};

const home = {
  id: shortid.generate(),
  text: 'Home',
  url: '/',
};

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

ids.push(home.id);
ids.push(books.id);
ids.push(authors.id);
urls[home.id] = home;
urls[books.id] = books;
urls[authors.id] = authors;

export const list = () => ids.map(id => urls[id]);
