import * as AuthorModel from '../../model/author';
import * as BookModel from '../../model/book';

export const Query = `
  type Query {
    books: [Book]
    book(key: ID!): Book
    authors: [Author]
    author(key: ID!): Author
  }
`;

const QueryResolver = {
  books: (parent, params, context) => BookModel.list(),
  book: (parent, params, context) => BookModel.get(params.key),
  authors: (parent, params, context) => AuthorModel.list(),
  author: (parent, params, context) => AuthorModel.get(params.key),
};

export default QueryResolver;