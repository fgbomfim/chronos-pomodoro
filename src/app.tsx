import './styles/theme.css';
import './styles/global.css';

import { Container } from '@src/components/container';
import { Logo } from '@src/components/logo';
import { Menu } from '@src/components/menu';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
