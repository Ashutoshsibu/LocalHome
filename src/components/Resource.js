import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import Backimag from './../assets/img/background.jpg'
const MainWraper=styled.div`
/* background-image:url(${Backimag}) ;
 */
background-color: rgb(227 227 227);
background-position: center center;
background-size: cover;
  background-repeat: no-repeat;
  @media(min-width: 768px) {
    width: 1920px;
    height: 950px;
  }
`

export default function Resource() {
  return (
 <MainWraper>
      <Spline
        scene= "https://prod.spline.design/A-83MDwDe-nnDmxX/scene.splinecode"
      />
      </MainWraper>
  );
}


        // scene="https://prod.spline.design/aKS8Ja8qxyS0rU9C/scene.splinecode" 
        // scene="https://prod.spline.design/7GzD2Vs4YClKXnsv/scene.splinecode" 
        // scene="https://prod.spline.design/UDc7XC4fLHqdbfwF/scene.splinecode" 
        // scene="https://prod.spline.design/QEjWj93GCC99Rvxa/scene.splinecode" 
        // scene="https://prod.spline.design/hvHay3xfoMkok1qq/scene.splinecode"
