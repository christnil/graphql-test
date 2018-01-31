import { Query } from './query';
import { Mutation } from './mutation';
import { Book } from './book';
import { AuthorDefs } from './author';

export default [Mutation, Query, Book, ...AuthorDefs];
