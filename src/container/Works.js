import React, {Component} from 'react';
import styled from 'styled-components';
import github from '../assets/github-alt.svg';
import placeholder from '../assets/process.png';
import outcast from '../assets/OutCast.png';
import blackshape from '../assets/blackshape.png';
const Section = styled.section`
  width: 100%;
  padding: 80px 0;
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

const Text = styled.p`
  position: relative;
  left:50%;
  margin-left:-150px;
  margin-top: 0px;
  width: 300px;
  text-align: center;
  display:block;
  color:white;
  text-transform: uppercase;
  font-size: 18px;
  font-family: 'Quicksand';
  font-weight: 700;
`;

const Container = styled.div`
  margin: 0 7.5px;
  padding: 0 15px;
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding:0;
`;

const ListItem = styled.li`
  display: flex;
  padding: 1rem;
  width:350px;

`;

const CardImage1 = styled.img`
  width: 350px;
  height: auto;
  display: block;
  position:relative;
  filter: contrast(70%);
`;

const CardImage2 = styled.img`
  width: 350px;
  height: auto;
  display: block;
  position:relative;
  filter: contrast(70%);
`;

const CardImage3 = styled.img`
  width: 350px;
  height: auto;
  display: block;
  position:relative;
  filter: contrast(70%);
`;

const CardContainer = styled.div`
  width: 100%;
  background-color:white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display:flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    ${CardImage1} {
      filter:contrast(100%);
    }
    ${CardImage2} {
      filter:contrast(100%);
    }
    ${CardImage3} {
      filter:contrast(100%);
    }
  }
`;

const CardTextContainer = styled.div`
  display:flex;
  flex-direction: row;

`;

const CardText = styled.p`
  font-size: 0.85rem;
  margin: 13px 10px;
  font-family: 'Quicksand';
  font-weight: 400;
`;

const CardTextA = styled.a`
  width: 16px;
  margin: 11px 10px;
`;
class Works extends Component {
  render() {
    return(
      <Section>
        <Text>Some of my latest projects</Text>
        <Container>
          <UnorderedList>
            <ListItem>
              <CardContainer>
                <CardImage1 src = {placeholder} alt='placeholder'/>
                <CardTextContainer>
                  <CardTextA href='https://www.github.com/damonon' target='_blank'><img src={github} alt='gitcon'/></CardTextA>
                  <CardText>Work In Progress</CardText>
                </CardTextContainer>
              </CardContainer>
            </ListItem>
            <ListItem>
            <CardContainer>
            <CardImage2 src = {outcast} alt='outcast'/>
            <CardTextContainer>
              <CardTextA href='https://www.github.com/damonon' target='_blank'><img src={github} alt='gitcon'/></CardTextA>
              <CardText>Outcast</CardText>
          </CardTextContainer>
          </CardContainer>
          </ListItem>
          <ListItem>
          <CardContainer>
          <CardImage3 src = {blackshape} alt='blackshape'/>
          <CardTextContainer>
            <CardTextA href='https://www.github.com/damonon' target='_blank'><img src={github} alt='gitcon'/></CardTextA>
            <CardText>Blackshape Aircraft</CardText>
        </CardTextContainer>
        </CardContainer>
        </ListItem>
          </UnorderedList>
        </Container>
      </Section>
    )
  }
}

export default Works;