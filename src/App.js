import Logo from './components/Logo';
import AppContainer from './components/AppContainer';
import Illustration from './components/Illustration';
import Title from './components/Title';
import Description from './components/Description';
import RegisterButton from './components/RegisterButton';
import Socials from './components/Socials';

export default function App() {
  return (
    <AppContainer>
      <Logo />
      <Illustration />
      <Title />
      <Description />
      <RegisterButton />
      <Socials />
    </AppContainer>
  );
}
