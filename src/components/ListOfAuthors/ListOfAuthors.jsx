import React, { Component } from 'react';

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
    const { searchValue } = this.state;
    const { handleSearchChange } = this;
    return (
      <Form.Control
        value={searchValue}
        onChange={handleSearchChange}
        size="lg"
        placeholder="Search by name, place of birth"
      />
    );
  }
}

export default ListOfAuthors;
