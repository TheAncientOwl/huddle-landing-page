import styled from 'styled-components';
import MobileBgSrc from '../images/bg-mobile.svg';
import DesktopBgSrc from '../images/bg-desktop.svg';
import Colors from '../Colors';
import Breakpoints from '../Breakpoints';

const AppContainer = styled.div`
  min-height: 100vh;

  background-image: url('${MobileBgSrc}');
  background-repeat: no-repeat;
  background-color: ${Colors.violet};
  background-size: 100%;

  padding: 2em;

  @media (min-width: ${Breakpoints.mobile}) {
    padding: 0;
    display: grid;
    grid-template-columns: 61% 39%;
    background-image: url('${DesktopBgSrc}');
    background-size: auto;
    background-size: contain;
  }
`;

export const LeftColumn = styled.div`
  @media (min-width: ${Breakpoints.mobile}) {
    padding: 3em 0 0 3em;
  }
`;

export const RightColumn = styled.div`
  @media (min-width: ${Breakpoints.mobile}) {
    padding: 0 3em 0 1em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1.2em;
  }
`;

export default AppContainer;
