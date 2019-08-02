import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

function Template({ data }) {
  const { edges } = data.allJavascriptFrontmatter;

  return (
    <Layout>
      <div>
        {edges.map((author) => {
          const { id } = author.node;
          const { name } = author.node.frontmatter;
          return (
            <li key={id}>
              {name}
            </li>
          );
        })
        }
      </div>
    </Layout>
  );
}

Template.propTypes = {
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

export default Template;
