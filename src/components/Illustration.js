import styled from 'styled-components';
import IllustrationSrc from '../images/illustration-mockups.svg';
import Breakpoints from '../Breakpoints';

const Image = styled.img`
  display: block;
  width: 98%;
  margin: 0 auto;
  margin-top: 3.5em;

  @media (min-width: ${Breakpoints.mobile}) {
    width: 97%;
    margin: 0;
    margin-top: 6.5em;
  }
`;

export default function Illustration() {
  return <Image src={IllustrationSrc} alt='illustration mockups' />;
}
