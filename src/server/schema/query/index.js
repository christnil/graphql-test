import * as AuthorModel from '../../model/author';
import * as BookModel from '../../model/book';
import * as NavBarModel from '../../model/navbar';

export const Query = `
  type Query {
    books: [Book]
    book(key: ID!): Book
    authors: [Author]
    author(key: ID!): Author
    navLinks: [Link]
  }
`;

const QueryResolver = {
  books: (parent, params, context) => BookModel.list(),
  book: (parent, params, context) => BookModel.get(params.key),
  authors: (parent, params, context) => AuthorModel.list(),
  author: (parent, params, context) => AuthorModel.get(params.key),
  navLinks: (parent, params, context) => NavBarModel.list(),
};

export default QueryResolver;
