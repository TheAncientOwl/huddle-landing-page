import styled from 'styled-components';
import IllustrationSrc from '../images/illustration-mockups.svg';

const Image = styled.img`
  display: block;
  width: 98%;
  margin: 0 auto;
  margin-top: 3.5em;
`;

export default function Illustration() {
  return <Image src={IllustrationSrc} alt='illustration mockups' />;
}
