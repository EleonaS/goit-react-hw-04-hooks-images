import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  StyledOverlay,
  Content,
} from './Modal.styled';

function Modal({
  onClose,
  largeImageUrl,
}) {
  useEffect(() => {
    window.addEventListener(
      'keydown',
      handleKeyDown,
    );
    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return (
    <>
      <StyledOverlay
        onClick={handleBackdropClick}
      >
        <Content>
          <img
            src={largeImageUrl}
            alt="not available"
          />
        </Content>
      </StyledOverlay>
    </>
  );
}

Modal.propTypes = {
  largeImageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export { Modal };
