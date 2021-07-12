import styled from 'styled-components';

const Container = styled.div`
  color: white;

  font-size: 1.8em;
  font-weight: bold;
  max-width: 20ch;

  margin: 2.5em auto 0 auto;
  text-align: center;
`;

export default function Title() {
  return <Container>Build The Community Your Fans Will Love</Container>;
}
