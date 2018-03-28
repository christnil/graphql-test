import * as AuthorModel from '../../model/author';
import * as BookModel from '../../model/book';

export const Mutation = `
  type Mutation {
    createAuthor(input: CreateAuthorInput!): CreateAuthorPayload!
  }
`;

const MutationResolver = {
  createAuthor: (parent, params, context) => AuthorModel.create(params.input),
};

export default MutationResolver;
