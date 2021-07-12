import styled from 'styled-components';
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6em;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 0.1em solid white;
  padding: 0.35em;
  margin: 0 0.2em;
  border-radius: 50%;
`;

const IconsConfig = [
  { icon: <GrFacebookOption />, link: 'https://ro-ro.facebook.com/' },
  { icon: <GrTwitter />, link: 'https://twitter.com/?lang=ro' },
  { icon: <GrInstagram />, link: 'https://www.instagram.com/' },
];

export default function Socials() {
  return (
    <Container>
      {IconsConfig.map((item, index) => (
        <Icon key={index} href={item.link} target='_blank'>
          {item.icon}
        </Icon>
      ))}
    </Container>
  );
}
