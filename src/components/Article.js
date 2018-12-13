import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import Header from './Header';
import MainImg from './MainImg';

const Container = posed.div({
  enter: { opacity: 1, delay: 200 },
  exit: { opacity: 0 },
});

const Header2 = styled.h2`
  font-size: 3em;
  font-family: 'Bevan', cursive;
`;

const Text = styled.p`
  margin: 0.5em 0;
  color: #bdbdbd;
  font-size: 2em;
`;

const Author = styled.h3`
  font-size: 1.5em;
  text-decoration: underline;
`;

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'Article',
      articleData: {
        id: '2',
        category: 'US',
        title: 'Poverty To Empowerment In Chicago',
        author: 'Bethy Eghan',
        article:
          'How one woman is transforming the lives of underprivileged children in the inner city',
      },
    };
  }

  render() {
    const {
      component,
      articleData: {
        id, category, title, author, article,
      },
    } = this.state;
    return (
      <React.Fragment>
        <Header component={component} />
        <Container>
          <MainImg imageName={id} imageAlt={title} />
          <h3>{category}</h3>
          <Header2>{title}</Header2>
          <Text>{article}</Text>
          <Author>{author}</Author>
        </Container>
      </React.Fragment>
    );
  }
}

export default Article;
