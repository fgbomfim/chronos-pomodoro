import './styles/theme.css';
import './styles/global.css';

import { TimerIcon } from 'lucide-react';
import { Container } from '@src/components/container';
import { Heading } from '@src/components/heading';

export function App() {
  return (
    <Container>
      <Heading>
        Hello World!
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </Container>
  );
}
