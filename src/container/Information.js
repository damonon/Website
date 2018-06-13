import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	padding: 80px 0;
	background: #efefef;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 7.5px;
  padding: 0 15px;

  @media (max-width: 1205px){
    justify-content: center;
  }
`;

const ContainerSize = styled.div`
  width:350px;
  padding: 1rem;
`;

const SubHeader = styled.p`
  font-size: 20px;
  font-family: 'Quicksand';
  font-weight: 700;
  color: #23A6D5;
`;
const TimeDate = styled.p`
  font-size: 13px;
  font-family: 'Quicksand';
  font-weight: 500;
  text-transform: uppercase;
`
const Content = styled.p`
  font-size: 13px;
  font-family: 'Quicksand';
  font-weight: 400;
  color: #777777;
`;
class Information extends Component {
    render() {
			return (
        <Wrapper>
          <Container>
            <ContainerSize>
              <SubHeader>Education</SubHeader>
              <TimeDate>2018</TimeDate>
              <Content>Bachelor's Degree in Computer Science</Content>
              <Content>Carleton University</Content>
            </ContainerSize> 
            <ContainerSize>
              <SubHeader>Experience</SubHeader>
              <TimeDate>April 2018 - June 2018</TimeDate>
              <Content>Exocortex Technologies Inc</Content>
              <Content>Software Developer</Content>
              <TimeDate>Sept 2017 - Dec 2018</TimeDate>
              <Content>Teaching Assistant</Content>
              <Content>Fundamentals of Web Development</Content>
            </ContainerSize>
            <ContainerSize>
              <SubHeader>Skills</SubHeader>
              <Content>JavaScript</Content>
              <Content>HTML5</Content>
              <Content>CSS3/LESS/SASS</Content>
              <Content>jQuery</Content>
              <Content>ReactJS</Content>
              <Content>Java</Content>
              <Content>C++</Content>
              <Content>Databases (MySQL, mongoDB)</Content>
            </ContainerSize>
          </Container>
				</Wrapper>
			);
    }
}

export default Information;