import React, {Component} from 'react';
import styled from 'styled-components';
import envenlope from '../assets/envelope-square.svg';
import facebook from '../assets/facebook-square.svg';
import github from '../assets/github-square.svg';
import instagram from '../assets/instagram.svg';
import downarrow from '../assets/doubledown.png';

const Background = styled.section `
  width: 100%;
  height: 100vh;

    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 400% 400%;

    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
  }
  
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

`;

const Heading = styled.p `
  position: relative;
  font-family: 'Quicksand';
  font-weight:300;
  top: 50%;
  width: 215px;
  height:33px;
  margin: 0 auto;
  font-size: 180%; 
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  color: white;
  animation: type 2s steps(60,end);

  :nth-child(2){
    font-size: 100%;
    width: 310px;
    animation: type2 4s steps(60,end);
  }

  @keyframes type {
    from {width:0;}
  }

  @keyframes type2{
    0%{width: 0;}
    50%{width: 0;}
    100%{ width: 100; } 
  } 
`; 

const IconContainer = styled.div`
  position: relative;
  top:50%;

  animation: fadein 15s;
  @keyframes fadein {
    from{opacity:0;}
    to{opacity:1;}
  }
`;

const OrderList = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;

  padding: 0;

`;
const List = styled.li`
  width: 30px;
  height: 30px;
  margin:5px;
`;
const Atag = styled.a`
`;

const Arrow = styled.div`
  position:relative;
  display:flex;
  justify-content:center;
  top: 80%;

  @media (max-width: 500px){
    top: 65%;
  }

  animation: fadein 3s infinite;
  @keyframes fadein {
    from{opacity:0;}
    to{opacity:1;}
  }
`;
const ArrowImage = styled.img`
  width: 48px;
  height: 48px;
`;

class Header extends Component {
    render() {
      return (
          <Background>
            <Heading>
              Hi, I'm Damon
            </Heading>
            <Heading>
              I'm a front-end developer living in Ottawa.
            </Heading>
            <IconContainer>
              <OrderList>
                <List><Atag href='mailto:onddamon@gmail.com'><img src = {envenlope} alt= "enveicon"/></Atag></List>
                <List><Atag href='https://github.com/damonon' target='_blank'><img src = {github} alt= "hubicon"/></Atag></List>
                <List><Atag href='http://facebook.com/damon.on.7' target='_blank'><img src = {facebook} alt= "faceicon"/></Atag></List>
                <List><Atag href='http://instagram.com/damon.on' target='_blank'><img src = {instagram} alt= "instaicon"/></Atag></List>
              </OrderList>
            </IconContainer>
            <Arrow><ArrowImage src= {downarrow} alt='downa'/></Arrow>
          </Background>
      )
    }
}
export default Header;