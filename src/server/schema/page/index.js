export const Component = `
  type Component {
    type: ID!
    argument: ID
    childComponents: [Component!]
  }
`;

export const Page = `
  type Page {
    id: ID!
    url: String!
    components: [Component!]!
  }
`;

export const PageDefs = [
  Page,
  Component,
];

const PageResolver = {};

export default PageResolver;
