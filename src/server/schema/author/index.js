import * as BookModel from '../../model/book';

export const Author = `
  type Author {
    id: ID
    name: String
    books: [Book]
  }
`;

export const CreateAuthorInput = `
  input CreateAuthorInput {
    name: String!
  }
`;

export const CreateAuthorPayload = `
  type CreateAuthorPayload {
    author: Author!
  }
`;

export const AuthorDefs = [
  Author,
  CreateAuthorInput,
  CreateAuthorPayload,
];

const AuthorResolver = {
  books: (parent, params, context) => {
    return BookModel.find({ authorId: parent.id });
  },
};

export default AuthorResolver;
