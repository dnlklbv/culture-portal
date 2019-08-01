import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ListOfAuthors from '../components/ListOfAuthors';

const PoetsPage = ({ t }) => (
  <Layout>
    <SEO title="Poets" />
    <h2 className="mb-4">{t('Poets')}</h2>
    <ListOfAuthors />
  </Layout>
);

PoetsPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(PoetsPage);
