import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ListOfAuthors from '../components/ListOfAuthors';
import AuthorCard from '../components/AuthorCard';

const SecondPage = () => (
  <Layout>
    <SEO title="Poets" />
    <h2 className="mb-4">Poets</h2>
    <ListOfAuthors />
    <AuthorCard />
  </Layout>
);

export default SecondPage;
