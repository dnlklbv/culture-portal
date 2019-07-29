import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import ListOfAuthors from '../components/ListOfAuthors';

const PoetsPage = ({ data }) => {
  const { edges } = data.allJavascriptFrontmatter;
  return (
    <Layout>
      <SEO title="Poets" />
      <h2 className="mb-4">Poets</h2>
      <ListOfAuthors authors={edges} />
    </Layout>
  );
};

PoetsPage.propTypes = {
  data: PropTypes.shape({
    allJavascriptFrontmatter: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          frontmatter: PropTypes.shape({
            path: PropTypes.string,
            lng: PropTypes.string,
            name: PropTypes.string,
            birthPlace: PropTypes.string,
          }),
        }),
      })),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query {
    allJavascriptFrontmatter {
      edges {
        node {
          id
          frontmatter {
            lng
            path
            birthPlace
            name
          }
        }
      }
    }
  }
`;

export default PoetsPage;
