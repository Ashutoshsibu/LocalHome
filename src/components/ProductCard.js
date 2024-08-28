import React from 'react';
import styled from 'styled-components';

// Main container for the entire section
const SectionContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

// Title of the section
const SectionTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  color: #000;
  margin-bottom: 40px;
  
  span {
    color: #9C27B0; /* Purple color for the highlighted text */
  }
`;

// Container for all the content boxes
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Individual content box style
const ContentBox = styled.div`
  background-color: ${(props) => props.bgColor || "#f0f0f0"};
  border-radius: 20px;
  padding: 30px;
  max-width: 60%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  @media (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

// Text container inside each content box
const TextContainer = styled.div`
  max-width: 40%;
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
    max-width: 100%;
  }
`;

// Heading of each content box
const BoxHeading = styled.h3`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

// Description text in each content box
const BoxText = styled.p`
  color: #666;
  font-size: 1em;
  margin-bottom: 20px;
`;

// Button for the content box
const Button = styled.button`
  background-color: #4a0072;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
`;

// Image inside the content box
const ImageContainer = styled.div`
  width: 50%;
  text-align: center;
  
  img {
    max-width: 100%;
    border-radius: 15px;
  }
`;

// Decorative elements (circles)
const DecorativeCircle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #9C27B0;
  border-radius: 50%;
  ${(props) => props.top && `top: ${props.top}; left: ${props.left};`}
  ${(props) => props.bottom && `bottom: ${props.bottom}; right: ${props.right};`}
`;

const ProductCard = () => {
  return (
    <SectionContainer>
      <SectionTitle>Don’t just employ... <span>Engage and Appraise</span> employees too</SectionTitle>
      <ContentContainer>
        <ContentBox bgColor="#fce4ec">
          <TextContainer>
            <BoxHeading>Project Management</BoxHeading>
            <BoxText>
            <li>dfsefsdfsdfsdfsdfsdfsdfsdfsdfdsfdsfdsfsdfsd</li>
            <li>dfsefsdfsdfsdfsdfsdfsdfsdfsdfdsfdsfdsfsdfsd</li>
            </BoxText>
            <Button>Request a Demo</Button>
          </TextContainer>
          <ImageContainer>
            <img src="path/to/image1.png" alt="Employee engagement" />
          </ImageContainer>
          <DecorativeCircle top="10%" left="80%" />
          <DecorativeCircle bottom="5%" right="10%" />
        </ContentBox>

        <ContentBox bgColor="#e0f7fa">
          <ImageContainer>
            <img src="path/to/image2.png" alt="Performance management" />
          </ImageContainer>
          <TextContainer>
            <BoxHeading>Performance management system</BoxHeading>
            <BoxText>greyHR’s PMS software consists of a comprehensive set of performance management tools and processes that will help you measure, evaluate and improve employee performance.</BoxText>
            <Button>Experience Live Demo</Button>
          </TextContainer>
          <DecorativeCircle top="20%" left="5%" />
          <DecorativeCircle bottom="10%" right="70%" />
        </ContentBox>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ProductCard;
