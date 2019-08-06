import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import DayAuthor from '../components/DayAuthor';
import DevTeam from '../components/DevTeam';
import PortalDescription from '../components/PortalDescription';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <PortalDescription />
    <DayAuthor authors={data.allJavascriptFrontmatter.edges} />
    <DevTeam />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allJavascriptFrontmatter: PropTypes.object,
  }).isRequired,
};

export const pageQuery = graphql`
  query {
    allJavascriptFrontmatter {
      edges {
        node {
          frontmatter{
            en {
              path
              imgSrc
              birthDate
              deathDate
              name
            }
            ru {
              path
              imgSrc
              birthDate
              deathDate
              name
            }
            by {
              path
              imgSrc
              birthDate
              deathDate
              name
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
