import shortid from 'shortid';

const ids = ['38kf7uds', 'jfkrid8w'];

const authors = {
  '38kf7uds': {
    id: '38kf7uds',
    name: 'J.K. Rowling',
  },
  'jfkrid8w': {
    id: 'jfkrid8w',
    name: 'Michael Crichton',
  },
};

export const create = ({ name }) => {
  const author = {
    id: shortid.generate(),
    name,
  };
  ids.push(author.id);
  authors[author.id] = author;
  return { author };
}

export const update = (id, { name }) => {
  authors[id].name = name;
}

export const list = () => ids.map(id => authors[id]);

export const get = (id) => authors[id];

export const find = (fields) => list().filter(book => {
  let ok = true;
  Object.keys(fields).forEach(key => ok = ok && book[key] === fields[key]);
  return ok;
});
