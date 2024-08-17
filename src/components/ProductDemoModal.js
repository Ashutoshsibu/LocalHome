import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

// Import your image
import rocketImage from "../assets/img/image.png"; // Replace with the correct path

// Custom styles for the modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "750px",
  },
  overlay: {
    backgroundColor: "#515151c9",
    zIndex: "32333",
  },
};

// Container for the modal content
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }
`;

// Container for the form
const FormContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 20px;
  }
`;

// Container for the image
const ImageContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    width: 40%;
  }
`;

// Title styling
const Title = styled.h2`
  font-size: 2.1em;
  color: rgb(170, 0, 234);
  margin-bottom: 10px;
  font-weight: 800;
  line-height: 1.25;
`;

// Description styling
const Description = styled.p`
  color: #555;
  margin-bottom: 20px;
`;

// Input styling
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

// Button styling
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6a1b9a;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;

  &:hover {
    background-color: #4a148c;
  }
`;

// Close button styling
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #d1cdcd;
  border-radius: 50%;
  width: 5%;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  &:hover{
  background: #454544;
  }
`;

const ProductDemoModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalContent>
        <FormContainer>
          <CloseButton onClick={onRequestClose}>&times;</CloseButton>
          <Title>Ready to see our product in action?</Title>
          <Description>
            See a demo of our product that's tailored just for you.
          </Description>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Phone Number" />
          <Input type="text" placeholder="Company Name" />
          <Button>Book My Demo</Button>
        </FormContainer>
        <ImageContainer>
          <img src={rocketImage} alt="Rocket" style={{ width: "100%" }} />
        </ImageContainer>
      </ModalContent>
    </Modal>
  );
};

export default ProductDemoModal;
