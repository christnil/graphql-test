import * as AuthorModel from '../../model/author';

export const Book = `
  type Book {
    id: ID
    title: String
    rating: Float
    year: Int
    author: Author
  }
`;

const BookResolvers = {
  author: (parent, params, context) => AuthorModel.get(parent.authorId),
};

export default BookResolvers;
