import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import styled from 'styled-components';
import { Menu } from 'styled-icons/material/Menu';
import { ArrowLeft } from 'styled-icons/fa-solid/ArrowLeft';
import { Search } from 'styled-icons/fa-solid/Search';
import { ShareAlt } from 'styled-icons/fa-solid/ShareAlt';

const ButtonMenu = posed.div({
  enter: { opacity: 1, delay: 300, rotate: 0 },
  exit: { opacity: 0, delay: 200, rotate: 360 },
});

const Button = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0, delay: 200 },
});

const ButtonMenuStyled = styled(ButtonMenu)`
  height: 30px;
  width: 30px;
`;

const ButtonStyled = styled(Button)`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftDiv = styled.div`
  display: flex;
`;

const MenuIcon = styled(Menu)`
  height: 3em;
  margin-top: 0.4em;
`;

const ArrowIcon = styled(ArrowLeft)`
  height: 2em;
  margin: 0.8em 0 0 0.6em;
`;

const PageTitle = styled.h1`
  font-size: 3em;
  margin: 0;
  padding: 0 0.8em;
  font-family: 'UnifrakturCook';
`;

const SearchIcon = styled(Search)`
  height: 2em;
`;

const ShareIcon = styled(ShareAlt)`
  height: 2em;
`;

const Header = ({ component }) => (
  <Container>
    <LeftDiv>
      <ButtonMenuStyled>
        {component === 'Home' ? (
          <MenuIcon />
        ) : (
          <Link to="/">
            <ArrowIcon />
          </Link>
        )}
      </ButtonMenuStyled>
      <PageTitle>The Fortnightly</PageTitle>
    </LeftDiv>
    <ButtonStyled>{component === 'Home' ? <SearchIcon /> : <ShareIcon />}</ButtonStyled>
  </Container>
);

Header.propTypes = {
  component: PropTypes.string.isRequired,
};

export default Header;
