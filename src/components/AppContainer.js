import styled from 'styled-components';
import MobileBgSrc from '../images/bg-mobile.svg';
import Colors from '../Colors';

const AppContainer = styled.div`
  min-height: 100vh;

  background-image: url('${MobileBgSrc}');
  background-repeat: no-repeat;
  background-color: ${Colors.violet};

  padding: 1.5em;
`;

export default AppContainer;
