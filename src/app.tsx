import './styles/theme.css';
import './styles/global.css';

import { Container } from '@src/components/container';
import { CountDown } from '@src/components/count-down';
import { Logo } from '@src/components/logo';
import { Menu } from '@src/components/menu';
import { Task } from '@src/components/task';
import { Cycles } from '@src/components/cycles';
import { Button } from '@src/components/button';
import { PlayCircleIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <Task />
      </Container>

      <Container>
        <Cycles />
      </Container>

      <Container>
        <Button>
          <PlayCircleIcon />
        </Button>
      </Container>
    </>
  );
}
