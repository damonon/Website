import React, {Component} from 'react';
import styled from 'styled-components';
import placeholder from '../assets/Placeholder.png';
const Container = styled.section`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.div `
    display:block;
    font-family: 'Quicksand';
    font-weight: 700;
    text-align: center;
    padding-bottom: 10px;
    font-size: 32px;
    color: #23A6D5;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Image = styled.img`
    display:block;
    margin: 1rem;
    width: 350px;

    @media (max-width: 1158px){
        margin: 0 80px;
        width: 350px;
    }
`;

const MyInfo = styled.div`
    width: 350px;
    margin: 1rem;
    display: block;

    @media (max-width: 1158px){
        width: 550px;
        text-align:center;
    }
`;

const SubHeader= styled.p`
    margin: 0;
    font-family: 'Quicksand';
    font-weight: 400;
    font-size: 18px;
`;
const Text = styled.p`
    font-size: 13px;
    font-family: 'Quicksand';
    font-weight: 400;
`;
const TitleHeader = styled.p`
    font-size: 26px;
    margin:0;
    padding-bottom: 10px;
    font-family: 'Quicksand';
    font-weight: 500;
    color: #E73C7E;
`;

const CV = styled.a`
    display: block;
    text-decoration: none;
    font-family: 'Quicksand';
    font-weight: 400;
    font-size: 13px;
    color: black;
    cursor: pointer;
    margin-top: 1em;
    color: #E73C7E;
    &:hover {
        color: #23A6D5;
    }
`
class AboutMe extends Component {
    render(){
        return (
            <Container>
              <Header> Profile</Header>
                <InfoContainer>
                <MyInfo>
                    <TitleHeader>Description</TitleHeader>
                    <SubHeader>Name:</SubHeader>
                    <Text>Damon On</Text>
                    <SubHeader>Location:</SubHeader>
                    <Text> Ottawa, Ontario Canada</Text>
                    <SubHeader>Curriculum Vitae:</SubHeader>
                    <CV href='https://drive.google.com/open?id=1AS4Zvj3eV7IdEvvra95XWssVHKf_WyqN' target='_blank'>Click Me To View</CV>
                </MyInfo>
              <Image src ={placeholder} alt='placeH'/>
                <MyInfo>
                    <TitleHeader>About Me</TitleHeader>
                    <Text>
                    Hello World. I am a software developer living in Ottawa, Ontario, Canada. 
                    I spend most of my days working and learning different areas of development and tech. 
                    I am passionate about front end development (JavaScript/jQuery, HTML5, CSS3) with the focus of
                    writing clean, elegant and efficient code.
                    </Text>
                </MyInfo> 

                </InfoContainer>
            </Container>
        )
    }

}

export default AboutMe;