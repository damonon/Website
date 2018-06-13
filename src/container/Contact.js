import React, {Component} from 'react';
import styled from 'styled-components';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/gmail.svg';

const Section = styled.section`
  padding: 30px 0;
  background: #efefef;
`;

const Container = styled.div`
  display: block;
  max-width: 100%;
`;

const Title = styled.p`
  text-align: center;
  color: #23A6D5;
  font-size: 32px;
  font-family: 'Quicksand';
  font-weight: 700;
  padding: 0;
  margin-top: 0;
`;
const InformationContainer = styled.div`
  justify-content: center;
`
const Information = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Quote = styled.p`
  text-align: center;
  font-family:'Quicksand';
  font-weight: 400;
  color: #E73C7E;
`;

const StyleImage = styled.img`
  filter: contrast(0%);
`;

const Email = styled.a`
  text-align: center;
  font-size: 12px;
  color: black;
  text-decoration: none;

  &:hover {
    ${StyleImage} {
      filter:contrast(100%);
    }
  }
`;

const Linkedin = styled.a`
  text-align: center;
  font-size: 12px;
  color: black;
  text-decoration: none;

  &:hover {
    ${StyleImage} {
      filter:contrast(100%);
    }
  }
`;

class Contact extends Component {
  render() {
    return(
      <Section>
        <Container>
          <Title>Let's get in touch</Title>
          <Quote>"The way to get started is to quit talking an begin doing."</Quote>
          <Quote>-Walt Disney</Quote>
          <InformationContainer>
            <Information>
            <li>
              <Email href = 'mailto:onddamon@gmail.com'><StyleImage src = {mail} alt= "mailicon"/></Email>
            </li>
            <li>
              <Linkedin href = 'https://www.linkedin.com/in/damon-on/' target='_blank'><StyleImage src = {linkedin} alt= "linkicon"/></Linkedin>
            </li>
            </Information>
          </InformationContainer>
        </Container>
      </Section>
    );
  }
}
export default Contact;