import React from 'react';
import Header from 'components/Header/Header';
import {
  MainDiv
} from './styles';

const Layout = (props) => (
  <MainDiv>
    <Header />
    {props.children}
  </MainDiv>
);

export default Layout;