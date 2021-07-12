import styled from 'styled-components';
import LogoSrc from '../images/logo.svg';
import Breakpoints from '../Breakpoints';

const Image = styled.img`
  display: block;
  width: 42%;
  height: auto;

  @media (min-width: ${Breakpoints.mobile}) {
    width: 25%;
  }
`;

export default function Logo() {
  return <Image src={LogoSrc} alt='huddle logo' />;
}
