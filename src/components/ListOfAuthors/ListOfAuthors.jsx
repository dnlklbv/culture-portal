import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { withTranslation } from 'react-i18next';

import Form from 'react-bootstrap/Form';

class ListOfAuthors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const { value } = event.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { i18n } = this.props;
    let lng = i18n.language;
    if (i18n.language === 'en-GB') {
      lng = 'en';
    } else if (i18n.language === 'be-BY') {
      lng = 'by';
    } else if (i18n.language === 'ru-RU') {
      lng = 'ru';
    };
    const { searchValue } = this.state;
    const { authors } = this.props;
    const { t } = this.props;
    const { handleSearchChange } = this;
    return (
      <>
        <Form.Control
          className="mb-3"
          value={searchValue}
          onChange={handleSearchChange}
          size="lg"
          placeholder={t('Search by name, place of birth')}
        />
        <ul>
          {authors.filter((author) => {
            const lang = author.node.frontmatter[lng];
            const { name, birthPlace } = lang;
            return (name + birthPlace).toLowerCase().includes(searchValue.toLowerCase());
          })
            .map((author) => {
              const { id } = author.node;
              const { path, name } = author.node.frontmatter[lng];
              return (
                <li key={id}>
                  <Link to={`${path}`}>{name}</Link>
                </li>
              );
            })
          }
        </ul>
      </>
    );
  }
}


ListOfAuthors.propTypes = {
  i18n: PropTypes.shape({
    language: PropTypes.string,
  }).isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        frontmatter: PropTypes.shape({
          path: PropTypes.string,
          lng: PropTypes.string,
          name: PropTypes.string,
          birthPlace: PropTypes.string,
        }),
      }),
    }),
  ).isRequired,
};

ListOfAuthors.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation()(ListOfAuthors);
