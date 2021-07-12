import styled from 'styled-components';
import Breakpoints from '../Breakpoints';

const Container = styled.div`
  color: white;
  margin-top: 1.2em;
  text-align: center;
  line-height: 1.4em;

  @media (min-width: ${Breakpoints.mobile}) {
    text-align: left;
    font-size: 0.9em;
    max-width: 49ch;
  }
`;

export default function Description() {
  return (
    <Container>
      Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections
      with your users as you engage in genuine discussion.
    </Container>
  );
}
