import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import Home from './components/Home';
import Article from './components/Article';

const Container = styled.div`
  margin: 0;
  padding: 20px;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: #fff;

  & a {
    color: #000;
  }
`;

const RouteContainer = posed.div({});

const App = () => (
  <Container>
    <Route
      render={({ location }) => (
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={Home} key="home" />
              <Route path="/article" component={Article} key="article" />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      )}
    />
  </Container>
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
