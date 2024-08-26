import React from 'react';
import styled from 'styled-components';
import People  from './../assets/img/Backgroundpeople.png'

// Styled Components

const Section = styled.section`
  background-color: #ffc24b;
;
  /* border-radius: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  padding: 50px 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    height: 600px;
    padding: 50px 300px
  }
`;

const TextContainer = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #555;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #a233db;
  top: 0;
  right: -10px;
  @media (max-width: 768px) {
 display: none;
  }
`;

const PeopleImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 650px;
  }
`;

// Component
const LetsConnect = () => {
  return (
    <Section>
      <TextContainer>
        <Title>Let's connect</Title>
        <Description>We would love to hear from you. How can we help?</Description>
      </TextContainer>
      <ImageContainer>
        <Circle />
        <PeopleImage src={People} alt="People talking" />
      </ImageContainer>
    </Section>
  );
};

export default LetsConnect;
