import shortid from 'shortid';

const ids = [];
const pages = {};

const home = {
  id: shortid.generate(),
  url: '/',
  components: [],
};

const books = {
  id: shortid.generate(),
  url: '/books',
  components: [
    {
      type: 'bookList',
    },
  ],
};

const authors = {
  id: shortid.generate(),
  url: '/authors',
  components: [
    {
      type: 'authorList',
    },
  ],
};

ids.push(home.id);
ids.push(books.id);
ids.push(authors.id);
pages[home.id] = home;
pages[books.id] = books;
pages[authors.id] = authors;

export const get = id => pages[id];

export const list = () => ids.map(id => pages[id]);
