import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

const MainImg = ({ imageName, imageAlt }) => (
  <Container>
    <img src={`/images/${imageName}.jpeg`} alt={imageAlt} />
  </Container>
);

MainImg.propTypes = {
  imageName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};

MainImg.defaultProps = {
  imageAlt: '',
};

export default MainImg;
