import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import DayAuthor from '../components/DayAuthor';
import DevTeam from '../components/DevTeam';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Welcome to the portal dedicated to Belarusian poets</h2>
    <p>
      Fugiat incididunt deserunt et sit voluptate pariatur duis id. Cupidatat
      exercitation voluptate adipisicing esse amet do do esse id et nulla consequat fugiat
      laborum. Non sint elit pariatur veniam elit pariatur mollit laborum adipisicing deserunt amet.
    </p>
    <p>
      Lorem ullamco officia fugiat commodo occaecat aliquip proident aliquip consectetur ullamco
      irure proident. Dolore quis id velit dolor consectetur excepteur fugiat consectetur et ut aute
      ex pariatur id. Voluptate excepteur consectetur aute mollit. Ullamco exercitation
      voluptate est aute dolor excepteur aute officia. Non nisi dolore ullamco in ullamco deserunt
      dolore est. Mollit fugiat anim velit aute ea non nisi amet eiusmod commodo.
    </p>
    <DayAuthor />
    <DevTeam />
  </Layout>
);

export default IndexPage;
