import React from 'react';
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';

const AuthorWorks = ({ works }) => (
  <Table responsive bordered>
    <thead className="bg-light">
      <tr>
        <th>Years</th>
        <th>Works</th>
      </tr>
    </thead>
    <tbody>
      {works.map(item => (
        <tr>
          <td>{item.year}</td>
          <td>{item.text}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

AuthorWorks.propTypes = {
  works: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default AuthorWorks;
