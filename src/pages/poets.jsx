import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import ListOfAuthors from '../components/ListOfAuthors';

const SecondPage = ({ data }) => {
  const { edges } = data.allContentfulAuthor;
  return (
    <Layout>
      <SEO title="Poets" />
      <h2 className="mb-4">Poets</h2>
      <ListOfAuthors authors={edges} />
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulAuthor {
      edges {
        node {
          name
          birthPlace
        }
      }
    }
  }
`;

export default SecondPage;
