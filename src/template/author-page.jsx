/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import AuthorCard from '../components/AuthorCard';

function Template({ data }) {
  const { id } = data;
  const { frontmatter } = data.javascriptFrontmatter;

  return (
    <div>
      <Layout>
        {
          <AuthorCard
            id={id}
            data={frontmatter}
          />
        }
      </Layout>
    </div>

  );
}

Template.propTypes = {
  data: PropTypes.shape({
    javascriptFrontmatter: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query($path: String!) {
    javascriptFrontmatter(frontmatter: {en: {path: {eq: $path}}}) {
      frontmatter {
        en {
          path
          birthPlace
          name
          birthDate
          deathDate
          imgSrc
          videoId
          gallery
          map {
            lat
            lng
            descr
          }
          works {
            year
            text
          }
          bio {
            year
            text
          }
        }
        ru {
          path
          birthPlace
          name
          birthDate
          deathDate
          imgSrc
          videoId
          gallery
          map {
            lat
            lng
            descr
          }
          works {
            year
            text
          }
          bio {
            year
            text
          }
        }
        by {
          path
          birthPlace
          name
          birthDate
          deathDate
          imgSrc
          videoId
          gallery
          map {
            lat
            lng
            descr
          }
          works {
            year
            text
          }
          bio {
            year
            text
          }
        }
      }
    }
  }
`;

export default Template;
