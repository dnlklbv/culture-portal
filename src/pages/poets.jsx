import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ListOfAuthors from '../components/ListOfAuthors';

const SecondPage = () => (
  <Layout>
    <SEO title="Poets" />
    <h2 className="mb-4">Poets</h2>
    <ListOfAuthors />
  </Layout>
);

export default SecondPage;
