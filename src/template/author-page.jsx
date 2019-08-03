import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import AuthorCard from '../components/AuthorCard';

function Template({ data }) {
  const { edges } = data.allJavascriptFrontmatter;

  return (
    <div>
      <Layout>
        {edges.map((author) => {
          const { id } = author.node;
          const { name } = author.node.frontmatter;
          const { birthPlace } = author.node.frontmatter;
          return (
            <AuthorCard
              id={id}
              name={name}
              birthPlace={birthPlace}
            />
          );
        })
        }
      </Layout>
    </div>

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
  query  {
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
