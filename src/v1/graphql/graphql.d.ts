// GQL Declaration Files
// https://github.com/apollographql/graphql-tag/issues/59
declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export default value;
}
