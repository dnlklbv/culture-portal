import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

const SearchField = ({ searchValue, handleSearchChange }) => (
  <Form.Control value={searchValue} onChange={handleSearchChange} />
);

SearchField.defaultProps = {
  searchValue: '',
};

SearchField.propTypes = {
  searchValue: PropTypes.string,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchField;
