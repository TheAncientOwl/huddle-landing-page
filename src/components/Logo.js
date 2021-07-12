import styled from 'styled-components';
import LogoSrc from '../images/logo.svg';

const Image = styled.img`
  width: 40vw;
  height: auto;
`;

export default function Logo() {
  return <Image src={LogoSrc} alt='huddle logo' />;
}
