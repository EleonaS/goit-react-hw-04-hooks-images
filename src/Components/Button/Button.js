import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledButton,
  WraperButton,
} from './Button.styled';

const Button = ({ onClick }) => (
  <WraperButton>
    <StyledButton
      type="button"
      onClick={onClick}
    >
      Load more
    </StyledButton>
  </WraperButton>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { Button };
