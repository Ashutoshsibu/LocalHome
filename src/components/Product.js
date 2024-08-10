// ProductPage.js
import React from 'react';
import styled from 'styled-components';
import contactus from "../assets/img/what-is-ERP.jpg";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import manufacturing from "../assets/img/manufacturing-erp-solutions.png";
import manufacturing2 from "../assets/img/manufacturing-erp-software-implement.webp";

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${colorSharp}),url(${colorSharp2});
  background-position: left center, right top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: left top, right top;
    padding: 10px;
  }
`;

const Header = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2.5em;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ImagePlaceholder = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Text = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.95em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const List = styled.ul`
  margin: 20px 0;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const ListItem = styled.li`
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  color: #999;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const BackImage = styled.div`
  position: relative;
  height: 500px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${contactus});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7; /* Apply opacity to the background image only */
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const Tesdiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  height: 100%;
  z-index: 2; /* Ensure the text is above the background */
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

// Main Component
const Product = () => {
  return (
    <>
      <BackImage>
        <Tesdiv></Tesdiv>
      </BackImage>
      <PageContainer>
        <Header>Manufacturing ERP Solutions</Header>
        <ContentSection>
          <TextContainer>
            <Text>
              Manufacturing ERP is an Enterprise Resource Planning (ERP) software platform solution used to manage and optimize operational efficiency in manufacturing businesses. It consolidates data and workflows into one unified system, providing a comprehensive business management platform.
            </Text>
            <List>
              <ListItem>Minimizing redundancy and automating processes</ListItem>
              <ListItem>Optimizing manufacturing operations for enhanced productivity</ListItem>
              <ListItem>Improving supply chain, warehouse, transportation, and inventory management</ListItem>
              <ListItem>Mitigating risk and increasing confidence around compliance</ListItem>
              <ListItem>Providing better service to customers</ListItem>
              <ListItem>Unifying departments and comparing metrics across the business</ListItem>
            </List>
          </TextContainer>
          <ImagePlaceholder src={manufacturing} />
        </ContentSection>

        <ContentSection>
          <ImagePlaceholder style={{ backgroundColor: "#c5c5c5" }} src={manufacturing2} />
          <TextContainer>
            <Text>
              Atomwalk Office supports Manufacturing ERP with cutting-edge technology and offering cloud services that provide small and medium businesses with the tools they need to stay competitive. Our platform includes Project Management, Inventory Management, Process Template Modules, and more.
            </Text>
            <List>
              <ListItem>Rule-based Account Reconciliation with Sales, Purchase, and Accounting Modules</ListItem>
              <ListItem>CRM Modules for integrated systems</ListItem>
              <ListItem>Eliminates the need for multiple systems that don't communicate with one another</ListItem>
            </List>
          </TextContainer>
        </ContentSection>

        <Footer>© 2024 Atomwalk Office - All Rights Reserved</Footer>
      </PageContainer>
    </>
  );
};

export default Product;
