import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

const AuthorGallery = ({ gallery }) => (
  <Carousel>
    {gallery.map(img => (
      <Carousel.Item key={img}>
        <img
          className="d-block w-100"
          src={img}
          alt="gallery slide"
        />
      </Carousel.Item>
    ))}
  </Carousel>
);

AuthorGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AuthorGallery;
