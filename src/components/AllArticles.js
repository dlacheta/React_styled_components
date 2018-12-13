import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OneArticle = styled.div`
  border-bottom: 2px dotted #e0e0e0;
  padding: 1.5em 0;
`;

const Header2 = styled.h2`
  font-size: 2em;

  & a {
    text-decoration: none;
  }
`;

const AllArticles = ({ articlesArray }) => (
  <React.Fragment>
    {articlesArray.map(article => (
      <OneArticle key={article.id}>
        <h3>{article.category}</h3>
        <Header2>
          <Link to="/article">{article.title}</Link>
        </Header2>
      </OneArticle>
    ))}
  </React.Fragment>
);

AllArticles.propTypes = {
  articlesArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AllArticles;
