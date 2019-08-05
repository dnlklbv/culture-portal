/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import AuthorCard from '../components/AuthorCard';

function Template({ data }) {
  const { id } = data;
  const { name } = data.javascriptFrontmatter.frontmatter;
  const { birthPlace } = data.javascriptFrontmatter.frontmatter;

  return (
    <div>
      <Layout>
        {
          <AuthorCard
            id={id}
            name={name}
            birthPlace={birthPlace}
          />
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

export const query = graphql`
  query($path: String!) {
    javascriptFrontmatter(frontmatter: {path: {eq: $path}}) {
      id
      frontmatter {
        lng
        path
        birthPlace
        name
      }
    }
  }
`;

export default Template;
