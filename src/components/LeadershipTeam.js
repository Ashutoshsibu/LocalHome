import React from 'react';
import styled from 'styled-components';
import Team from './../assets/img/TemIcon.jpg'
import Linkind from './../assets/img/linkedin.png'

// Styled Components

const Section = styled.section`
  padding: 90px 20px;
  padding-bottom:110px;
  background-color: #ffffff;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333333;
  margin-bottom: 70px;
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  background-color: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  &:hover .infoOverlay {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  @media(min-width: 768px) {
    height: 250px;
  }

  @media(min-width: 1024px) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: #ffffff;
  padding: 20px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #ffffff;
`;

const Role = styled.h4`
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 400;
  color: #cccccc;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-top: 10px;
`;

const LinkedInIcon = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #0077b5;
  font-size: 1.5rem;
width: 8%;
  &:hover {
    color: #005582;
  }
`;

// LeadershipTeam Component

const LeadershipTeam = () => {
  return (
    <Section>
      <Title>Meet our Leadership Team</Title>
      <TeamContainer>
        <Card>
          <ImageWrapper>
            <Image src={Team} alt="Manoj" />
          </ImageWrapper>
          <InfoOverlay className="infoOverlay">
            <Name>Manoj Kumar Sahoo</Name>
            <Role>Co-Founder & CEO</Role>
            <LinkedInIcon href="https://www.linkedin.com/in/manojksahoo" target="_blank">
             <img src={Linkind}></img>
            </LinkedInIcon>
            <Description>
            Manoj Kumar Sahoo is a co-founder & CEO of Atomwalk Software. Manoj has guided Atomwalk into the position of a premier HR & Payroll solutions provider...
            </Description>
          </InfoOverlay>
        </Card>
        <Card>
          <ImageWrapper>
            <Image src="path_to_image_2.jpg" alt="Sayeed Anjum" />
          </ImageWrapper>
          <InfoOverlay className="infoOverlay">
            <Name>Sayeed Anjum</Name>
            <Role>Co-Founder & CTO</Role>
            <LinkedInIcon href="https://www.linkedin.com/in/sayeedanjum" target="_blank">
            <img src={Linkind}></img>
            </LinkedInIcon>
            <Description>
              Sayeed Anjum is a co-founder of Greytip Software. He is focused on improving the product development process and oversees all aspects of...
            </Description>
          </InfoOverlay>
        </Card>
        <Card>
          <ImageWrapper>
            <Image src="path_to_image_3.jpg" alt="Mohammed Azhar" />
          </ImageWrapper>
          <InfoOverlay className="infoOverlay">
            <Name>Mohammed Azhar</Name>
            <Role>Chief Sales Officer</Role>
            <LinkedInIcon href="https://www.linkedin.com/in/mohammedazhar" target="_blank">
            <img src={Linkind}></img>
            </LinkedInIcon>
            <Description>
              Mohammed Azhar has been an integral part of Greytip since 1998. He oversees the strategy, model and operations of sales resources...
            </Description>
          </InfoOverlay>
        </Card>
        <Card>
          <ImageWrapper>
            <Image src="path_to_image_4.jpg" alt="Krishna Prasad" />
          </ImageWrapper>
          <InfoOverlay className="infoOverlay">
            <Name>Krishna Prasad</Name>
            <Role>Chief Product Officer</Role>
            <LinkedInIcon href="https://www.linkedin.com/in/krishnaprasad" target="_blank">
            <img src={Linkind}></img>
            </LinkedInIcon>
            <Description>
              Krishna Prasad scaled dramatically from an intern to Product Head in his 19 years with Greytip. His hard work, resolve, and knowledge of the technical...
            </Description>
          </InfoOverlay>
        </Card>
      </TeamContainer>
    </Section>
  );
};

export default LeadershipTeam;
