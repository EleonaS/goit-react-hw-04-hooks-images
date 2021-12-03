import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  webformatURL,
  onClick,
}) => (
  <>
    <Image
      src={webformatURL}
      onClick={onClick}
      alt="not found image"
    />
  </>
);

ImageGalleryItem.propTypes = {
  //alt: PropTypes.string.isRequired,
  webformatURL:
    PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ImageGalleryItem };
