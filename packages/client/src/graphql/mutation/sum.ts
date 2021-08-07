import gql from 'graphql-tag';

export const MAKE_SUM = gql`
  mutation sum(
      $x: Int!
      $y: Int!
    ) {
      sum(
        x: $x
        y: $y
      )
  }
`;
