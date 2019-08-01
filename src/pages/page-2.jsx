import React, { Component } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ListOfAuthors from '../components/ListOfAuthors';
import AuthorCard from '../components/AuthorCard';
import data from '../data/authors.json';

/* const SecondPage = () => (
  <Layout>
    <SEO title="Poets" />
    <h2 className="mb-4">Poets</h2>
    <ListOfAuthors />
    <AuthorCard data={data.Bahdanovich.en} />
  </Layout>
); */

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: data.Bahdanovich.by,
    };
  }

  render() {
    const { lng } = this.state;
    return (
      <Layout>
        <SEO title="Poets" />
        <h2 className="mb-4">Poets</h2>
        <ListOfAuthors />
        <AuthorCard data={lng} />
      </Layout>
    );
  }
}

export default SecondPage;
