import { ArrowRightCircle } from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.png"
// import styled from 'styled-components';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled, { keyframes } from 'styled-components';
const borderAnimation = keyframes`
  0% {
    border-color: #b14bf4;
  }
  33% {
    border-color: #4d91ff;
  }
  66% {
    border-color: #7857ff;
  }
  100% {
    border-color: #b14bf4;
  }
`;

// Define the styled button component with the border animation
const StartedButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease; // For smooth transition
  border: 3px solid;
  border-radius: 5px;
  font-weight: 300;
  animation: ${borderAnimation} 3s linear infinite; // Apply the animation
margin-top: 30px;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); // Optional: creates a shadow to emphasize the transition effect
    transform: translateX(5px); // Moves the button slightly to the right
    font-weight: 500;
    border: none;
  }
`;
export const Skills = () => {
    const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const navigatet=()=>{
    window.location.href="/signin"
  }
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Streamline Your Operations</h2>
                        <p>Revolutionize your lab and manufacturing processes with Atomwalk Office. Our comprehensive management systems are designed to simplify complex workflows, enhance productivity, and provide real-time insights. Discover a seamless way to manage your projects and resources efficiently.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Manufacturing Small Business</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Consultancy Business</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Chemical Industry Small Business</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Lab Management System</h5>
                            </div>
                        </Carousel>
                        <StartedButton onClick={navigatet}>Get Started Today{" "}<ArrowRightCircle size={20} /></StartedButton>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Images" />
    </section>
  )
}
