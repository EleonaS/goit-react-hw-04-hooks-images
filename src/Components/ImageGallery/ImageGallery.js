import React from 'react';
import {
  GalleryList,
  Item,
} from './ImageGallery.styled';
import { ImageGalleryItem } from 'Components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({
  images,
  onClose,
}) => {
  function handleClick(largeImageURL) {
    onClose(largeImageURL);
  }

  return (
    <GalleryList>
      {images.map(
        ({
          id,
          webformatURL,
          largeImageURL,
        }) => (
          <Item key={id}>
            <ImageGalleryItem
              id={id}
              webformatURL={
                webformatURL
              }
              onClick={() =>
                handleClick(
                  largeImageURL,
                )
              }
            />
          </Item>
        ),
      )}
    </GalleryList>
  );
};

export { ImageGallery };
