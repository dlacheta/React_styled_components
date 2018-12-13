import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import './styles/style.scss';
import Home from './components/Home';
import Article from './components/Article';

const RouteContainer = posed.div({});

const App = () => (
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
);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
