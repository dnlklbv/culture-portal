import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const { PoetsList } = () => (
  <Layout>
    <SEO title="List of Belarusian poets" />
    <h1>List of Belarusian poets</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default PoetsList;
