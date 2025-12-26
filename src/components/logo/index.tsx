import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Anchor } from '@src/elements/anchor';

export function Logo() {
  return (
    <div className={styles.logo}>
      <Anchor href='#' className={styles.logoLink}>
        <TimerIcon />
        <span>Pomodoro</span>
      </Anchor>
    </div>
  );
}
