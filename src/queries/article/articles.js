import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      content
      short_description
      category {
        id
        name
      }
      image {
        url
      }
      published_at
    }
  }
`;

export default ARTICLES_QUERY;
