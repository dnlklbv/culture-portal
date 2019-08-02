import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import DayAuthor from '../components/DayAuthor';
import DevTeam from '../components/DevTeam';
import PortalDescription from '../components/PortalDescription';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PortalDescription />
    <DayAuthor />
    <DevTeam />
  </Layout>
);

export default IndexPage;
