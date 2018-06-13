import React, { Component } from 'react';
import './App.css';
import Header from './container/Header';
import AboutMe from './container/AboutMe';
import Information from './container/Information';
import Works from './container/Works';
import Contact from './container/Contact';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;


class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <AboutMe/>
        <Information/>
        <Works/>
        <Contact/>
      </Container>
    )
  }
}

export default App;
