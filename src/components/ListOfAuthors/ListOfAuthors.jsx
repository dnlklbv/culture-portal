import React, { Component } from 'react';
import { Link } from 'gatsby';

import Form from 'react-bootstrap/Form';

const authors = [
  {
    name: 'Maksim Adamavic',
    birthPlace: 'Minsk',
  },
  {
    name: 'Yanka Kupala',
    birthPlace: 'Viazynka',
  },
  {
    name: 'Yakub Kolas',
    birthPlace: 'Akinchitsy',
  },
];

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
    const { searchValue } = this.state;
    const { handleSearchChange } = this;
    return (
      <>
        <Form.Control
          value={searchValue}
          onChange={handleSearchChange}
          size="lg"
          placeholder="Search by name, place of birth"
        />
        <ul>
          {authors
            .filter(author => (author.name + author.birthPlace).includes(searchValue))
            .map(author => (
              <li>
                <Link to={`/poets/${author.name}`}>{author.name}</Link>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}

export default ListOfAuthors;
