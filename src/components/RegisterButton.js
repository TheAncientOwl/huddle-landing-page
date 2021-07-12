import styled from 'styled-components';
import Colors from '../Colors';
import Breakpoints from '../Breakpoints';

const Button = styled.div`
  background: white;
  color: ${Colors.violet};
  margin: 2em auto 0 auto;
  width: 8ch;
  text-align: center;
  padding: 1em 5em;
  border-radius: 2em;
  font-weight: bold;
  box-shadow: 0.3em 0.3em 30px ${Colors.violet};

  @media (min-width: ${Breakpoints.mobile}) {
    margin: 2em 0 0 0;
  }
`;

export default function RegisterButton() {
  return (
    <Button
      onClick={() => {
        alert('registration completed');
      }}>
      Register
    </Button>
  );
}
