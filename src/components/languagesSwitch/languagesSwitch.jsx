import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';

const LanguagesSwitch = ({ i18n }) => (
  <Form.Control
    as="select"
    size="sm"
    defaultValue={i18n.language}
    onChange={(e) => { i18n.changeLanguage(e.target.value); }}
  >
    <option>en</option>
    <option>ru</option>
    <option>by</option>
  </Form.Control>
);

LanguagesSwitch.propTypes = {
  i18n: PropTypes.shape({
    language: PropTypes.string,
    changeLanguage: PropTypes.func,
  }).isRequired,
};
export default withTranslation()(LanguagesSwitch);
