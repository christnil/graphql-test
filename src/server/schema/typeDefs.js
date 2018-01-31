import { Query } from './query';
import { Mutation } from './mutation';
import { Book } from './book';
import { AuthorDefs } from './author';
import { NavBarDefs } from './navbar';

export default [
  Mutation,
  Query,
  Book,
  ...AuthorDefs,
  ...NavBarDefs,
];
