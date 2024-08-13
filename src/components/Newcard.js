import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const Manwarp = styled.div`
  position: relative; /* Establishes a containing block for the pseudo-elements */
  border: 3px solid #007cc3;
  width: 300px;
  height: 387px;
  overflow: hidden; /* Ensures the image doesn't overflow the component's borders */
  margin-bottom: 24px;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease; /* Adds a smooth transition effect */
    z-index: 1; /* Positions the image behind the color overlay */
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*background-color: rgba(10, 23, 54, 0.5);  Semi-transparent color overlay */
    box-shadow: inset -1px 5px 61px 23px #305cc380;
    z-index: 2; /* Positions the color overlay above the image */
  }

  &:hover::before {
    transform: scale(1.05); /* Scales the image slightly on hover */
  }
`;
// const Maintext = styled.div`
// margin-top: 10px;
//   padding-left: 20px;
//   position: absolute;
//   color: black;
//   font-family: Centra;
//   font-size: 33px;
//   line-height: 1.1;
//   font-weight: 500;
//   z-index: 3;
// `;
const Buttonexp = styled.div`
  position: absolute;
  border: 2px solid white;
  height: 40px;
  z-index: 4;
  bottom: 12px;
  right: 8px;
  width: 108px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    animation: slideBg 450ms forwards;
    border:2px solid white;
  }

  @keyframes slideBg {
    from {
      background-position: 0% 0;
    }
    to {
      background-position: 100% 0;
    }
  }

  background: linear-gradient(to right , #0a1736 50%, #007cc3 50%);
  background-size: 200% 100%;
  transition: background-position 1s;
`;
const MainDiv=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`
const Newcard = (props) => {
  return (

    <Col style={{margin:"-2px"}} size={5} sm={6} md={4}>
    <MainDiv>
    <Manwarp image={props.image}>
      {/* <Maintext>{props.project.title} </Maintext> */}
      <Buttonexp>EXPLORE</Buttonexp>
    </Manwarp>
    </MainDiv>
       </Col>

  );
};

export default Newcard;
