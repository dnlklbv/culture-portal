import React, { Component } from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import AuthorCard from '../../components/AuthorCard';
import data from '../../data/kolas.json';

class Kupala extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: data.Kolas.en,
    };
  }

  render() {
    const { lng } = this.state;
    return (
      <Layout>
        <SEO title={lng.name} />
        <AuthorCard data={lng} />
      </Layout>
    );
  }
}

export default Kupala;
