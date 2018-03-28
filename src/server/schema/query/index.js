import * as AuthorModel from '../../model/author';
import * as BookModel from '../../model/book';
import * as NavBarModel from '../../model/navbar';
import * as PageModel from '../../model/page';

export const Query = `
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
    navLinks: [Link]
    page(id: ID!): Page
    pages: [Page]
  }
`;

const QueryResolver = {
  books: (parent, params, context) => BookModel.list(),
  book: (parent, params, context) => BookModel.get(params.id),
  authors: (parent, params, context) => AuthorModel.list(),
  author: (parent, params, context) => AuthorModel.get(params.id),
  navLinks: (parent, params, context) => NavBarModel.list(),
  page: (parent, params, context) => PageModel.get(params.id),
  pages: (parent, params, context) => PageModel.list(),
};

export default QueryResolver;
