import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './404.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="h1">404</h1>
    <h4 className="h4">OOPS, SORRY WE CAN&apos;T FIND THAT PAGE!</h4>
    <h6 className="h6">Either something went wrong or the page  doesn&apos;t exist anymore.</h6>
  </Layout>
);

export default NotFoundPage;
