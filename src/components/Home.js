import React from 'react';
import posed from 'react-pose';
import Header from './Header';
import Tags from './Tags';
import MainImg from './MainImg';
import AllArticles from './AllArticles';

const Container = posed.div({
  enter: { opacity: 1, delay: 200 },
  exit: { opacity: 0 },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'Home',
      tagsArray: [
        {
          id: '1',
          name: '#TechDesign',
        },
        {
          id: '2',
          name: '#Healthcare Revolution',
        },
        {
          id: '3',
          name: '#Future',
        },
      ],
      imageName: '1',
      imageAlt: 'Image nr 1',
      articlesArray: [
        {
          id: '1',
          category: 'US',
          title: 'Poverty To Empowerment In Chicago',
          author: 'Bethy Eghan',
        },
        {
          id: '2',
          category: 'Politics',
          title: 'Divided Americans Lives During War',
          author: 'Bethy Eghan',
        },
        {
          id: '3',
          category: 'Tech',
          title: 'The Future of Gasoline',
          author: 'Bethy Eghan',
        },
      ],
    };
  }

  render() {
    const {
      component, tagsArray, imageName, imageAlt, articlesArray,
    } = this.state;
    return (
      <React.Fragment>
        <Header component={component} />
        <Container>
          <Tags tagsArray={tagsArray} />
          <MainImg imageName={imageName} imageAlt={imageAlt} />
          <AllArticles articlesArray={articlesArray} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
