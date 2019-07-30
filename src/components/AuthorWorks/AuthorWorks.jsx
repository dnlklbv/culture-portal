import React from 'react';
import Table from 'react-bootstrap/Table';

const AuthorWorks = () => (
  <Table responsive bordered>
    <thead className="bg-light">
      <tr>
        <th>Years</th>
        <th>Works</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1908</td>
        <td>Vianok</td>
      </tr>
      <tr>
        <td>1908</td>
        <td>Vianok</td>
      </tr>
    </tbody>

  </Table>
);

export default AuthorWorks;
