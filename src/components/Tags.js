import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 1em 0;
`;

const Tag = styled.div`
  font-size: 1.5em;
  color: black;
  padding-right: 1em;
  border-right: 2px dotted #e0e0e0;

  &:not(:first-child) {
    padding-left: 1em;
  }
`;

const Tags = ({ tagsArray }) => (
  <Container>
    {tagsArray.map(tag => (
      <Tag key={tag.id}>{tag.name}</Tag>
    ))}
  </Container>
);

Tags.propTypes = {
  tagsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Tags;
