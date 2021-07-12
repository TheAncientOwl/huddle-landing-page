import styled from 'styled-components';
import Colors from '../Colors';

const Button = styled.div`
  background: white;
  color: ${Colors.violet};
  margin: 0 auto;
  margin-top: 2em;
  width: 8ch;
  text-align: center;
  padding: 1em 5em;
  border-radius: 2em;
  font-weight: bold;
  box-shadow: 0.3em 0.3em 30px ${Colors.violet};
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
